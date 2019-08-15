/** @jsx jsx */
import { jsx } from "theme-ui"
import React from "react"
import Scroller from "gatsby-theme-waves/src/components/bar-scroller"
import Wave from "gatsby-theme-waves/src/components/wave"

function toColumns(items, columnCount) {
  const columns = Array(columnCount)
    .fill()
    .map(() => [])

  items.forEach((item, i) => {
    const isImg =
      item.props &&
      item.props.mdxType === "p" &&
      item.props.children &&
      item.props.children.props &&
      item.props.children.props.className === "gatsby-resp-image-wrapper"
    // console.log("item props", item.props, isImg)
    if (isImg) {
      const img = React.cloneElement(item.props.children.props.children[3], {
        style: { objectFit: "contain", margin: 0 },
      })
      columns[0].push(img)
      columns[1].push(React.createElement("div", {}, []))
    } else {
      const step = columns[0].length - 1
      columns[1][step].props.children.push(item)
    }
  })

  return columns
}

function ImageWave(props) {
  const childrenToColumns = children => {
    const items = React.Children.map(children, child => [child])
    const columnCount = 2
    const columns = toColumns(items, columnCount)
    return columns
  }

  return (
    <Wave
      columnComponents={[ImageSticker, Scroller]}
      childrenToStepColumns={childrenToColumns}
      {...props}
    />
  )
}

function ImageSticker({ progress, steps, variant }) {
  const currentStep = Math.round(progress)
  const prev = steps[currentStep - 1]
  const curr = steps[currentStep]
  const next = steps[currentStep + 1]

  const sx = {
    position: "absolute",
    height: "100%",
    width: "100%",
    display: "flex",
    justifyContent: "center",
  }

  return (
    <div
      sx={{
        variant: `styles.waves.${variant}.StickerContainer`,
        backgroundColor: "darkBackground",
      }}
    >
      <div sx={{ variant: `styles.waves.${variant}.Sticker` }}>
        {prev && (
          <div
            sx={sx}
            style={{ opacity: Math.max(0, currentStep - progress) }}
            key={currentStep - 1}
          >
            {prev}
          </div>
        )}
        <div
          sx={sx}
          style={{ opacity: 1 - Math.abs(currentStep - progress) }}
          key={currentStep}
        >
          {curr}
        </div>
        {next && (
          <div
            sx={sx}
            style={{ opacity: Math.max(0, progress - currentStep) }}
            key={currentStep + 1}
          >
            {next}
          </div>
        )}
      </div>
    </div>
  )
}

export default ImageWave
