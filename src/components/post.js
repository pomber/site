/** @jsx jsx */
import React from "react"
import { Styled, jsx } from "theme-ui"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ContentWithAside from "../components/content-with-aside"
import replaceImportedCode from "remark-import-code/loader"

const Post = ({ data: { post, card }, location }) => (
  <Layout location={location}>
    <SEO
      title={post.title}
      description={post.excerpt}
      article={true}
      card={card}
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
              sx={{ textDecoration: "none", color: "inherit", border: "none" }}
            >
              Rodrigo Pombo
            </Styled.a>
            <br />
            <span sx={{ fontSize: 1 }}>{post.date}</span>
          </Styled.p>
        }
      />
      <MDXRenderer>{replaceImportedCode(post.body)}</MDXRenderer>
    </main>
  </Layout>
)

export default Post
