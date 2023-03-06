import * as React from "react"
import { Intro } from "./Intro"
import { Content } from "./Content"
import Config from '../../config'
import { SEO as Seo } from './Head'

export default function Main(props) {
  const prop = props.props
  const page = props.page
  return (
    <>
      <div className="layout-module--layout">
        <Intro />
        <Content active={page} />
      </div>
    </>
  )
}
export const Head = () => {
  return <Seo title="test" />
}

