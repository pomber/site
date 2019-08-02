/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Twitter, Medium, GitHub, Patreon } from "./social-icons"
import profile from "../../static/profile.jpg"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

function HeaderAside() {
  const data = useStaticQuery(graphql`
    query HeaderImage {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 160) {
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
    <div sx={{ height: "100%", float: "right" }}>
      <Img
        fixed={data.file.childImageSharp.fixed}
        style={{
          borderRadius: "50%",
          display: "block",
          margin: "7px auto",
        }}
        alt="Rodrigo Pombo"
      />
      {/* <img
        src={profile}
      /> */}
      <div sx={{ pt: 3 }}>
        <Twitter />
        <GitHub />
        <Medium />
        <Patreon />
      </div>
    </div>
  )
}

export default HeaderAside
