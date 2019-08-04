import "typeface-montserrat"
import "typeface-merriweather"
import { toTheme } from "@theme-ui/typography"
import typography from "typography-theme-wordpress-2016"
import deepmerge from "deepmerge"
const typographyTheme = toTheme(typography)

const innerMargin = 85
const content = 420

const theme = deepmerge(typographyTheme, {
  colors: {
    background: "#FAF9F5",
    text: "rgb(51,51,51)",
    darkBackground: "#202226",
    lightText: "#DFDDD9",
    muted: "rgba(175, 173, 169, 0.5)",
  },
  space: {
    ...typographyTheme.space,
    innerMargin,
    topMargin: 256,
    fullContentWidth: innerMargin * 2 + content,
  },
  sizes: {
    content,
  },
  fonts: {
    heading: `Montserrat, sans-serif`,
    monospace: `Consolas, Menlo, Monaco, source-code-pro, Courier New, monospace`,
  },
})

theme.breakpoints = ["1000px"]

// console.log({ theme })

export default theme
