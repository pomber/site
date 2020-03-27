import fetch from "node-fetch"

const api = "https://pomber.github.io/covid19/"
const DATA = api + "timeseries.json"

export async function getStaticProps() {
  const response = await fetch(DATA)
  const data = await response.json()
  const { lastDate } = transform(data)
  return {
    props: { lastDate },
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
  const { lastDate } = transform(data)
  return <h2>Coronavirus {lastDate}</h2>
}

function transform(data) {
  const countries = Object.keys(data)
  const firstCountry = data[countries[0]]
  const lastDate =
    firstCountry[firstCountry.length - 1].date
  return { lastDate }
}
