import * as React from "react"
import Main from '../components/Main'
import { SEO as Seo } from '../components/Head'
const IndexPage = (props) => {
  // console.log(props)
  return (
    <Main page="main" props={props} />
  )
}
export const Head = () => {
  return <Seo title="test" />
}
export default IndexPage

