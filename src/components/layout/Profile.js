import * as React from 'react'
import Image from '../Image'

const SocialButtons = () => {
  return (
    <>
      <a href="https://github.com/npdkdev"
        target="_blank"
        rel="noreferrer"
        className="Intro-module--icon">

        <Image
          aria-hidden={true}
          src="GitHub.png"
          alt="Github Page">
          <div
            aria-hidden="true"
            style={{ width: "100%", paddingBottom: "100%" }} />
        </Image>
      </a>
      <a href="https://instagram.com/nppddkk"
        target="_blank"
        rel="noreferrer"
        className="Intro-module--icon">

        <Image
          aria-hidden={true}
          src="Instagram.png"
          alt="Instagram Page">
          <div
            aria-hidden="true"
            style={{ width: "100%", paddingBottom: "100%" }} />
        </Image>
      </a>
      <a href="https://youtube.com/"
        target="_blank"
        rel="noreferrer"
        className="Intro-module--icon">

        <Image
          aria-hidden={true}
          src="YouTube.png"
          alt="YouTube Page">
          <div
            aria-hidden="true"
            style={{ width: "100%", paddingBottom: "100%" }} />
        </Image>
      </a>
    </>
  )
}
export const Profile = () => {
  return (
    <>
      <div className="Intro-module--profile">
        <a aria-current="page" className="Intro-module--avatar" href="/">
          <Image
            src="itsme.png"
            alt="Profile Image"
          >
            <div
              aria-hidden="true"
              style={{ width: "100%", paddingBottom: "100%" }} />
          </Image>
        </a>
        <div className="Intro-module--socials">
          <SocialButtons />
        </div >
      </div>
    </>
  )
}
