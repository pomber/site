import React, { useLayoutEffect, useRef, useState, useContext } from "react"

const ObserverContext = React.createContext()

export function Scroller({ onStepChange, children }) {
  const [observer, setObserver] = useState()
  // const ref = useRef(null)

  const vh = useWindowHeight()

  useLayoutEffect(() => {
    const handleIntersect = entries => {
      entries.forEach(entry => {
        if (entry.intersectionRatio > 0) {
          // ref.current = entry.target.stepInfo
          onStepChange(entry.target.stepInfo)
        }
      })
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
    return isClient ? window.innerHeight : undefined
  }
  const [windowHeight, setWindowHeight] = useState(getHeight)
  React.useEffect(() => {
    function handleResize() {
      setWindowHeight(getHeight())
    }
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])
  return windowHeight
}

function useKeywordNavigation(ref) {
  React.useEffect(() => {
    const handleKeyDown = event => {
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
