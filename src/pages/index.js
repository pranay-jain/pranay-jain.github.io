import React from "react"

import HomePage from "../components/HomePage"
import Header from "../components/Header"

import { library } from "@fortawesome/fontawesome-svg-core"
import { fab } from "@fortawesome/free-brands-svg-icons"
import { fas } from "@fortawesome/free-solid-svg-icons"

export default function Home() {
  library.add(fab, fas)
  return (
    <>
      {/* <Header /> */}
      <HomePage />
    </>
  )
}
