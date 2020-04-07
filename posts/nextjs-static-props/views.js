import { Browser, Editor } from "../../src/components/code-hiker/code-hiker"
import React from "react"
import demoLegend from "./demo-legend.png"
import noJsLegend from "./no-js.png"

const pr = (id) => `https://github.com/pomber/ssg-demo/pull/${id}/files`

// prettier-ignore
const files = {
  "01.package.json":{code:require("raw-loader!./code/01.package.jsonx"),lang:"json",file:"package.json", link: pr("1/files#diff-b9cfc7f2cdf78a7f4b91a753d10865a2")},
  "03.index.js":{code:require("!!raw-loader!./code/03.index.js"),lang:"jsx",file:"pages/index.js", link: pr("1/files#diff-e14ec8fd2b038fbccea5f8090d26ace4")},
  "04.index.js":{code:require("!!raw-loader!./code/04.index.js"),lang:"jsx",file:"pages/index.js", link: pr(2)},
  "05.index.js":{code:require("!!raw-loader!./code/05.index.js"),lang:"jsx",file:"pages/index.js", link: pr(3)},
  "06.0.index.js":{code:require("!!raw-loader!./code/06.0.index.js"),lang:"jsx",file:"pages/index.js", link: pr(4)},
  "07.index.js":{code:require("!!raw-loader!./code/07.index.js"),lang:"jsx",file:"pages/index.js", link: pr(5)},
  "08.index.js":{code:require("!!raw-loader!./code/08.index.js"),lang:"jsx",file:"pages/index.js", link: pr(6)},
  "09.0.index.js":{code:require("!!raw-loader!./code/09.0.index.js"),lang:"jsx",file:"pages/index.js", link: pr(7)}, 
  "11.index.js":{code:require("!!raw-loader!./code/11.index.js"),lang:"jsx",file:"pages/index.js", link: pr(8)}, 
  "12.index.js":{code:require("!!raw-loader!./code/12.index.js"),lang:"jsx",file:"pages/index.js", link: pr(9)}, 
  "13.0.index.js":{code:require("!!raw-loader!./code/13.0.index.js"),lang:"jsx",file:"pages/index.js", link: pr(15)}, 
  "13.1.index.js":{code:require("!!raw-loader!./code/13.1.index.js"),lang:"jsx",file:"pages/index.js", link: pr(16)}, 
  "14.country.js":{code:require("!!raw-loader!./code/14.country.js"),lang:"jsx",file:"pages/country/[name].js", link: pr(17)}, 
  "15.country.js":{code:require("!!raw-loader!./code/15.country.js"),lang:"jsx",file:"pages/country/[name].js", link: pr(18)}, 
  "16.country.js":{code:require("!!raw-loader!./code/16.country.js"),lang:"jsx",file:"pages/country/[name].js", link: pr(19)}, 
  "17.country.js":{code:require("!!raw-loader!./code/17.country.js"),lang:"jsx",file:"pages/country/[name].js", link: pr(20)}, 
}

const yarnCommands = `$ yarn install
Fetching packages...
Done.
$ yarn dev
Compiled successfully - ready on http://localhost:3000`

const tabs0 = { tabs: ["package.json"] }
const tabs1 = { tabs: ["package.json", "pages/index.js"] }
const tabs2 = { tabs: ["pages/index.js", "pages/country/[name].js"] }

const views = [
  [
    {
      type: "img",
      height: 100,
      width: "100%",
      src: demoLegend,
      alt: "The app we are building",
      style: { objectFit: "contain" },
    },
    {
      type: Browser,
      url: "https://nextjs-static-props.now.sh/",
      showUrl: "https://nextjs-static-props.now.sh/",
    },
  ],
  [{ type: Editor, ...files["01.package.json"], ...tabs0 }],
  [{ type: Editor, ...files["03.index.js"], ...tabs1 }],
  [
    {
      type: Editor,
      ...files["03.index.js"],
      terminal: yarnCommands,
      focus: "2[1]",
      ...tabs1,
    },
  ],
  [
    {
      type: Editor,
      ...files["03.index.js"],
      terminal: yarnCommands,
      focus: "2[1]",
      ...tabs1,
    },
    { type: Browser, url: "https://ssg-demo-lcyw9q4p0.now.sh/" },
  ],
  [
    { type: Editor, ...files["04.index.js"], ...tabs1 },
    { type: Browser, url: "https://ssg-demo-6t2d6smox.now.sh/" },
  ],
  [
    { type: Editor, ...files["05.index.js"], ...tabs1, focus: "13[80],18:28" },
    { type: Browser, url: "https://ssg-demo-6840hkb70.now.sh/" },
  ],
  [
    { type: Editor, ...files["06.0.index.js"], ...tabs1 },
    { type: Browser, url: "https://ssg-demo-98dxl0cve.now.sh/" },
  ],
  [
    { type: Editor, ...files["07.index.js"], ...tabs1 },
    { type: Browser, url: "https://ssg-demo-hhhht6een.now.sh/" },
  ],
  [
    { type: Editor, ...files["08.index.js"], ...tabs1 },
    { type: Browser, url: "https://ssg-demo-hhhht6een.now.sh/" },
  ],
  [
    { type: Editor, ...files["09.0.index.js"], ...tabs1 },
    { type: Browser, url: "https://ssg-demo-k1xwtf8h0.now.sh/" },
  ],
  [
    { type: Editor, ...files["11.index.js"], ...tabs1 },
    { type: Browser, url: "https://ssg-demo-k1xwtf8h0.now.sh/" },
  ],
  [
    { type: Editor, ...files["12.index.js"], ...tabs1 },
    { type: Browser, url: "https://ssg-demo-dc5hqg9dg.now.sh/" },
  ],
  [
    { type: Editor, ...files["13.0.index.js"], ...tabs1, focus: "34:41,48" },
    { type: Browser, url: "https://ssg-demo-9fl4t8gvr.now.sh/" },
  ],
  [
    {
      type: Editor,
      ...files["13.1.index.js"],
      ...tabs1,
      focus: "33,38:42,44,45",
    },
    { type: Browser, url: "https://ssg-demo-9fl4t8gvr.now.sh/" },
  ],
  [
    { type: Editor, ...files["14.country.js"], ...tabs2 },
    {
      type: Browser,
      url: "https://ssg-demo-fnqndl6fp.now.sh/country/Iran",
      showUrl: "http://localhost:3000/country/Iran",
    },
  ],
  [
    { type: Editor, ...files["15.country.js"], ...tabs2, focus: "2:17" },
    {
      type: Browser,
      url: "https://ssg-demo-fnqndl6fp.now.sh/country/Iran",
      showUrl: "http://localhost:3000/country/Iran",
    },
  ],
  [
    { type: Editor, ...files["15.country.js"], ...tabs2, focus: "13,19:24" },
    {
      type: Browser,
      url: "https://ssg-demo-fnqndl6fp.now.sh/country/Iran",
      showUrl: "http://localhost:3000/country/Iran",
    },
  ],
  [
    { type: Editor, ...files["16.country.js"], ...tabs2, focus: "19:27" },
    {
      type: Browser,
      url: "https://ssg-demo-fnqndl6fp.now.sh/country/Iran",
      showUrl: "http://localhost:3000/country/Iran",
    },
  ],
  [
    { type: Editor, ...files["17.country.js"], ...tabs2 },
    {
      type: Browser,
      url: "https://ssg-demo-6l4f9lqip.now.sh/country/Iran",
      showUrl: "http://localhost:3000/country/Iran",
    },
  ],
  [
    {
      type: Browser,
      url: "https://nextjs-static-props.now.sh/",
      showUrl: "https://nextjs-static-props.now.sh/",
      sandbox: "",
    },
    {
      type: "img",
      height: 75,
      width: "100%",
      src: noJsLegend,
      style: { objectFit: "contain" },
    },
  ],
]

const editorSteps = views.map((xs) => xs.find((x) => x.type === Editor) || {})
const browserSteps = views
  .map((xs) => xs.find((x) => x.type === Browser) || {})
  .map((props) => ({
    showUrl: "http://localhost:3000",
    ...props,
  }))
const defaultProps = {
  [Browser]: { height: 300, steps: browserSteps },
  [Editor]: { height: 350, steps: editorSteps },
}

export default views.map((stepViews) =>
  stepViews.map(({ type, ...stepProps }) => {
    const props = { ...defaultProps[type], ...stepProps }
    return React.createElement(type, props)
  })
)
