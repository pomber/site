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
  const aCountry = data[countries[0]]
  const { date } = aCountry[aCountry.length - 1]
  const rows = countries
    .map(country => {
      const { deaths } = data[country].find(
        r => r.date === lastDate
      )
      return { country, deaths }
    })
    .filter(r => r.deaths > 8)
  return {
    props: { date, rows },
  }
}

import { TreeMap } from "@nivo/treemap"
import {
  TreeMap,
  TreeMapDefaultProps as TreeMapDefault,
} from "@nivo/treemap"
import Link from "next/link"

function Node(props) {
  const { country } = props.node.data
  return (
    <Link href={`country/${country}`}>
      <a>
        <TreeMapDefault.nodeComponent {...props} />
      </a>
    </Link>
  )
}

export default function HomePage({ date, rows }) {
  return (
    <>
      <h2>Coronavirus {date}</h2>
      <TreeMap
        nodeComponent={Node}
        tile="binary"
        colorBy="flag"
        colors={{ scheme: "pastel1" }}
        labelSkipSize={9}
        label={({ value, flag }) => (
          <tspan
            style={{ fontSize: 10 + value / 200 }}
            children={flag}
          />
        )}
        tooltip={r =>
          `${r.value} deaths in ${r.id}`
        }
        root={{ children: rows }}
        identity="country"
        value="deaths"
        width={402}
        height={192}
        innerPadding={1}
      />
    </>
  )
}
