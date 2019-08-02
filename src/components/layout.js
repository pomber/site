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
          width: "50%",
          minHeight: "100vh",
        }}
      />
      <div sx={{ bg: "background", color: "text", width: "50%" }}>
        <main
          sx={{
            width: "50%",
            pt: "topMargin",
            pl: "innerMargin",
            width: "content",
          }}
        >
          {children}
        </main>
      </div>
    </Styled.root>
  )
}

export default Layout
