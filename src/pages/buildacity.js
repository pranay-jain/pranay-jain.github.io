/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"

import "../styles.scss"

import LogoImg from "../../static/project_images/buildacity/logo.png"
import iPhoneBlackImg from "../../static/project_images/buildacity/iphone-black.png"
import BlocksImg from "../../static/project_images/buildacity/blocks.png"
import CombinationsImg from "../../static/project_images/buildacity/combinations.png"
import MapImg from "../../static/project_images/buildacity/Map.png"
import TouchpointImg from "../../static/project_images/buildacity/touchpoint.png"
import UTOneImg from "../../static/project_images/buildacity/user-test-1.jpg"
import UTTwoImg from "../../static/project_images/buildacity/user-test-2.jpg"

export default function BuildACity() {
  return (
    <Box sx={{ width: ["90%", "80%", "70%"], margin: "auto" }}>
      <section class="project-page">
        <div class="content-project">
          <Link to="/">
            <button class="return-to-home"> &larr; &nbsp; Back</button>
          </Link>
          <div class="project-logo">
            <img src={LogoImg} alt="Build A City Logo" />
          </div>
          <div class="project-title">Build A City</div>
          <div class="project-container">
            <div class="project-container-left">
              <div class="description-tile">
                <span>Tags</span>
                <p>Product Design, Game Development, Augmented Reality</p>
              </div>
              <div class="description-tile">
                <span>When</span>
                <p>May - Aug 2019</p>
              </div>
              <div class="description-tile">
                <span>Role</span>
                <p>Game Development, Product Design</p>
              </div>
              <div class="description-tile">
                <span>Languages/Tools</span>
                <p>Unity, C#</p>
              </div>
            </div>
            <div class="project-container-main">
              <p class="project-subtitle">Project Overview</p>
              <p>
                Build A City is an interactive game developed by Team Spark for
                the client, Thinkingbox. The goal was to create an Out-Of-Home
                (OOH) installation that focused on using new and exciting
                technology for a unique user experience. This entailed imagining
                the installation for a particular public space (such as mall,
                airport, comic-con event, etc.) and pitching it as an on-site
                activation for a client and/or idea of our choice.
              </p>
              <p class="project-subtitle">The Idea</p>
              <div class="quote">
                Bringing the nostalgia of block-stacking to an immersive
                mixed-reality experience.{" "}
              </div>
              <p>
                The idea of the project was to create an interactive game that
                took real-world interactions of building with blocks and augment
                the experience to a virtual space. Each physical block
                represents a type of building which, when placed on a game
                board, appears as a virtual rendering of that building on
                screen. In this way, players can arrange blocks to create a city
                of their own. Players are encouraged to collaborate and build a
                sustainable city. After they submit their entry, they can view a
                360 model of the city they just created and share it with others
                on social media.
              </p>
            </div>
            <div class="project-container-main">
              <div class="video-wrapper">
                <iframe
                  src="https://player.vimeo.com/video/356494589"
                  width="640"
                  height="360"
                  frameborder="0"
                  allow="autoplay; fullscreen"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="project-container-main">
              <p class="project-subtitle">Defining a Product-Market Fit</p>
              <p>
                This project was unique in this sense. Our client was
                Thinkingbox, a production studio that works with other clients
                on projects. Our expectation from the client was to come up with
                an idea for an activation installation that uses new and
                exciting technologies. However, we were also expected to come up
                with use cases for such an installation: what brands or IP's it
                could work for and how it can be scaled.
              </p>
              <p>
                To do this, we had to reverse-engineer our idea. Once we came up
                with the wild idea after many brainstorming sessions, we had to
                roll-back and brainstorm on how this idea is applicable in the
                real world. We thought of different industries it could work
                with and came up with different applications for it.{" "}
              </p>
              <p>
                We pitched it as a possible educational tool to teach{" "}
                <strong>sustainable urban design</strong>. We pitched our client
                as <strong>Science World</strong> where they host many such
                installations to teach science. We even got in touch with them
                to discuss how they measure success for such installations which
                helped us further define our goals for the project.
              </p>
            </div>
            <div class="project-container-flex">
              <div class="project-container-flex-smaller">
                <img src={iPhoneBlackImg} class="full" />
                <p class="image-description">
                  A basic prototype developed in AR Kit for iOS
                </p>
              </div>
              <div class="project-container-flex-bigger">
                <p class="project-subtitle">
                  Assessing Technical Solutions & Limitations
                </p>
                <p>
                  Our first idea was to develop an Augmented Reality (AR) app to
                  recognize physical blocks, while allowing the user to place
                  virtual objects on and around them to build the city.
                </p>
                <p>
                  However, we discovered that there current AR technology does
                  not support simultaneous tracking of multiple 3D objects.
                  While <b>ARKit</b> allows for extended tracking, it can still
                  only actively track 1 object at a time. Furthermore, it did
                  not have a smooth user experience: recognition took a few
                  seconds and had jitters and lags in movement of the blocks.
                </p>
              </div>
            </div>
            <div class="project-container-main">
              <br />
              <p>
                On further research, we came up with a new solution. Since we
                were building an on-site installation, we had room to control
                the apparatus and environment of the project. Using copper
                tapes, we could use customize the blocks such that when a player
                places them on a touch-screen base, it would recognize the
                block. Furthermore, we added unique angular arrangement at the
                base so that different blocks can be recognized as separate
                buildings.{" "}
              </p>
            </div>
            <div class="project-container-flex">
              <div class="project-container-flex-smaller">
                <img src={BlocksImg} alt="Blocks Image" class="full" />
                <p class="image-description">A glance at the blocks</p>
              </div>
              <div class="project-container-flex-bigger">
                <img
                  src={TouchpointImg}
                  alt="Showing how touchpoint technology works"
                  class="full"
                />
              </div>
            </div>
            <div class="project-container-main">
              <p>
                We developed the concept as an interactive game in <b>Unity</b>.
                We developed a server application which renders a collaborative
                game-view where players observe the city being virtually
                constructed &mdash; this allows for a{" "}
                <b>multiplayer experience</b>. I implemented the Unity Low Level
                API (LLAPI), which uses UDP on the Transport Layer to share
                information between clients and servers.{" "}
              </p>
              <br />
              <p class="project-subtitle">Combinations</p>
              <p>
                A core idea of implementing the block-stacking experience was
                the ability to be able to combine different blocks to make new
                structures. This makes the building experience scalable by being
                able to create a multitude of structures using only a few
                building blocks &mdash; we wanted to implement this idea
                virtually in our game.
              </p>
              <img
                src={CombinationsImg}
                alt="Combinations of different blocks yield different results"
                class="full"
              />
              <br />
              <p>
                To do this we came up with the above combinations map. Each
                block when combined (placed side-by-side) with another block on
                the board appears as a different type of building. These
                buildings have different properties from the general buildings.{" "}
              </p>
              <p class="project-subtitle">User Experience Research</p>
              <p>
                <b>
                  How might we make users place the blocks in the way we want
                  them to?
                </b>
              </p>
              <p>
                The purpose of this user testing was to uncover how we could
                guide users to build blocks through our visual design. In our
                installation, we do not want users to stack the blocks but,
                instead, have them sprawl across the surface.
              </p>
            </div>
            <div class="project-container-flex">
              <div class="project-container-flex-smaller">
                <img src={MapImg} class="full" />
              </div>
              <div class="project-container-flex-bigger">
                <p>
                  <b>The Task</b>
                </p>
                <p>
                  Ask users to ignore the appearance (colour) of the blocks, and
                  tell them the only difference would be the size of each. Then,
                  ask users to fill one map at a time (in 2 minutes) with blocks
                  according to the visual design of each map. Record the result,
                  observe the user journey, and gather insights on the decision
                  making.
                </p>
              </div>
            </div>
            <div class="project-container-main">
              <p>
                <b>Results</b>
              </p>
              <p>
                We found that the dotted line works well in terms of indicating
                where to put the blocks. We found that such a setup had a
                quicker on-boarding experience for the user and provided a
                natural understanding of the game's objective.
              </p>
              <p class="project-subtitle">
                Cognitive Walkthroughs &amp; Usability Testing
              </p>
              <p>
                <b> Purpose</b>
              </p>
              <p>
                To simulate the installation environment and observe how users
                will interact with the blocks, including their reaction to the
                virtual world.
              </p>
              <p>
                <b> Method</b>
              </p>
              <p>
                We used a projector to project a digital map on a desk as the
                user interface, and have a display screen as the output of
                actions. Next, we asked users to start playing with it freely.
                At the same time, we use a tablet behind the scene to simulate
                users’ action in order to make the corresponding reaction on the
                display screen.
              </p>
            </div>
            <div class="project-container-flex">
              <div class="project-container-flex-half">
                <img
                  src={UTTwoImg}
                  alt="Image of user tests"
                  class="full shadow"
                />
              </div>
              <div class="project-container-flex-half">
                <img
                  src={UTOneImg}
                  alt="Image of user tests"
                  class="full shadow"
                />
              </div>
            </div>
            <div class="project-container-main">
              <p>
                <b>Observations</b>
              </p>
              <ul>
                <li>
                  The users saw the transformation of the buildings but had no
                  idea about the rules behind it. <b>Action</b>: Design the
                  appearance of the blocks by different pattern, icon, or
                  colour.
                </li>
                <li>
                  Some users tried to stack the blocks up while others put the
                  block either horizontally or vertically to see what will
                  happen on big screen. <b>Action: </b>design the appearance of
                  the blocks by different pattern, icon, or colour.
                </li>
                <li>
                  Most of the users picked one block at a time and put it in a
                  fixed place.
                </li>
                <li>
                  The users were curious about what will happen if they take out
                  the block they just put on the map. <b>Action</b>: Use a
                  special eraser block to delete buildings.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </Box>
  )
}
