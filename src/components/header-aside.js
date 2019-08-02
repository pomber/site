/** @jsx jsx */
import { jsx } from "theme-ui"
import { Twitter, Medium, GitHub, Patreon } from "./social-icons"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function HeaderAside() {
  const data = useStaticQuery(graphql`
    query HeaderImage {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 150) {
            base64
            width
            height
            src
            srcSet
          }
        }
      }
    }
  `)
  return (
    <div sx={{ mb: [4, 0] }}>
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{
          borderRadius: "50%",
          display: "block",
          margin: "5px auto",
        }}
        alt="Rodrigo Pombo"
      />
      <div sx={{ pt: 2, mx: ["auto", 0], textAlign: "center" }}>
        <Twitter />
        <GitHub />
        <Medium />
        <Patreon />
      </div>
    </div>
  )
}

export default HeaderAside
