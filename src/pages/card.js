/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import { Global } from "@emotion/core"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Helmet } from "react-helmet"

// 1200 x 628
// 600 x 314

function Page({ children }) {
  const data = useStaticQuery(graphql`
    query CardImage {
      file(relativePath: { eq: "profile.jpg" }) {
        childImageSharp {
          fixed(width: 125) {
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
    <Styled.root
      sx={{
        display: "flex",
        width: "100vw",
      }}
    >
      <Helmet>
        <meta
          name="viewport"
          content={"width=device-width, initial-scale=1, shrink-to-fit=no"}
        />
      </Helmet>
      <Global
        styles={{
          body: { margin: 0, overflowX: "hidden" },
        }}
      />
      <aside
        sx={{
          bg: "darkBackground",
          color: "lightText",
          width: "40%",
          minHeight: "100vh",
        }}
      >
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div sx={{ width: "80%" }}>
            <Img
              fixed={data.file.childImageSharp.fixed}
              style={{
                borderRadius: "50%",
                display: "block",
                margin: "0 auto",
                width: "125px",
                height: "125px",
              }}
              alt="Rodrigo Pombo"
            />
            <h2 sx={{ fontSize: "20px", textAlign: "center", mb: 0 }}>
              Rodrigo Pombo
            </h2>
            <p
              sx={{
                fontSize: "16px",
                textAlign: "center",
                m: 0,
                fontFamily:
                  'system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Ubuntu, "Helvetica Neue", sans-serif;',
              }}
            >
              @pomber
            </p>
          </div>
        </div>
      </aside>
      <main sx={{ bg: "background", color: "text", width: "60%" }}>
        <div
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100%",
          }}
        >
          <div
            sx={{
              px: "42px",
            }}
          >
            <Styled.h4
              sx={{
                textTransform: "uppercase",
                m: 0,
                fontSize: 1,
                fontWeight: 700,
                display: "inline",
              }}
              contentEditable
            >
              Blog Post
            </Styled.h4>
            <small sx={{ ml: 2 }} contentEditable>
              August 27, 2019
            </small>
            <Styled.h1 sx={{ fontSize: "30px", mb: "20px" }} contentEditable>
              Build your own React
            </Styled.h1>
            <Styled.p sx={{ p: 0, m: 0, fontSize: "14px" }} contentEditable>
              We are going to rewrite React from scratch. Step by step.
              Following the architecture from the real React code…
            </Styled.p>
          </div>
        </div>
      </main>
    </Styled.root>
  )
}

export default Page
