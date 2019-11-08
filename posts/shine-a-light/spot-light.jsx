import React from "react"
import { Styled } from "theme-ui"

const prefix = "sl"
const filterId = prefix + "-filter"

export default function SpotLightWidget() {
  const [x, setX] = React.useState(0.25)
  const [y, setY] = React.useState(0.5)
  const [z, setZ] = React.useState(0.5)
  const [pointX, setPointX] = React.useState(0.5)
  const [pointY, setPointY] = React.useState(0.5)
  const [se, setSE] = React.useState(20)
  const [cone, setCone] = React.useState(20)
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
        pointX={pointX * window.devicePixelRatio}
        pointY={pointY * window.devicePixelRatio}
        color={color}
        specularExponent={se}
        coneAngle={cone}
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
          value={pointX}
          setValue={setPointX}
          label="Point X"
          style={{
            width,
            display: "flex",
            flexDirection: "column-reverse",
            position: "absolute",
            bottom: 0,
            left: 0,
            transform: "translateY(100%)",
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
        <Slider
          value={pointY}
          setValue={setPointY}
          label="Point Y"
          style={{
            width: height,
            position: "absolute",
            bottom: 0,
            right: 0,
            transform: "rotate(90deg)",
            transformOrigin: "right bottom",
          }}
        />
      </div>
      <br />
      <Slider value={z} setValue={setZ} label="Z" />
      <Slider value={se} setValue={setSE} label="Specular Exponent" max={100} />
      <Slider value={cone} setValue={setCone} label="Cone Angle" max={90} />
      <div>
        <div>
          <label htmlFor="sl-light-color">Light Color: </label>
        </div>
        <input
          id="sl-light-color"
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
        style={{ width: "100%", margin: "4px 0" }}
      />
    </div>
  )
}

function Filter({
  x,
  y,
  z,
  pointX,
  pointY,
  color,
  specularExponent,
  coneAngle,
  id,
}) {
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
            surfaceScale="20"
            in="SourceGraphic"
            lightingColor={color}
          >
            <feSpotLight
              x={x}
              y={y}
              z={z}
              pointsAtX={pointX}
              pointsAtY={pointY}
              specularExponent={specularExponent}
              limitingConeAngle={coneAngle}
            />
          </feDiffuseLighting>
        </filter>
      </svg>
    </div>
  )
}
