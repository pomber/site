import Link from "next/link"
import { Stream } from "@nivo/stream"
import fetch from "node-fetch"

export default function Country({
  name,
  timeseries,
}) {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>
        {name}
      </h1>
      <Stream
        data={timeseries}
        width={390}
        height={160}
        xScale={i => i * i}
        keys={["deaths", "confirmed"]}
        offsetType="diverging"
        colors={{ scheme: "pastel1" }}
        curve="basis"
        enableGridX={false}
      />
      <Link href="/">
        <a>Go Back</a>
      </Link>
    </>
  )
}

const promise = fetch(
  "https://pomber.github.io/covid19/timeseries.json"
).then(r => r.json())

export async function getStaticProps(context) {
  const { name } = context.params

  const data = await promise

  const timeseries = data[name]
  return { props: { name, timeseries } }
}

export async function getStaticPaths() {
  const data = await promise

  return {
    paths: Object.keys(data).map(name => ({
      params: { name },
    })),
    fallback: false,
  }
}
