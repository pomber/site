/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Toggle from "react-toggle"
import Content from "../components/content"
import Header from "../components/header"

function Navigation() {
  return (
    <nav>
      <label>
        <Toggle defaultChecked={false} onChange={() => {}} />
        <span>Posts</span>
      </label>
      <label>
        <Toggle defaultChecked={false} onChange={() => {}} />
        <span>Talks</span>
      </label>
      <label>
        <Toggle defaultChecked={false} onChange={() => {}} />
        <span>Projects</span>
      </label>
    </nav>
  )
}

export default ({ data }) => (
  <Layout responsive={true}>
    <SEO responsive={true} />
    <Header />
    {/* <Navigation /> */}
    {/* <Styled.thematicBreak /> */}
    <Content />
  </Layout>
)
