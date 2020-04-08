import React from "react"
import { graphql } from "gatsby"

import Post from "../components/post"

export default ({ location, data }) => <Post data={data} location={location} />

export const pageQuery = graphql`
  query($id: String!, $relativeDirectory: String = "home") {
    post: blogPost(id: { eq: $id }) {
      id
      title
      date(formatString: "MMMM DD, YYYY")
      excerpt
      body
      responsive
      description
    }
    card: file(
      name: { eq: "card" }
      relativeDirectory: { eq: $relativeDirectory }
    ) {
      childImageSharp {
        fixed(height: 628) {
          src
        }
      }
    }
  }
`
