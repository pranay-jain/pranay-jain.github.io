/** @jsx jsx */
import { jsx, Flex, Styled } from "theme-ui"
import NavLink from "./NavLink"

export default () => {
  return (
    <header
      sx={{
        paddingX: 6,
        paddingY: 3,
        borderBottom: "solid 1px",
        borderColor: "muted",
      }}
    >
      <Flex sx={{ justifyContent: "space-between" }}>
        <Styled.p
          sx={{
            marginY: 0,
            paddingY: 1,
            color: "text",
          }}
        >
          pranay jain
        </Styled.p>
        <Flex as="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink>Projects</NavLink>
        </Flex>
      </Flex>
    </header>
  )
}
