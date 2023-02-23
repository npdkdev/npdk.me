import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { defaults } from 'autoprefixer'


const StackQuery = graphql`
  query {
    images: allFile(filter: {internal: {mediaType: {regex: "/image/"}}}) {
      edges {
        node {
          relativePath
          extension
          publicURL
          childImageSharp {
            gatsbyImageData(layout: FULL_WIDTH,breakpoints:[200,400,800,1200,1600,2400,2542], formats: [AUTO,WEBP], placeholder: BLURRED)
          }
        }
      }
    }
  }
`
const Image = ({ src, ...rest }) => {
  const data = useStaticQuery(StackQuery)
  const match = useMemo(() => data.images.edges.find(({ node }) => src === node.relativePath), [data, src])
  if (!match) return null
  const { node: { childImageSharp, publicURL, extension } = {} } = match
  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} {...rest} />
  }
  return (<GatsbyImage image={childImageSharp.gatsbyImageData} {...rest} />)
}

const Stack = ({ data }) => {
  const tags = data.tags
  return (
    <>
      <div className='portfolio-module--card'>
        <a href={data.link}
          target="_blank"
          rel="noreferrer"
          className="portfolio-module--hero">
          <Image alt={data.name} src={"stack/" + data.img} />
        </a>
        <div className='portfolio-module--caption'>
          <a href={data.link}
            target="_blank"
            rel="noreferrer"
            className="portfolio-module--title">
            {data.title}
          </a>
          <p
            className="portfolio-module--subtitle">
            {data.description}
          </p>
          <div className="portfolio-module--tags">
            {tags.map(data => {
              return <span key={data} className="portfolio-module--tag">{data}</span>
            })}
          </div>
        </div>

      </div>
    </>
  )
}



export default Stack
