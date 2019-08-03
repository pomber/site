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
    <a
      sx={{
        textDecoration: "none",
        color: "inherit",
      }}
      href={url}
    >
      <ContentWithAside
        stx={{
          py: 4,
          borderBottom: "1px solid #ddd",
        }}
        main={
          <React.Fragment>
            <Styled.h3 sx={{ my: 2 }}>{title}</Styled.h3>
            {/* {description && <p>{description}</p>} */}
            <Styled.h4
              sx={{
                position: "absolute",
                bottom: 0,
                right: 0,
                color: "muted",
                textTransform: "uppercase",
                pb: 1,
                pr: 1,
                pt: 2,
                m: 0,
                fontSize: 1,
                borderRight: "1px solid",
                borderColor: "muted",
              }}
            >
              {type}
            </Styled.h4>
          </React.Fragment>
        }
        aside={<small>{formattedDate}</small>}
      />
    </a>
  )
}

export default Content
