import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"

const ImageQuery = graphql`
  query {
    images: allFile(filter: {internal: {mediaType: {regex: "/image/"}}}) {
      edges {
        node {
          relativePath
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH,breakpoints:[200,400,800,1200,1600,2400,2542], formats: [WEBP], placeholder: BLURRED)
          }
        }
      }
    }
  }
`
const Image = ({ src, alt, ...rest }) => {
  const data = useStaticQuery(ImageQuery)
  const match = useMemo(() => data.images.edges.find(({ node }) => src === node.relativePath), [data, src])
  if (!match) return null
  const { node: { childImageSharp, publicURL, extension } = {} } = match
  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} {...rest} />
  }
  return (<GatsbyImage image={childImageSharp.gatsbyImageData} alt={alt} {...rest} />)
}

export default Image
