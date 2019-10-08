/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Global } from "@emotion/core"

// 1200 x 628
// 600 x 314

function Page() {
  return (
    <Styled.root
      sx={{
        // display: "flex",
        width: "100vw",
      }}
    >
      <Global
        styles={{
          body: { margin: 0, overflowX: "hidden" },
          bg: "background",
        }}
      />
      <Styled.h1
        sx={{
          fontSize: "42px",
          mb: "20px",
          position: "fixed",
          width: "100%",
          textAlign: "center",
          color: "#202226",
          top: 32,
        }}
      >
        use-spring
      </Styled.h1>
      <img
        src="https://user-images.githubusercontent.com/1911623/65393087-d9a47000-dd52-11e9-8b88-fc4330cd8653.png"
        sx={{ width: "100%" }}
      ></img>
    </Styled.root>
  )
}

export default Page
