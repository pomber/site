/** @jsx jsx */
import { jsx } from "theme-ui"

function ContentWithAside({ main, aside, stx = {} }) {
  return (
    <div sx={{ position: "relative", ...stx }}>
      <aside
        sx={{
          position: ["static", "absolute"],
          width: "100%",
          height: ["auto", "100%"],
          right: ["auto", "fullContentWidth"],
          color: ["text", "lightText"],
        }}
      >
        <div
          sx={{
            float: ["none", "right"],
            display: ["block", "inline-block"],
            textAlign: ["left", "right"],
          }}
        >
          {aside}
        </div>
      </aside>
      <div>{main}</div>
    </div>
  )
}

export default ContentWithAside
