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
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `assets`,
        path: `${__dirname}/static/`,
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
