import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import React, { useMemo } from "react"

const StaticQuery = graphql`{
  images: allFile(filter: {internal: {mediaType: {regex: "/image/"}}}) {
    edges {
      node {
        relativePath
        extension
        publicURL
        childImageSharp {
          gatsbyImageData(width: 256, formats: [WEBP], placeholder: NONE)
        }
      }
    }
  }
}`
const ImageStatic = ({ src, alt, ...rest }) => {
  const data = useStaticQuery(StaticQuery)
  const match = useMemo(() => data.images.edges.find(({ node }) => src === node.relativePath), [data, src]);
  if (!match) return null;
  const { node: { childImageSharp, publicURL, extension } = {} } = match;
  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} {...rest} />;
  }
  return (<GatsbyImage image={childImageSharp.gatsbyImageData} alt={alt} />)
}

export default ImageStatic 
