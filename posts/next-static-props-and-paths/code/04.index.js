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

  return <h1>Hello</h1>
}
