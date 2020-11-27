/** @jsx jsx */
import { jsx, Flex, Box, Styled, Divider, Text } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import { LinkStyle } from "../utils/styles"

const Project = ({ title, description, tags, linkTitle, linkHref }) => {
  return (
    <Box sx={{ marginBottom: 5 }}>
      <Styled.h5 sx={{ fontWeight: "medium", margin: 0 }}>{title}</Styled.h5>
      <Box sx={{ marginY: 2 }}>
        {tags.map(tag => (
          <span
            sx={{
              backgroundColor: "muted",
              padding: 1,
              fontSize: 0,
              color: "highlight",
              borderRadius: 4,
              marginRight: 1,
            }}
          >
            {tag}
          </span>
        ))}
      </Box>
      <Text sx={{ fontSize: 1, marginBottom: 3 }}>{description || ""}</Text>
      <Link
        to={linkHref}
        sx={{
          ...LinkStyle,
          fontSize: 0,
          fontWeight: "600",
        }}
        target="__blank"
      >
        {linkTitle}
      </Link>
    </Box>
  )
}

export default function Projects() {
  return (
    <Box>
      <Project
        title="Socioeconomic Determinants of Health and COVID-19 Outcomes"
        tags={["Research", "Data Science"]}
        linkTitle="VIEW PAPER"
        linkHref="#"
      />
      <Project
        title="Build A City"
        description={[
          "Re-imagining the classic block-stacking experience with a virtual twist. An interactive multiplayer game which lets players build a city collaboratively using real world blocks and witnessing the city being constructed on a screen. Built as an OOH installation with the client ",
          <Link
            href="https://www.thinkingbox.com/"
            target="__blank"
            sx={{ ...LinkStyle, color: "inherit" }}
          >
            Thinkingbox
          </Link>,
          ".",
        ]}
        tags={["Game Development", "Mixed Reality", "Unity"]}
        linkTitle="VIEW CASE STUDY"
        linkHref="/buildacity/"
      />
      <Project
        title="Workaholic"
        description="Workaholic uses the best health practices and reminds you in well thought-out intervals to practice ergonomic activities that help improve your health as you work."
        tags={["Full-Stack Development", "Under Construction"]}
        linkTitle="VIEW CASE STUDY"
        linkHref="/workaholic/"
      />
    </Box>
  )
}
