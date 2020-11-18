/** @jsx jsx */
import { jsx, Box } from "theme-ui"
import React from "react"
import { Link } from "gatsby"
import Footer from "../components/Footer"

import LogoImg from "../../static/project_images/workaholic/Logo.png"
import TwoImg from "../../static/project_images/workaholic/2.jpg"
import ThreeImg from "../../static/project_images/workaholic/3.jpg"
import WorkHomeImg from "../../static/project_images/workaholic/work-home.png"
import HealthImg from "../../static/project_images/workaholic/health.png"
import ActImg from "../../static/project_images/workaholic/act.png"
import ScreenTimeImg from "../../static/project_images/workaholic/work-screentime.png"
import TasksImg from "../../static/project_images/workaholic/work-tasks.png"
import NotesImg from "../../static/project_images/workaholic/notes.png"

import "../styles.scss"

export default function Workaholic() {
  return (
    <div sx={{ width: ["90%", "80%", "70%"], margin: "auto" }}>
      <section class="first project-page">
        <div class="content-project">
          <Link to="/">
            <button class="return-to-home"> &larr; &nbsp; Back</button>
          </Link>
          <div class="project-logo logo-small">
            <img src={LogoImg} />
          </div>
          <div class="project-title">Workaholic</div>
          <div class="project-container">
            <div class="project-container-left">
              <div class="description-tile">
                <span>Tags</span>
                <p>
                  Interaction Design, User Experience Design, Web Application
                </p>
              </div>
              <div class="description-tile">
                <span>When</span>
                <p>May 2019 - present</p>
              </div>
              <div class="description-tile">
                <span>Role</span>
                <p>Full-stack development</p>
              </div>
              <div class="description-tile">
                <span>Languages/Tools</span>
                <p>React.js, Python </p>
              </div>
            </div>
            <div class="project-container-main">
              <p class="project-subtitle">
                A productivity platform that cares for your health.
              </p>
              <p>
                People spend almost 5-10 hours per day in front of their
                screens. This work requires them to be continuously seated for
                long hours which affects their physical health in terms of
                eyesight, posture, neck pain, dehydration and headaches. This
                problem isn't just limited to tech offices; a lot of people now
                have their daily tasks centered around laptops.{" "}
              </p>
              <p>
                As a small step towards building a healthy interaction with our
                devices, Workaholic is a Chrome extension that aims to improve
                your health and professional life.
              </p>
              {/* <p class="project-subtitle">Ideation &amp; Paper Prototypes</p> */}
            </div>
            {/* <div class="project-container-flex">
              <div class="project-container-flex-half">
                <img src={ThreeImg} class="full" />
                <p class="image-description">Brainstorming Features</p>
              </div>
              <div class="project-container-flex-half">
                <img src={TwoImg} class="full" />
                <p class="image-description">Wireframe Layout</p>
              </div>
            </div> */}
            <div class="project-container-main">
              <p class="project-subtitle">Dashboard Design</p>
              <p>
                Workaholic is a productivity tool in your browser that helps you
                track your health goals. It comes with a web application that
                acts as the dashboard to track your health data and see your
                progress.
              </p>
              <p>
                The Dashboard takes care of screen time, ergonomic activites,
                hydration, everyday tasks and note taking. Each of these
                functions are present as interactive cards where users can enter
                their data--such as health or notes--and observe its trends over
                time. The dashboard app can be added as the default New Tab
                homepage in Chrome.
              </p>
              <img src={WorkHomeImg} class="full" />
            </div>
            <div class="project-container-main">
              <p class="project-subtitle">Tracking the user's health</p>
              <img src={HealthImg} class="full" />
              <p>
                The Health Card provides a visual representation of the user's
                health goals. We plan to add 3rd party integrations, such as
                Apple Health to coalesce the user's health data and keep them up
                to date with their everyday activity goals.
              </p>
              <img src={ScreenTimeImg} class="full" />
              <p>
                Screen time is constantly visible to the user on the dashboard.
                They can pause or stop this at any time while taking a break or
                finishing work for the day. Expanding the card allows users to
                get more insight and view trends over time.{" "}
              </p>
              <br />
              <p class="project-subtitle">Ergonomic Activities</p>
              <img src={ActImg} class="full" />
              <p>
                This tab provides instructions from the app to the user in the
                form of ergonomic exercises like stretching, neck and shoulder
                exercise as well as posture checks. It provides the user with
                (optional) instructional videos and complete control over the
                activity such as snoozing and/or increasing their frequency.
              </p>
              <br />
            </div>
            <div class="project-container-flex">
              <div class="project-container-flex-bigger">
                <img src={TasksImg} class="full" />
                <img src={NotesImg} class="full" />
              </div>
              <div class="project-container-flex-smaller">
                <br />
                <p class="project-subtitle">
                  Productivity through <br />
                  Tasks & Notes
                </p>
                <p>
                  The importance of productivity is maintained in the design as
                  the users can easily manage their schedules and take quick
                  notes in the app. The expanded task view contains a calendar
                  with reminders for the month along with the day's to-do list.{" "}
                </p>
              </div>
            </div>
            <div class="project-container-main">
              <p>
                <b>
                  {" "}
                  Currently, Workaholic is under development. We will begin
                  beta-testing soon by sharing the app with offices and
                  evaluating feedback.
                </b>
              </p>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
