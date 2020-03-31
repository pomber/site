const api = "https://pomber.github.io/covid19/"
const DATA = api + "timeseries.json"

import fetch from "node-fetch"

export async function getStaticProps() {
  const response = await fetch(DATA)
  const data = await response.json()
  const countries = Object.keys(data)
  const firstCountry = data[countries[0]]
  const lastDate =
    firstCountry[firstCountry.length - 1].date
  const rows = countries
    .map(country => {
      const { deaths } = data[country].find(
        r => r.date === lastDate
      )
      return { country, deaths }
    })
    .filter(r => r.deaths > 8)
  return {
    props: { lastDate, rows },
  }
}

import { TreeMap } from "@nivo/treemap"

export default function HomePage({
  lastDate,
  rows,
}) {
  return (
    <>
      <h2>Coronavirus {lastDate}</h2>
      <TreeMap
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
