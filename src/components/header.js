/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import HeaderAside from "./header-aside"
import ContentWithAside from "./content-with-aside"

function Header() {
  return (
    <ContentWithAside
      stx={{ pb: [3, 5] }}
      main={
        <>
          <Styled.h1>I'm Rodrigo Pombo</Styled.h1>
          <Styled.p>
            Also known as pombo, pomber, pombus, pombex, pomberman, or any{" "}
            <Styled.inlineCode sx={{ whiteSpace: "pre" }}>
              /pomb[a-z]+/
            </Styled.inlineCode>{" "}
            match.
          </Styled.p>
          <Styled.p>
            I write code, write about writing code, sometimes talk about it,
            usually tweet about it.
          </Styled.p>
        </>
      }
      aside={<HeaderAside />}
    />
  )
}

export default Header
