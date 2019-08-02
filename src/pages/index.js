/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import HeaderAside from "../components/header-aside"

function ContentWithAside({ main, aside }) {
  return (
    <div sx={{ position: "relative" }}>
      <aside
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          // bg: "rgba(0,0,0,0.5)",
          right: "fullContentWidth",
          color: "lightText",
        }}
      >
        {aside}
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
            Also known as pombo, pomber, pombus, pombex, pomberman, or just{" "}
            <Styled.code>/pomb[a-z]+/</Styled.code>
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
    <Header data={data} />
    <Styled.thematicBreak />
    <Navigation />
    <Content />
  </Layout>
)

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
