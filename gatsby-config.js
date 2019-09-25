const description = `
Also known as pombo, pomber, pombus, pombex, or any /pomb[a-z]+/ match.
I write code, write about writing code, sometimes talk about it, usually tweet about it.
`.trim()

module.exports = {
  plugins: [
    "gatsby-plugin-theme-ui",
    "gatsby-plugin-react-helmet",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    "gatsby-theme-waves",
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        gatsbyRemarkPlugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 420,
              linkImagesToOriginal: false,
            },
          },
          "gatsby-remark-smartypants",
          "@weknow/gatsby-remark-twitter",
          "gatsby-remark-import-code",
        ],
        remarkPlugins: [require(`remark-slug`)],
        // rehypePlugins: [require(`rehype-waves`)],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `posts`,
        name: `posts`,
      },
    },
  ],
  siteMetadata: {
    title: "Rodrigo Pombo",
    description,
    url: "https://pomb.us",
    image: "/profile.jpg", // Path to your image you placed in the 'static' folder
    twitterUsername: "@pomber",
  },
}
