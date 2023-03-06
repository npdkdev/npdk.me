import React, { Children } from 'react'
import { graphql, Link } from 'gatsby'
import { GatsbyImage, getImage, StaticImage } from 'gatsby-plugin-image'
import { Intro } from '../components/Intro'
import { renderRichText } from 'gatsby-source-contentful/rich-text'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import { documentToPlainTextString } from '@contentful/rich-text-plain-text-renderer';
import { INLINES, BLOCKS, MARKS } from '@contentful/rich-text-types'
import { SEO as Seo } from '../components/Head'
import config from '../../config'
const Recommendation = () => {
  return (
    <>
      <div className="card-module--card">
        <div className="card-module--blogpost">
          <a className="card-module--hero" href="dummy">
            {/* <Image /> */}
          </a>
          <div className="card-module--caption">
            <p className="card-module--header">
              <a aria-current="page" className="card-module--category" href="/">dummy </a>
              • dumyy
            </p>
            <a className="card-module--titles" href="dumyy">
              <h2 className="card-module--title">dumyy</h2>
              <p className="card-module--subtitle">dumyy</p>
            </a>
          </div>
        </div>
        <hr className="card-module--line" />
      </div>
    </>
  )
}
const options = {
  renderMark: {
    [MARKS.BOLD]: (text) => <b className="font-bold">{text}</b>,
    [MARKS.CODE]: (text) => <code className='blog-template-module--code'>{text}</code>,
  },
  renderNode: {
    // "embedded-asset-block": node => {
    //   console.log(node.data)
    //   const { gatsbyImageData } = node.data.target
    //   if (!gatsbyImageData) {
    //     // asset is not an image
    //     return null
    //   }
    //   return <GatsbyImage image={gatsbyImageData} />
    // },
    [INLINES.HYPERLINK]: (node, children) => {
      const { uri } = node.data
      return (
        <Link to={uri} target="_blank" rel="noreferrer" className="blog-template-module--url">
          {children}
        </Link>
      )
    },

    [BLOCKS.HEADING_1]: (node, children) => {
      return <h1 className='class="blog-template-module--heading1'>{children}</h1>
    },
    [BLOCKS.HEADING_2]: (node, children) => {
      return <h2 className='class="blog-template-module--heading2'>{children}</h2>
    },
    [BLOCKS.HEADING_3]: (node, children) => {
      return <h3 className='class="blog-template-module--heading3'>{children}</h3>
    },
    [BLOCKS.PARAGRAPH]: (node, children) => {
      return <p className='blog-template-module--p'>{children}</p>
    },
    [BLOCKS.EMBEDDED_ASSET]: (node) => {
      const { gatsbyImageData, description } = node.data.target
      return (
        <GatsbyImage
          className='blog-template-module--img'
          image={getImage(gatsbyImageData)}
          alt={description}
        />
      )
    },
  },
}
const BlogContent = ({
  data: {
    contentfulBlogPost: {
      title,
      description,
      thumbnail,
      createdAt,
      slug,
      tags,
      category,
      updatedAt,
      body
    }
  }
}) => {
  let date = new Date(Date.parse(createdAt))
  let src = null
  if (thumbnail !== null) src = thumbnail
  const Img = () => {
    if (src !== null) {
      const image = getImage(src)
      return <GatsbyImage src={thumbnail.url} image={image} alt={title} />
    }
    return
  }
  const Body = () => {
    return (
      <div className='blog-template-module--body'>
        {body && renderRichText(body, options)}
      </div>
    )
  }
  return (
    <>
      <div className='blog-template-module--post'>
        <Link className='blog-template-module--nav' to='/blog'>
          <div className='blog-template-module--back'>
            <StaticImage
              src="../images/Back.png"
              alt={title}
              placeholder="blurred"
              layout="fixed"
              width={9}
              height={15}
            />
          </div>
          <p className='blog-template-module--navTitle'>{title}</p>
        </Link>
        <div className='blog-template-module--blogPost'>
          <div className='blog-template-module--titles'>
            <h1 className='blog-template-module--title'>{title}</h1>
            <h2 className='blog-template-module--subtitle'>{description}</h2>
          </div>
          <p className='blog-template-module--meta'>
            <a className='blog-template-module--category' href={category.toLowerCase()}>{category}  </a>
            • Dipublikasikan pada {date.toLocaleDateString("en-US", { day: 'numeric', month: 'short', year: 'numeric' })}
          </p>
          <div className='blog-template-module--figure'>
            <div className='blog-template-module--hero'>
              <Img />
            </div>
            <span className='blog-template-module--caption'>{thumbnail.description}</span>
          </div>
          <Body />
          <div className='blog-template-module--recommendation'>
            <h3 className='blog-template-module--readmore'>Baca juga</h3>
            <div className='blog-template-module--cards'>
              <Recommendation />
            </div>
          </div>
        </div>
        <Intro showTitle={false} />
      </div>

    </>
  )
}

export const query = graphql`
  query ($id: String) {
    contentfulBlogPost(id: {eq: $id }) {
      title
      description
      keywords
      thumbnail {
        url
        gatsbyImageData(layout: FULL_WIDTH,breakpoints:[200,400,800,1200,1600,2400,2542], formats: [WEBP], placeholder: BLURRED)
      }
      createdAt
      updatedAt
      tags
      body {
        raw
        references {
          ... on ContentfulAsset {
            contentful_id
            __typename
            gatsbyImageData(layout: FULL_WIDTH,breakpoints:[200,400,800,1200,1600,2400,2542], formats: [AUTO,WEBP], placeholder: BLURRED)
          }
        }
      }
      slug
      category
    }
  }
`
export const Head = (props) => {
  const blogPost = props.data.contentfulBlogPost
  const desc = documentToPlainTextString(JSON.parse(blogPost.body.raw)).substring(0, 256)
  const Tag = () => {
    if (blogPost.tags == null) return
    blogPost.tags.split(",").map((item) => {
      return <meta property="article:tag" content={item} />
    })


  }
  return (
    <Seo {...props} description={props.excerpt} >
      <meta itemProp="image" content={blogPost.thumbnail.url} />
      <meta itemProp="og:image" content={blogPost.thumbnail.url} />
      <meta itemProp="og:image:alt" content={blogPost.title} />
      <meta itemProp="name" content={config.author} />
      <meta itemProp="description" content={desc} />
      {/* <meta itemProp="keywords" content={blogPost.keywords} /> */}
      <meta itemProp="datePublished" content={blogPost.createdAt} />
      <meta itemProp="dateModified" content={blogPost.updatedAt} />
      <meta property="og:site_name" content={config.author} />
      <meta property="og:locale" content="id_ID" />
      <meta property="og:locale:alternate" content="ms_MY" />
      <meta property="og:title" content={blogPost.title} />
      <meta property="og:description" content={blogPost.description} />
      {/* <meta property="keywords" content={blogPost.keywords} /> */}
      <meta property="og:type" content="article" />
      <meta property="og:url" content={config.url + blogPost.slug} />
      <meta property="og:image:secure_url" content={blogPost.thumbnail.url} />
      <meta property="og:image:width" content="400" />
      <meta property="og:image:height" content="200" />
      <meta property="article:author" content={config.author} />
      <meta property="article:publisher" content={config.author} />
      <meta property="article:published_time" content={blogPost.createdAt} />
      <meta property="article:modified_time" content={blogPost.updatedAt} />
      <meta property="article:section" content="post" />
      <Tag />
      <meta name="image" content={blogPost.thumbnail.url} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={blogPost.title} />
      <meta name="twitter:url" content={config.url + blogPost.slug} />
      <meta name="twitter:description" content={blogPost.description} />
      <meta name="twitter:image" content={blogPost.thumbnail.url} />
      <meta name="twitter:image:alt" content={blogPost.title} />
    </Seo>
  )
}

export default BlogContent;
