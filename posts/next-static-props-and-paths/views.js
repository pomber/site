import { Browser, Editor } from "../../src/components/code-hiker/code-hiker"
import React from "react"
import demoLegend from "./demo-legend.png"

const pr = id => `https://github.com/pomber/use-spring/pull/${id}/files`

// prettier-ignore
const files = {
  "01.package.json":{code:require("raw-loader!./code/01.package.jsonx"),lang:"json",file:"package.json", link: pr(4)},
  "02.package.json":{code:require("raw-loader!./code/02.package.jsonx"),lang:"json",file:"package.json", link: pr(4)},
  "03.index.js":{code:require("!!raw-loader!./code/03.index.js"),lang:"jsx",file:"pages/index.js", link: pr(4)},
  "04.index.js":{code:require("!!raw-loader!./code/04.index.js"),lang:"jsx",file:"pages/index.js", link: pr(4)},
  "05.index.js":{code:require("!!raw-loader!./code/05.index.js"),lang:"jsx",file:"pages/index.js"},
  "06.index.js":{code:require("!!raw-loader!./code/06.index.js"),lang:"jsx",file:"pages/index.js", link: pr(4)},
  "07.index.js":{code:require("!!raw-loader!./code/07.index.js"),lang:"jsx",file:"pages/index.js", link: pr(4)},
  "08.index.js":{code:require("!!raw-loader!./code/08.index.js"),lang:"jsx",file:"pages/index.js", link: pr(4)},
  "09.index.js":{code:require("!!raw-loader!./code/09.index.js"),lang:"jsx",file:"pages/index.js", link: pr(4)}, 
}

const yarnCommands = `$ yarn install
Installing dependencies...
$ yarn dev
Running on localhost:8000`

const views = [
  [
    {
      type: "img",
      height: 100,
      width: "100%",
      src: demoLegend,
      style: { objectFit: "contain" },
    },
    {
      type: Browser,
      url: "https://x1-5p8jjgqz9.now.sh/",
      showUrl: "https://next-static-props-demo.now.sh/",
    },
  ],
  [{ type: Editor, ...files["01.package.json"] }],
  [{ type: Editor, ...files["02.package.json"] }],
  [{ type: Editor, ...files["03.index.js"] }],
  [{ type: Editor, ...files["03.index.js"], terminal: yarnCommands }],
  [
    { type: Editor, ...files["03.index.js"], terminal: yarnCommands },
    { type: Browser, url: "https://x1-965tkyiws.now.sh/" },
  ],
  [
    { type: Editor, ...files["04.index.js"] },
    { type: Browser, url: "https://x1-i6qvdxal6.now.sh/" },
  ],
  [
    { type: Editor, ...files["05.index.js"] },
    { type: Browser, url: "https://x1-q04u5abja.now.sh/" },
  ],
  [
    { type: Editor, ...files["06.index.js"] },
    { type: Browser, url: "https://x1-hpye19f6q.now.sh/" },
  ],
  [
    { type: Editor, ...files["07.index.js"], focus: "2:19" },
    { type: Browser, url: "https://x1-hpye19f6q.now.sh/" },
  ],
  [
    { type: Editor, ...files["08.index.js"] },
    { type: Browser, url: "https://x1-5p8jjgqz9.now.sh/" },
  ],
]

const editorSteps = views.map(xs => xs.find(x => x.type === Editor) || {})
const defaultProps = {
  [Browser]: { height: 300, showUrl: "http://localhost:3000" },
  [Editor]: { height: 350, steps: editorSteps },
}

export default views.map(stepViews =>
  stepViews.map(({ type, ...stepProps }) => {
    const props = { ...defaultProps[type], ...stepProps }
    return React.createElement(type, props)
  })
)
