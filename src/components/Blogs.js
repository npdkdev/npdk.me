import { defaults } from "autoprefixer"
import { graphql, Link, useStaticQuery } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import React from "react"

export const ItemBlog = ({ data }) => {
  let src = null
  let date = new Date(Date.parse(data.createdAt))
  if (data.thumbnail !== null) src = data.thumbnail
  const Image = () => {
    if (src !== null) {
      const image = getImage(src)
      return <GatsbyImage src={data.thumbnail.url} image={image} alt={data.title} />
    }
    return
  }
  return (
    <>
      <div className="card-module--card">
        <div className="card-module--blogpost">
          <Link className="card-module--hero" to={"/" + data.slug}>
            <Image />
          </Link>
          <div className="card-module--caption">
            <p className="card-module--header">
              <Link aria-current="page" className="card-module--category" to="/">{data.category} </Link>
              • {date.toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' })}
            </p>
            <a className="card-module--titles" href={data.slug}>
              <h2 className="card-module--title">{data.title}</h2>
              <p className="card-module--subtitle">{data.description}</p>
            </a>
          </div>
        </div>
        <hr className="card-module--line" />
      </div>
    </>
  )
}

const Blogs = () => {
  const data = useStaticQuery(BlogsQuery)
  return (
    <>
      <div className='blog-module--blog'>
        {
          data.allContentfulBlogPost.nodes.map(nodes => {
            return <ItemBlog key={nodes.id} data={nodes} />
          })
        }
      </div>
    </>
  )
}
export const BlogsQuery = graphql`
  query blogsQuery{
    allContentfulBlogPost {
      nodes {
        id
        title
        slug
        category
        thumbnail {
          url
          gatsbyImageData(layout: FULL_WIDTH,breakpoints:[200,400,800,1200,1600,2400,2542], formats: [WEBP], placeholder: BLURRED)
        }
        description
        createdAt
      }
    }
  }
`
export default Blogs
