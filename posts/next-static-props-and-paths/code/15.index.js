const api = "https://pomber.github.io/covid19/"
const DATA = api + "timeseries.json"
const FLAGS = api + "countries.json"

import fetch from "node-fetch"

export async function getStaticProps() {
  const [data, flags] = await Promise.all([
    fetch(DATA).then(r => r.json()),
    fetch(FLAGS).then(r => r.json()),
  ])
  const data = await response.json()
  const countries = Object.keys(data)
  const firstCountry = data[countries[0]]
  const lastDate =
    firstCountry[firstCountry.length - 1].date
  const rows = countries
    .map(country => {
      const lastDay = data[country].find(
        x => x.date === lastDate
      )
      return {
        country,
        confirmed: lastDay.confirmed,
        deaths: lastDay.deaths,
        flag: flags[country]?.flag || "❓",
      }
    })
    .filter(r => r.deaths > 8)
  return {
    props: { lastDate, rows },
  }
}

export default function HomePage({
  lastDate,
  rows,
}) {
  return (
    <>
      <h2>Coronavirus {lastDate}</h2>
      <Chart rows={rows} />
    </>
  )
}

import {
  TreeMap,
  TreeMapDefaultProps,
} from "@nivo/treemap"
import Link from "next/link"

function Node(props) {
  return (
    <Link
      href={`country/${props.node.data.country}`}
    >
      <a>
        <TreeMapDefaultProps.nodeComponent
          {...props}
        />
      </a>
    </Link>
  )
}

function Chart({ rows }) {
  return (
    <TreeMap
      nodeComponent={Node}
      tile="binary"
      colorBy="flag"
      colors={{ scheme: "pastel1" }}
      tooltip={r => `${r.value} deaths in ${r.id}`}
      labelSkipSize={10}
      label={({ value, flag }) => (
        <tspan
          style={{ fontSize: 10 + value / 200 }}
          children={flag}
        />
      )}
      theme={{
        margin: "0 auto",
        display: "block",
      }}
      root={{ children: rows }}
      identity="country"
      value="deaths"
      width={402}
      height={192}
      innerPadding={1}
    />
  )
}
