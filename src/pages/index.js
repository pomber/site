/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderAside from "../components/header-aside"

function ContentWithAside({ main, aside }) {
  return (
    <div sx={{ position: "relative" }}>
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
          }}
        >
          {aside}
        </div>
      </aside>
      <div>{main}</div>
    </div>
  )
}

function Header() {
  return (
    <ContentWithAside
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

function Navigation() {
  return <nav>Writing - Speaking - Projects</nav>
}

function Content() {
  return (
    <>
      <article>Foo</article>
    </>
  )
}

export default ({ data }) => (
  <Layout>
    <SEO />
    <Header />
    {/* <Styled.thematicBreak />
    <Navigation />
    <Content /> */}
  </Layout>
)
