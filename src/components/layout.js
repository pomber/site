/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Global, css } from "@emotion/core"
import { useTwitterEffect } from "./twitter-effect"

function Layout({ children, responsive }) {
  useTwitterEffect()
  return (
    <Styled.root
      sx={{
        display: "flex",
        width: ["100vw", "auto"],
        minWidth: ["auto", "1020px"],
      }}
    >
      <Global
        styles={css`
          body {
            margin: 0;
          }
          @media (max-width: 1020px) {
            body {
              overflow-x: ${responsive ? "hidden" : "visible"};
            }
          }
        `}
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
            py: [5, "topMargin"],
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
