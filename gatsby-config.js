const content = [
  {
    type: "blog",
    title: "JSX can do that?",
    url: "https://engineering.hexacta.com/jsx-can-do-that-1b2666c23a32",
  },
  {
    type: "blog",
    title: "Lazy loading (and preloading) components in React 16.6",
    date: "2018/11/26",
    url:
      "https://medium.com/hackernoon/lazy-loading-and-preloading-components-in-react-16-6-804de091c82d",
  },
  {
    type: "blog",
    title: "Classes? Where we’re going, we don’t need classes — React 16.6",
    date: "2018/10/24",
    url:
      "https://blog.usejournal.com/classes-where-were-going-we-don-t-need-classes-react-16-6-e643ffc8c38d",
  },
  {
    type: "project",
    title: "Code Surfer",
    date: "2019/01/01",
    url: "https://codesurfer.pomb.us",
    stars: 3000,
  },
  {
    type: "project",
    title: "Git History",
    date: "2019/01/01",
    url: "https://githistory.pomb.us",
    stars: 10900,
  },
  {
    type: "talk",
    title: "Build your own React",
    date: "2019/05/01",
    url: "https://githistory.pomb.us",
  },
]

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
