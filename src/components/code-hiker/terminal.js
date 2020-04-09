import React from "react"
import { useSpring } from "use-spring"
const STARTING_OFFSET = 10
export function Terminal({ code, running }) {
  const [{ steps, notMeasured, target }, setState] = React.useState({
    steps: [{ height: STARTING_OFFSET, code: "" }],
    notMeasured: null,
    target: 0,
  })

  const measureRef = React.useRef()

  React.useEffect(() => {
    setState({
      steps: steps,
      notMeasured: code,
      target: target,
    })
  }, [code])

  React.useLayoutEffect(() => {
    if (notMeasured != null) {
      setState({
        steps: [
          ...steps,
          {
            code: notMeasured,
            height: measureRef.current.getBoundingClientRect().height,
          },
        ],
        notMeasured: null,
        target: steps.reduce((sum, step) => sum + step.height, 0),
      })
    }
  }, [notMeasured])

  const [current] = useSpring(target)

  const stepProgress = getProgressList(
    current,
    steps.map(s => s.height)
  )
  // console.log(stepProgress);
  return (
    <div
      style={{
        fontSize: "13px",
        height: "100%",
        boxSizing: "border-box",
        background: "rgb(30, 30, 30)",
        color: "rgb(231, 231, 231)",
        overflow: "hidden",
        padding: "0 8px 8px",
        fontFamily:
          "Ubuntu,Droid Sans,-apple-system,BlinkMacSystemFont,Segoe WPC,Segoe UI,sans-serif",
      }}
    >
      <div
        style={{
          transform: `translateY(-${current}px)`,
          lineHeight: "1.2rem",
        }}
      >
        <div style={{ height: STARTING_OFFSET }}></div>
        {steps.slice(1).map((step, i) => (
          <InnerTerminal code={step.code} key={i} progress={stepProgress[i]} />
        ))}
        {stepProgress[stepProgress.length - 2] === 1 && !running && (
          <InnerTerminal code="_" progress={1} />
        )}
        {notMeasured != null && (
          <div ref={measureRef}>
            <InnerTerminal code={notMeasured} progress={1} />
          </div>
        )}
      </div>
    </div>
  )
}

export function InnerTerminal({ code, progress }) {
  const [p] = useSpring(progress)
  const currentCode = code && code.substring(0, code.length * p)
  const commands = codeToCommands(currentCode)
  return commands.map((c, i) => (
    <Command key={i} command={c.command} output={c.output} />
  ))
}

function codeToCommands(code) {
  if (!code) return []
  return code
    .split("$ ")
    .filter(c => !!c)
    .map(c => {
      const [command, ...output] = c.split(/\r?\n/)
      return { command, output }
    })
}

// light blue rgb(156,220,254)
// light yellow rgb(220,220,170)
function Command({ command, output = [] }) {
  return (
    <>
      <div style={{ paddingTop: 2, color: "" }}>
        <span style={{ color: "rgb(86,156,214)", userSelect: "none" }}>$ </span>
        {command}
      </div>
      <div style={{ paddingTop: 0 }}>
        {output.map((line, i) => (
          <div
            key={i}
            style={{ color: "rgb(140,140,140)", userSelect: "none" }}
          >
            {line}
          </div>
        ))}
      </div>
    </>
  )
}

function getProgressList(progress, heights) {
  let p = progress
  const result = []
  for (let i = 0; i < heights.length; i++) {
    if (p < 0) result.push(0)
    else if (p >= heights[i]) result.push(1)
    else if (p < heights[i]) result.push(p / heights[i])
    p -= heights[i]
  }
  return result
}
