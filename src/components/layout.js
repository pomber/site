/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Global } from "@emotion/core"

function Layout({ children }) {
  return (
    <Styled.root sx={{ display: "flex", overflowX: "hidden", width: "100vw" }}>
      <Global
        styles={{
          body: { margin: 0 },
        }}
      />
      <aside
        sx={{
          bg: "darkBackground",
          color: "lightText",
          width: [0, "50%"],
          minHeight: "100vh",
        }}
      />
      <div sx={{ bg: "background", color: "text", width: ["100%", "50%"] }}>
        <main
          sx={{
            pt: [5, "topMargin"],
            pl: [0, "innerMargin"],
            width: ["content", "content"],
            maxWidth: ["80%", "none"],
            mx: ["auto", 0],
          }}
        >
          {children}
        </main>
      </div>
    </Styled.root>
  )
}

export default Layout
