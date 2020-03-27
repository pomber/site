const api = "https://pomber.github.io/covid19/"
const DATA = api + "timeseries.json"

import fetch from "node-fetch"

export async function getStaticProps() {
  const response = await fetch(DATA)
  const data = await response.json()
  const { lastDate } = transform(data)
  return {
    props: { lastDate },
  }
}

export default function HomePage({ lastDate }) {
  return <h2>Coronavirus {lastDate}</h2>
}

function transform(data) {
  const countries = Object.keys(data)
  const firstCountry = data[countries[0]]
  const lastDate =
    firstCountry[firstCountry.length - 1].date
  return { lastDate }
}
