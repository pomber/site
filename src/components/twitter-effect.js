import React from "react"
// gatsby-remark-twitter isn't injecting twitter js so I do it here

const injectTwitterScript = () => {
  function addJS(jsCode) {
    const s = document.createElement("script")

    s.type = "text/javascript"
    s.innerText = jsCode
    document.getElementsByTagName("head")[0].appendChild(s)
  }

  addJS(`
          window.twttr = (function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0],
    t = window.twttr || {};
  if (d.getElementById(id)) return t;
  js = d.createElement(s);
  js.id = id;
  js.src = "https://platform.twitter.com/widgets.js";
  fjs.parentNode.insertBefore(js, fjs);
  t._e = [];
  t.ready = function(f) {
    t._e.push(f);
  };
  return t;
}(document, "script", "twitter-wjs"));
`)
}

let injectedTwitterScript = false

export function useTwitterEffect() {
  React.useEffect(() => {
    if (!injectedTwitterScript) {
      injectTwitterScript()
      injectedTwitterScript = true
    }
  }, [])
}
