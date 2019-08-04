/** @jsx jsx */
import { jsx, Styled } from "theme-ui"
import React from "react"
import data from "./content.data"
import ContentWithAside from "./content-with-aside"

function Content() {
  return (
    <>
      {data.map((item, i) => (
        <Item key={i} {...item} />
      ))}
    </>
  )
}

function Item({ title, date, url, type, description }) {
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
              {type}
            </Styled.h4>
            <small sx={{ ml: [2, 0] }}>{formattedDate}</small>
          </div>
        }
      />
    </div>
  )
}

export default Content
