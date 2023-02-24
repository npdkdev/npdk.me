import React, { useMemo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { GatsbyImage } from "gatsby-plugin-image";
import PropTypes from 'prop-types';

const Image = ({ src, ...rest }) => {
  const data = useStaticQuery(graphql`{
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
}`);

  const match = useMemo(() => data.images.edges.find(({ node }) => src === node.relativePath), [data, src]);

  if (!match) return null;

  const { node: { childImageSharp, publicURL, extension } = {} } = match;

  if (extension === 'svg' || !childImageSharp) {
    return <img src={publicURL} {...rest} />;
  }

  return (<GatsbyImage image={childImageSharp.gatsbyImageData} alt="hehe" />)
};

Image.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string,
};

export default Image;
