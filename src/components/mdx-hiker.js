import React from "react"

export function View() {
  return null
}

export function Hike({ views, children }) {
  const mdxSteps = React.useMemo(() => getTextChildrenFromMdx(children), [])
}

function getTextChildrenFromMdx(children) {
  const steps = []
  React.Children.forEach(children, child => {
    const isView = child && child.props && child.props.originalType === View
    if (isView) {
      steps.push(React.createElement("div", {}, []))
    } else {
      steps[steps.length - 1].props.children.push(child)
    }
  })
  return steps
}
