/** @jsx jsx */
import { jsx, Link, Divider } from "theme-ui"
import React from "react"
import { LinkStyle } from "../utils/styles"

const Footer = () => (
  <footer>
    <Divider m={0} />
    <div sx={{ paddingY: 4, fontFamily: "heading" }}>
      Get in touch &mdash;{" "}
      <Link href="mailto:pranayjain1117@gmail.com" sx={LinkStyle}>
        pranayjain1117@gmail.com
      </Link>
    </div>
  </footer>
)

export default Footer
