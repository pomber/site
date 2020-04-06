import "typeface-montserrat"
import "typeface-merriweather"
import { toTheme } from "@theme-ui/typography"
import typography from "typography-theme-wordpress-2016"
import merge from "deepmerge"

const typographyTheme = toTheme(typography)

const innerMargin = 85
const content = 420

const darkerBlue = "#0f8f5e"
const lightBlue = "#aaf6d9"
const lighterBlue = "#ebfcf6"

const theme = merge.all([
  typographyTheme,
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
      root: {
        fontFamily: `body`,
      },
      a: {
        color: "inherit",
        textDecoration: "none",
        borderBottom: "1px solid",
        borderColor: "muted",
      },
      li: {
        marginBottom: "4px",
        code: {
          fontSize: `inherit`,
        },
      },
      pre: {
        variant: `prism`,
        fontFamily: `monospace`,
        tabSize: 2,
        hyphens: `none`,
        overflow: `auto`,
        borderRadius: 10,
        p: 0,
        pl: 2,
        color: "text",
        backgroundColor: "background",
        marginBottom: "28px",
        whiteSpace: "pre-wrap",
      },
      code: {
        fontFamily: `monospace`,
        fontSize: `inherit`,
      },
      h3: {
        marginTop: 4,
      },
      inlineCode: {
        color: "rgb(60, 120, 120)",
        // borderRadius: `0.3em`,
        // color: `secondary`,
        // bg: `highlight`,
        // paddingTop: `0.15em`,
        // paddingBottom: `0.05em`,
        // paddingX: `0.2em`,
      },
      hr: {
        borderColor: `muted`,
      },
      p: {
        code: {
          fontSize: `inherit`,
        },
      },
      blockquote: {
        color: `inherit`,
        borderLeftColor: `inherit`,
        opacity: 0.8,
        "&.translation": {
          fontSize: `1em`,
        },
      },
      waves: {
        default: {
          Wave: {
            width: ["100%", content * 2 + innerMargin * 2],
            // marginTop: "40px",
            marginLeft: [0, -(content + 2 * innerMargin)],
            marginBottom: "28px",
            position: "relative",
            display: ["block", "flex"],
          },
          ScrollerContainer: {
            paddingTop: ["80px", 0],
            width: ["auto", "content"],
            paddingLeft: [0, innerMargin],
          },
          ScrollerStep: {
            position: "relative",
            padding: 0,
            minHeight: "400px",
            display: "flex",
            alignItems: "center",
            borderLeft: 0,
          },
          ScrollerProgress: {
            backgroundColor: "muted",
            borderRadius: "3px",
            position: "absolute",
            left: "-24px",
          },
          StickerContainer: {
            width: ["100vw", "content"],
            marginLeft: ["calc(50% - 50vw)", 0],
            position: ["sticky", "static"],
            top: [0, "auto"],
            zIndex: [1, "auto"],
            height: ["50vh", "auto"],
            paddingRight: [0, innerMargin],
          },
          Sticker: {
            position: ["static", "sticky"],
            width: "100%",
            height: ["100%", "60vh"],
            maxHeight: ["100%", "60vh"],
            top: ["auto", "20vh"],
          },
          // this is used to select the active scroller step
          // 0.5 selects the step that is at half the screen height
          // 0.7 the step that is at 70% the screen height
          focus: [0.7, 0.5],
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

theme.prism = {
  ".builtin, .changed, .keyword, .punctuation, .operator, .tag, .deleted, .string, .attr-value, .char, .number, .inserted": {
    color: "#0f8f5e",
  },
  ".comment, .cdata, .doctype": {
    fontStyle: "italic",
  },
}

// console.log({ theme })

export default theme
