/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import data from "./content.data"
import ContentWithAside from "./content-with-aside"

function Content() {
  return (
    <>
      <Item
        title="Code Hike"
        date="2020/06/15"
        url="https://codehike.org"
        type="Project"
        description="Marvellous code walkthroughs"
        pinned
      />
      {data.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </>
  )
}

function Item({ title, date, url, type, description, pinned }) {
  const formattedDate = new Date(date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })
  return (
    <div
      sx={{
        my: [4, 5],
        "& aside": { transition: "color 0.25s" },
        "&:hover aside": { color: ["none", "#fff"] },
      }}
    >
      <ContentWithAside
        main={
          <a
            href={url}
            sx={{
              textDecoration: "none",
              color: "inherit",
            }}
          >
            <Styled.h3 sx={{ my: [1, 0] }}>{title}</Styled.h3>
            {description && (
              <p sx={{ fontSize: "16px", opacity: 0.8, m: 0, pt: [0, 1] }}>
                {description}
              </p>
            )}
          </a>
        }
        aside={
          <div sx={{ verticalAlign: "bottom", opacity: [0.8, 1], pt: [0, 1] }}>
            <Styled.h4
              sx={{
                textTransform: "uppercase",
                m: 0,
                fontSize: [1, 2],
                fontWeight: [700, 900],
                display: ["inline", "block"],
              }}
            >
              {pinned && <Pin />} {type}
            </Styled.h4>
            <small sx={{ ml: [2, 0] }}>{formattedDate}</small>
          </div>
        }
      />
    </div>
  )
}

function Pin() {
  return (
    <svg viewBox="0 0 24 24" style={{ height: "1em", verticalAlign: "middle" }}>
      <title>Pinned Project</title>
      <path
        d="M20.235 14.61c-.375-1.745-2.342-3.506-4.01-4.125l-.544-4.948 1.495-2.242a.763.763 0 00.037-.787.762.762 0 00-.675-.403h-9.14a.765.765 0 00-.638 1.191l1.498 2.247-.484 4.943c-1.668.62-3.633 2.38-4.004 4.116a.726.726 0 00.132.594c.103.132.304.29.68.29H8.64l2.904 6.712a.498.498 0 00.918 0l2.903-6.713h4.057c.376 0 .576-.156.68-.286a.74.74 0 00.135-.59z"
        fill="currentColor"
      ></path>
    </svg>
  )
}

export default Content
