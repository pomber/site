import React from "react"
import { Styled } from "theme-ui"

export default function() {
  const [elevation, setElevation] = React.useState(5)
  const [azimuth, setAzimuth] = React.useState(0)
  const [color, setColor] = React.useState("#FDB813")

  const x =
    Math.cos(elevation / (180 / Math.PI)) * Math.cos(azimuth / (180 / Math.PI))
  const y =
    Math.cos(elevation / (180 / Math.PI)) * Math.sin(azimuth / (180 / Math.PI))
  const z = Math.sin(elevation / (180 / Math.PI))

  const width = 320
  const tx = (-x * width) / 2
  const ty = (-y * width) / 2
  return (
    <div>
      <svg width="0" height="0">
        <filter id="distant" x="0%" y="0%" width="100%" height="100%">
          <feDiffuseLighting
            surfaceScale="10"
            in="SourceGraphic"
            lightingColor={color}
          >
            <feDistantLight elevation={180 - elevation} azimuth={azimuth} />
          </feDiffuseLighting>
        </filter>
      </svg>
      <div style={{ position: "relative", display: "inline-block" }}>
        <Styled.h1
          style={{
            filter: "url(#distant)",
            padding: "10px",
            textAlign: "center",
            width: width,
            margin: 0,
          }}
        >
          Hello World
        </Styled.h1>
        <div
          style={{
            height: "24px",
            width: "24px",
            background: color,
            position: "absolute",
            opacity: 0.8,
            top: "calc(50% - 13px)",
            left: "calc(50% - 13px)",
            borderRadius: "50%",
            border: "2px dashed",
            transform: `translate(${tx}px,${ty}px) scale(${z + 1})`,
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: width,
          paddingTop: "20px",
        }}
      >
        <div>
          <label for="dw-light-color">Light Color: </label>
        </div>
        <input
          id="dw-light-color"
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
        <div>
          <label for="dw-elevation">Elevation: </label>
          <strong>{180 - elevation}</strong>
        </div>
        <input
          id="dw-elevation"
          type="range"
          min="0"
          max="180"
          value={elevation}
          onChange={e => setElevation(+e.target.value)}
        />
        <div>
          <label for="dw-azimuth">Azimuth: </label>
          <strong>{azimuth}</strong>
        </div>
        <input
          id="dw-azimuth"
          type="range"
          min="0"
          max="360"
          value={azimuth}
          onChange={e => setAzimuth(+e.target.value)}
        />
      </div>
    </div>
  )
}
