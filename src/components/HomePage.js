/** @jsx jsx */
import { jsx, Flex, Box, Styled, Divider, Link } from "theme-ui"
// import { GitHub } from "react-feather"

import Contact from "./Contact"
import Projects from "./Projects"
import Footer from "./Footer"
import { LinkStyle } from "../utils/styles"

const SectionTitle = ({ title }) => (
  <div>
    <Styled.h6 sx={{ marginTop: 5, marginBottom: 1 }}>{title}</Styled.h6>
    <Divider sx={{ marginBottom: 4 }} />
  </div>
)

const ExtLink = ({ href, children }) => (
  <Link href={href} sx={LinkStyle} target="__blank">
    {children}
  </Link>
)

export default function HomePage() {
  return (
    <div
      sx={{
        width: ["90%", "80%", "60%"],
        margin: "auto",
        paddingTop: [2, 5, 5],
      }}
    >
      <Flex sx={{ justifyContent: "space-between" }}>
        <Box sx={{ width: ["100%", "70%", "70%"], paddingTop: 4 }}>
          <Contact resp={true} />
          <Styled.h1
            sx={{
              // display: ["none", "block", "block"],
              margin: 0,
              fontWeight: "400",
            }}
          >
            Pranay Jain
          </Styled.h1>
          <SectionTitle title="BACKGROUND" />
          <Styled.p>
            I am a masters student Computer Science at Duke University. I am 
            interested in the fields of machine learning, distributed systems and security.
            I completed my undergraduate degree in Computer Science and Mathematics
            from the University of British Columbia.
          </Styled.p>
          <Styled.p>
            I've previous experience as a full-stack software developer and have
            worked with a few startups to build their products. Some of them
            include <ExtLink href="https://www.moderntreasury.com/">Modern Treasury</ExtLink>,{" "}
            <ExtLink href="https://dapperlabs.com">Dapper Labs</ExtLink>,{" "}
            <ExtLink href="https://collabware.com/">Collabware</ExtLink>,{" "}
            <ExtLink href="http://vitay.io/">Vitay</ExtLink> and{" "}
            <ExtLink href="http://featherx.ai">FeatherX</ExtLink>.
          </Styled.p>

          {/* <Box sx={{ marginY: 5 }}>
            <SectionTitle title="RESEARCH" />
            My current research relates to the{" "}
            <ExtLink href="https://www.fcc.gov/about-fcc/fcc-initiatives/incentive-auctions">
              FCC Incentive Auction{" "}
            </ExtLink>
            , that consisted of a descending clock reverse auction designed to
            procure broadcasting rights from TV stations. I am currently working
            on developing a generative model for constraint graphs that can be
            used for simulating reverse auctions in different spectrum auction
            settings.
          </Box> */}

          <Box sx={{ marginY: 5 }}>
            <SectionTitle title="SELECTED PROJECTS" />
            <Projects />
          </Box>
        </Box>
        <Contact resp={false} />
      </Flex>
      <Footer />
    </div>
  )
}
