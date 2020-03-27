import fetch from "node-fetch"

const api = "https://pomber.github.io/covid19/"
const DATA = api + "timeseries.json"

export async function getStaticProps() {
  const response = await fetch(DATA)
  const data = await response.json()
  const { lastDate, rows } = transform(data)
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

function Chart({ rows }) {
  return "TODO: Chart"
}

function transform(data) {
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
  return { lastDate, rows }
}
