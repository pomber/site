/** @jsx jsx */
import React from "react"
import { Styled, jsx, ThemeProvider } from "theme-ui"
import { Global } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ContentWithAside from "../components/content-with-aside"
import { SocialIcons } from "./social-icons"

const PostFooter = () => {
  return (
    <footer sx={{ paddingTop: 3, textAlign: "center" }}>
      <p sx={{ fontSize: "2rem", letterSpacing: "0.3em" }}>***</p>
      <p>
        Explore more on <Styled.a href="/">pomb.us</Styled.a>
      </p>
      <SocialIcons />
    </footer>
  )
}

const Post = ({ data: { post, card }, location }) => {
  const theme = post.responsive ? {} : { breakpoints: [0] }
  return (
    <ThemeProvider theme={theme}>
      <Layout location={location} responsive={post.responsive}>
        <SEO
          title={post.title}
          description={post.description || post.excerpt}
          article={true}
          card={card}
          responsive={post.responsive}
        />
        <main>
          <ContentWithAside
            main={
              <Styled.h1 sx={{ paddingBottom: "80px" }}>{post.title}</Styled.h1>
            }
            aside={
              <Styled.p sx={{ paddingTop: 1 }}>
                <Styled.a
                  href="/"
                  sx={{
                    textDecoration: "none",
                    color: "inherit",
                    border: "none",
                  }}
                >
                  Rodrigo Pombo
                </Styled.a>
                <br />
                <span sx={{ fontSize: 1 }}>{post.date}</span>
              </Styled.p>
            }
          />
          <MDXRenderer>{post.body}</MDXRenderer>
          <PostFooter />
        </main>
      </Layout>
    </ThemeProvider>
  )
}

export default Post
