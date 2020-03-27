const api = "https://pomber.github.io/covid19/"
const DATA = api + "timeseries.json"

import fetch from "node-fetch"

export async function getStaticProps() {
  const response = await fetch(DATA)
  const data = await response.json()
  return {
    props: { data },
  }
}

function useData() {
  const [data, setData] = React.useState()
  React.useEffect(() => {
    fetch(DATA)
      .then(response => response.json())
      .then(data => setData(data))
  }, [])
  return data
}

export default function HomePage() {
  const data = useData()
  if (!data) {
    return <h1>Loading...</h1>
  }
  const countries = Object.keys(data)
  const firstCountry = data[countries[0]]
  const lastDate =
    firstCountry[firstCountry.length - 1].date
  return <h2>Coronavirus {lastDate}</h2>
}
