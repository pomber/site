import React, { useLayoutEffect, useRef, useState, useContext } from "react"

const ObserverContext = React.createContext()

export function Scroller({ onStepChange, children }) {
  const [observer, setObserver] = useState()
  // const ref = useRef(null)

  const vh = useWindowHeight()

  // const [rootRect, setRootRect] = useState({})
  // const [intersections, setIntersections] = useState([])

  useLayoutEffect(() => {
    const handleIntersect = (entries) => {
      entries.forEach((entry) => {
        if (entry.intersectionRatio > 0) {
          // ref.current = entry.target.stepInfo
          onStepChange(entry.target.stepInfo)
        }
      })
      // setRootRect(entries[0].rootBounds)
      // setIntersections(entries.map(e => e.intersectionRect))
    }
    const observer = new IntersectionObserver(handleIntersect, {
      rootMargin: `-${vh / 2 - 2}px 0px`,
      threshold: 0.000001,
    })
    setObserver(observer)

    return () => observer.disconnect()
  }, [vh])

  return (
    <ObserverContext.Provider value={observer}>
      {children}
      {/* <div
        style={{
          position: "fixed",
          background: "blue",
          opacity: 0.3,
          height: rootRect.height,
          width: rootRect.width,
          top: rootRect.top,
          left: rootRect.left,
        }}
      />
      {intersections.map((rect, i) => (
        <div
          key={i}
          style={{
            position: "fixed",
            background: "green",
            opacity: 0.5,
            height: rect.height,
            width: rect.width,
            top: rect.top,
            left: rect.left,
          }}
        />
      ))} */}
    </ObserverContext.Provider>
  )
}

/// ---

export function StepContainer({ children, id, ...props }) {
  const ref = useRef()
  const observer = useContext(ObserverContext)

  useLayoutEffect(() => {
    if (observer) {
      observer.observe(ref.current)
    }
    return () => observer && observer.unobserve(ref.current)
  }, [observer])

  useLayoutEffect(() => {
    ref.current.stepInfo = id
  }, [id])

  return (
    <div {...props} ref={ref}>
      {children}
    </div>
  )
}

function useWindowHeight() {
  const isClient = typeof window === "object"
  function getHeight() {
    return isClient ? document.documentElement.clientHeight : undefined
  }
  const [windowHeight, setWindowHeight] = useState(getHeight)
  React.useEffect(() => {
    function handleResize() {
      setWindowHeight(getHeight())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  React.useLayoutEffect(() => {
    // FIX when an horizontal scrollbar is added after the first layout
    setWindowHeight(getHeight())
  }, [])
  return windowHeight
}

function useKeywordNavigation(ref) {
  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (/^(?:input|textarea|select|button)$/i.test(event.target.tagName)) {
        return
      }

      if (event.keyCode == 32 && !event.shiftKey) {
        const nextIndex = ref.current != null ? ref.current + 1 : 0
        // TODO extract element id format
        const element = document.getElementById(`step-${nextIndex}`)
        if (element) {
          event.preventDefault()
          element.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
          window.location.href = "#"
          window.location.href = `#step-${nextIndex}`
        }
      }
      if (event.keyCode == 32 && event.shiftKey) {
        const prevIndex = ref.current != null ? Math.max(ref.current - 1, 0) : 0
        // TODO extract element id format
        const element = document.getElementById(`step-${prevIndex}`)
        if (element) {
          event.preventDefault()
          // element.scrollIntoView({
          //   behavior: "smooth",
          //   block: "start",
          // })
          window.location.href = "#"
          window.location.href = `#step-${prevIndex}`
        }
      }
    }

    document.addEventListener("keydown", handleKeyDown)

    return () => {
      document.removeEventListener("keydown", handleKeyDown)
    }
  }, [])
}
