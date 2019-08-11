import "typeface-montserrat"
import "typeface-merriweather"
import { toTheme } from "@theme-ui/typography"
import typography from "typography-theme-wordpress-2016"
import merge from "deepmerge"
import wavesTheme from "gatsby-theme-waves/src/gatsby-plugin-theme-ui/index"

const typographyTheme = toTheme(typography)

const innerMargin = 85
const content = 420

const darkerBlue = "#0f8f5e"
const lightBlue = "#aaf6d9"
const lighterBlue = "#ebfcf6"

const theme = merge.all([
  typographyTheme,
  wavesTheme,
  {
    colors: {
      background: "#FAF9F5",
      text: "rgb(51,51,51)",
      darkBackground: "#202226",
      lightText: "#DFDDD9",
      muted: "rgba(175, 173, 169, 0.5)",
      modes: null,
      highlight: lighterBlue,
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
    styles: {
      a: {
        color: "inherit",
        textDecoration: "none",
        borderBottom: "1px solid",
        borderColor: "muted",
      },
      li: {
        marginBottom: "4px",
      },
      pre: {
        color: "lightText",
        backgroundColor: "darkBackground",
        marginBottom: "28px",
      },
      h3: {
        marginTop: 4,
      },
      inlineCode: {
        // background: "highlight",
      },
      waves: {
        default: {
          Wave: {
            width: content * 2 + innerMargin * 2,
            marginLeft: -(content + 2 * innerMargin),
            marginTop: 0,
            marginBottom: "28px",
          },
          ScrollerContainer: {
            flex: null,
            width: "content",
            paddingLeft: innerMargin,
          },
          ScrollerStep: {
            padding: 0,
            borderLeft: 0,
            minHeight: "400px",
          },
          ScrollerProgress: {
            backgroundColor: "muted",
            left: "-25px",
            borderRadius: "3px",
          },
          StickerContainer: {
            width: "content",
            paddingRight: innerMargin,
          },
          Sticker: {
            border: 0,
          },
        },
      },
      CodeSurfer: {
        pre: {
          color: "lightText",
          backgroundColor: "darkBackground",
        },
        code: {
          color: "lightText",
          backgroundColor: "darkBackground",
        },
        tokens: {
          "comment cdata doctype": {
            fontStyle: "italic",
          },
          "builtin changed keyword punctuation operator tag deleted string attr-value char number inserted": {
            color: lightBlue,
          },
        },
      },
    },
  },
])

theme.breakpoints = ["1000px"]

// console.log({ theme })

export default theme
