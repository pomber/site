import fetch from "node-fetch"

export async function getStaticProps() {
  const response = await fetch(
    "https://pomber.github.io/covid19/data.json"
  )
  const data = await response.json()
  const { lastDate } = transform(data)
  return {
    props: { lastDate },
  }
}

export default function HomePage() {
  const [data, setData] = React.useState()
  React.useEffect(() => {
    fetch(
      "https://pomber.github.io/covid19/data.json"
    )
      .then(response => response.json())
      .then(data => setData(data))
  }, [])

  if (!data) {
    return <h1>Loading...</h1>
  }

  const { lastDate } = transform(data)
  return (
    <>
      <h3>Coronavirus {lastDate}</h3>
    </>
  )
}

function transform(data) {
  const countries = Object.keys(data)
  const firstCountry = data[countries[0]]
  return {
    lastDate:
      firstCountry[firstCountry.length - 1].date,
  }
}
