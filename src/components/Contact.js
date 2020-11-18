/** @jsx jsx */
import { jsx, Link, Box, Flex, Text, Styled } from "theme-ui"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { graphql, useStaticQuery } from "gatsby"
import Img from "gatsby-image"
import { LinkStyle } from "../utils/styles"

const itemStyle = {
  display: "block",
  textDecoration: "none",
  marginY: 3,
  color: "text",
  cursor: "pointer",
  fontFamily: "heading",
}

const SocialItem = ({ icon, name, url }) => (
  <Link href={url} sx={itemStyle} target="__blank">
    <FontAwesomeIcon icon={icon} sx={{ fontSize: 2 }} />
    <span sx={{ fontSize: 2, marginLeft: 2 }}>{name}</span>
  </Link>
)

const query = graphql`
  query {
    bigImg: file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 125, height: 125) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    smImg: file(relativePath: { eq: "portrait.jpg" }) {
      childImageSharp {
        # Specify the image processing specifications right in the query.
        # Makes it trivial to update as your page's design changes.
        fixed(width: 40, height: 40) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default function ({ resp }) {
  const data = useStaticQuery(query)
  return resp ? (
    <ResponsiveContact data={data} />
  ) : (
    <FullSizeContact data={data} />
  )
}

export const ResponsiveContact = ({ data }) => {
  // const data = getQuery()
  return (
    <Box
      sx={{
        display: ["block", "none", "none"],
        marginBottom: 5,
      }}
    >
      <Flex sx={{ alignItems: "center" }}>
        <Img
          fixed={data.smImg.childImageSharp.fixed}
          sx={{
            borderRadius: "100%",
            marginRight: 3,
          }}
        />
        <Flex>
          <Link
            sx={{
              ...LinkStyle,
              marginLeft: 2,
              fontSize: 1,
              fontWeight: "bold",
            }}
          >
            CV
          </Link>
          <Link
            sx={{
              ...LinkStyle,
              marginLeft: 2,
              fontSize: 1,
              fontWeight: "bold",
            }}
          >
            Email
          </Link>
        </Flex>
      </Flex>
      {/* <Styled.h1 sx={{ margin: 0, fontWeight: "light" }}>Pranay Jain</Styled.h1> */}
    </Box>
  )
}

const FullSizeContact = ({ data }) => {
  return (
    <Box
      sx={{
        display: ["none", "block", "block"],
        width: "20%",
        maxWidth: 600,
        paddingY: 4,
      }}
    >
      <Img
        fixed={data.bigImg.childImageSharp.fixed}
        sx={{
          borderRadius: "4px",
          marginBottom: 4,
        }}
      />
      <Flex sx={itemStyle}>
        <FontAwesomeIcon
          icon={["fas", "map-marked-alt"]}
          sx={{ fontSize: 2 }}
        />
        <Text as="span" sx={{ fontSize: 2, marginLeft: 2 }}>
          Vancouver, BC
        </Text>
      </Flex>
      <SocialItem
        name="Email"
        icon={["fas", "inbox"]}
        url="mailto:pranayjain1117@gmail.com"
      />
      <SocialItem
        name="Linkedin"
        icon={["fab", "linkedin"]}
        url="https://www.linkedin.com/in/pranayjain1/"
      />
      <SocialItem
        name="Github"
        icon={["fab", "github"]}
        url="http://github.com/pranay-jain/"
      />
    </Box>
  )
}
