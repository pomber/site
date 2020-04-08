import React from "react"
import { Helmet } from "react-helmet"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, pathname, article, card, responsive }) => (
  <StaticQuery
    query={query}
    render={({
      site: {
        siteMetadata: {
          defaultTitle,
          defaultDescription,
          siteUrl,
          defaultImage,
          twitterUsername,
        },
      },
      image: {
        childImageSharp: {
          fixed: { imageSrc },
        },
      },
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
        image: `${siteUrl}${card ? card.childImageSharp.fixed.src : imageSrc}`,
        url: `${siteUrl}${pathname || "/"}`,
      }

      return (
        <>
          <Helmet
            title={seo.title}
            htmlAttributes={{
              lang: "en",
            }}
          >
            <meta
              name="viewport"
              content={
                responsive
                  ? "width=device-width, initial-scale=1, shrink-to-fit=no"
                  : "width=1050"
              }
            />
            <meta name="description" content={seo.description} />
            <meta name="image" content={seo.image} />
            {seo.url && <meta property="og:url" content={seo.url} />}
            {(article ? true : null) && (
              <meta property="og:type" content="article" />
            )}
            {seo.title && <meta property="og:title" content={seo.title} />}
            {seo.description && (
              <meta property="og:description" content={seo.description} />
            )}
            {seo.image && <meta property="og:image" content={seo.image} />}
            <meta name="twitter:card" content="summary_large_image" />
            {twitterUsername && (
              <meta name="twitter:creator" content={twitterUsername} />
            )}
            {seo.title && <meta name="twitter:title" content={seo.title} />}
            {seo.description && (
              <meta name="twitter:description" content={seo.description} />
            )}
            {seo.image && <meta name="twitter:image" content={seo.image} />}
          </Helmet>
        </>
      )
    }}
  />
)

export default SEO

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
        siteUrl: url
        twitterUsername
      }
    }
    image: file(relativePath: { eq: "screenshot.jpg" }) {
      childImageSharp {
        fixed(height: 600) {
          imageSrc: src
        }
      }
    }
  }
`
