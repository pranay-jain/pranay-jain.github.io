/** @jsx jsx */
import { jsx } from "theme-ui"
import { Link } from "gatsby"
export default props => (
  <Link
    {...props}
    activeClassName="navlink--active"
    sx={{
      textDecoration: "none",
      color: "#888",
      fontSize: 2,
      marginX: "4px",
      // marginY: 2,
      paddingY: 1,
      paddingX: 3,
      borderRadius: "4px",
      fontWeight: "body",
      fontFamily: "heading",
      "&.navlink--active": {
        color: "primary",
        // backgroundColor: "gray",
        // borderBottom: "2px solid accent",
      },
      "&:hover": {
        color: "primary",
        // backgroundColor: "highlight",
        // backgroundColor: "gray",
        // borderBottom: "2px solid accent",
      },
    }}
  />
)
