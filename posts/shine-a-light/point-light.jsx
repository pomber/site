import React from "react"
import { Styled } from "theme-ui"

const prefix = "pl"
const filterId = prefix + "-filter"

export default function PointLightWidget() {
  const [x, setX] = React.useState(0.5)
  const [y, setY] = React.useState(0)
  const [z, setZ] = React.useState(0.5)
  const [color, setColor] = React.useState("#FDB813")
  const width = 220
  const height = 100

  if (typeof window === "undefined") return null

  return (
    <div>
      <Filter
        id={filterId}
        x={x * window.devicePixelRatio}
        y={y * window.devicePixelRatio}
        z={z}
        color={color}
      />
      <div
        style={{
          position: "relative",
          height,
          width,
          margin: "50px auto",
        }}
      >
        <Styled.h1
          style={{
            height: "100%",
            textAlign: "center",
            lineHeight: height + "px",
            background: "#2222",
            filter: `url(#${filterId})`,
          }}
        >
          Hello
        </Styled.h1>
        <Slider
          label="X"
          value={x}
          setValue={setX}
          style={{
            width: width,
            position: "absolute",
            top: 0,
            left: 0,
            transform: "translateY(-100%)",
          }}
        />
        <Slider
          label="Y"
          value={y}
          setValue={setY}
          inverted={true}
          style={{
            width: height,
            position: "absolute",
            bottom: 0,
            left: 0,
            transform: "rotate(-90deg)",
            transformOrigin: "left bottom",
          }}
        />
      </div>
      <Slider value={z} setValue={setZ} label="Z" />
      <div>
        <div>
          <label htmlFor="pl-light-color">Light Color: </label>
        </div>
        <input
          id="pl-light-color"
          type="color"
          value={color}
          onChange={e => setColor(e.target.value)}
        />
      </div>
      <hr />
      pixel ratio: {window.devicePixelRatio}
      <br />
      is chrome: {window.chrome ? "yes" : "no"}
    </div>
  )
}

function Slider({
  value,
  setValue,
  min = 0,
  max = 1,
  step = 0.01,
  label,
  inverted,
  style = {},
}) {
  const id = `${{ prefix }}-${label.toLowerCase().replace(" ", "-")}`
  const rvalue = inverted ? max - value : value
  return (
    <div style={style}>
      <div>
        <label htmlFor={id}>{label}: </label>
        <strong>{value}</strong>
      </div>

      <input
        id={id}
        type="range"
        min={min}
        max={max}
        step={step}
        value={rvalue}
        onChange={e =>
          inverted
            ? setValue(Math.round((max - e.target.value) * 100) / 100)
            : setValue(+e.target.value)
        }
        style={{ width: "100%", margin: "4px 0 8px" }}
      />
    </div>
  )
}

function Filter({ x, y, z, color, id }) {
  return (
    <div>
      <svg height="0" width="0">
        <filter
          id={id}
          x="0%"
          y="0%"
          width="100%"
          height="100%"
          primitiveUnits="objectBoundingBox"
        >
          <feDiffuseLighting
            surfaceScale="50"
            in="SourceGraphic"
            lightingColor={color}
          >
            <fePointLight x={x} y={y} z={z} />
          </feDiffuseLighting>
        </filter>
      </svg>
    </div>
  )
}
