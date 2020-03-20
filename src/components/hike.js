/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import { BrowserIframe } from "./browser"
import EditorFrame from "./editor"
import Wave from "gatsby-theme-waves/src/components/wave"
import Scroller from "gatsby-theme-waves/src/components/bar-scroller"

function toColumns(items) {
  const columns = [[], []]

  items.forEach((item, i) => {
    const isView = item && item.props && item.props.originalType === View
    if (isView) {
      columns[0].push(React.Children.toArray(item.props.children))
      columns[1].push(React.createElement("div", {}, []))
    } else {
      const step = columns[0].length - 1
      columns[1][step].props.children.push(item)
    }
  })

  return columns
}

function HikeWave(props) {
  const childrenToColumns = children => {
    const items = React.Children.map(children, child => [child])
    return toColumns(items)
  }

  return (
    <Wave
      columnComponents={[Sticker, Scroller]}
      childrenToStepColumns={childrenToColumns}
      {...props}
    />
  )
}

function Sticker({ progress, steps, variant }) {
  const prevKids = steps[Math.floor(progress)]
  const nextKids = steps[Math.floor(progress) + 1] || prevKids
  const padding = 30

  const frame = getFrame(prevKids, nextKids, progress % 1, padding)

  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.StickerContainer`,
      }}
    >
      <div
        style={{
          height: "100vh",
          width: "100%",
          position: "sticky",
          top: 0,
        }}
      >
        {frame.map(({ child, translateY, opacity }, i) => (
          <div
            style={{
              position: "absolute",
              top: "50%",
              width: "100%",
              transform: `translateY(${translateY}px)`,
              opacity: opacity,
            }}
          >
            {child}
          </div>
        ))}
      </div>
      {/* <div
        style={{
          height: "100%",
          width: "100%",
        }}
      >
        <div
          sx={{
            variant: `styles.waves.${variant}.Sticker`,
          }}
          style={{
            height: "100vh",
            maxHeight: "100vh",
            top: 0,
          }}
        >
          {steps[currentStep]}
        </div>
      </div> */}
    </div>
  )
}
function View({ children }) {
  return <div>{children}</div>
}
function Editor(props) {
  return <EditorFrame files={[]} {...props} />
}
function Browser({ height }) {
  return <BrowserIframe url="https://x1-bx780mpxy.now.sh/" height={height} />
}

export { HikeWave, View, Editor, Browser }

function getFrame(prevKids, nextKids, progress, padding) {
  const current = prevKids.filter(e =>
    nextKids.some(p => p.props.originalType === e.props.originalType)
  )
  const exit = prevKids.filter(
    e => !nextKids.some(p => p.props.originalType === e.props.originalType)
  )
  const enter = nextKids.filter(
    e => !prevKids.some(p => p.props.originalType === e.props.originalType)
  )

  const currentHeights = getHeights(current)
  const exitHeights = getHeights(exit)
  const enterHeights = getHeights(enter)

  const prevTops = translates(
    [...exitHeights, ...currentHeights],
    [],
    enterHeights,
    padding
  )
  const nextTops = translates(
    [...currentHeights, ...enterHeights],
    exitHeights,
    [],
    padding
  )
  const frameTops = tween(prevTops, nextTops, progress)

  return [...exit, ...current, ...enter].map((kid, i) => ({
    child: kid,
    translateY: frameTops[i],
    opacity: current.includes(kid)
      ? 1
      : exit.includes(kid)
      ? tweenOpacity(1 - progress)
      : tweenOpacity(progress),
  }))
}

function tweenOpacity(t) {
  return t * t * t
}

function tween(prevs, nexts, t) {
  return prevs.map((p, i) => {
    const n = nexts[i]
    return (n - p) * t + p
  })
}

function getHeights(kids) {
  return kids.map(kid => {
    if (!kid || !kid.props || kid.props.height == null) {
      console.warn("View children should have a height prop")
      return 0
    } else {
      return kid.props.height
    }
  })
}

function translates(current, exit, enter, padding) {
  const total = sum(current) + (current.length - 1) * padding
  const middle = total / 2
  let acc = -middle
  const currentTops = current.map(h => {
    const top = acc
    acc += h + padding
    return top
  })

  const exitTotal = sum(exit) + exit.length * padding
  acc = (currentTops[0] || -200) - exitTotal
  const exitTops = exit.map(h => {
    const top = acc * 1.4
    acc += h + padding
    return top
  })

  acc = (middle || 200) + padding
  const enterTops = enter.map(h => {
    const top = acc * 1.4
    acc += h + padding
    return top
  })

  return [...exitTops, ...currentTops, ...enterTops]
}

function sum(array) {
  return array.reduce((a, b) => a + b, 0)
}
