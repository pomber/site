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
      const lastDay = data[country].find(
        x => x.date === lastDate
      )
      return {
        country,
        confirmed: lastDay.confirmed,
        deaths: lastDay.deaths,
      }
    })
    .filter(r => r.deaths > 8)
  return {
    props: { lastDate, rows },
  }
}

export default function HomePage({ lastDate }) {
  return <h2>Coronavirus {lastDate}</h2>
}
