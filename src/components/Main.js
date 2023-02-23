import * as React from "react"
import { Intro } from "./Intro"
import { Content } from "./Content"
import '../styles/styles.css'

const Main = ({ page }) => {
  return (
    <>
      <div className="layout-module--layout">
        <Intro />
        <Content active={page} />
      </div>
    </>
  )
}

export default Main
