import * as React from "react"
import { Bio } from "./layout/Bio"
import { Profile } from "./layout/Profile"
import config from '../../config'

export const Intro = ({ showTitle = true }) => {

  return (
    <>
      <div className="Intro-module--intro">
        {showTitle && <a aria-current="page" className="Intro-module--webtitle" href="/">Nopem Adika</a>}
        <Profile />
        <Bio />
        <a href={"mailto:" + config.email} className="Intro-module--hibutton">Sapa saya!</a>
      </div>
    </>
  )

}
