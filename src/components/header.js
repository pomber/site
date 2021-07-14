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
          <Styled.p style={{fontSize: "1.4em"}}>
            An overengineer building tools for better code reading comprehension
          </Styled.p>
        </>
      }
      aside={<HeaderAside />}
    />
  )
}

export default Header
