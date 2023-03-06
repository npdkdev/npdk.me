/**
 * @type {import('gatsby').GatsbyConfig}
 */
// import 'https://fonts.googleapis.com/css?family=Poppins:400,500,600,700&display=swap'
const config = require('./config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
module.exports = {
  trailingSlash: "never",
  siteMetadata: {
    title: config.defaultTitle,
    description: config.defaultDescription,
    author: config.author,
    siteUrl: config.url,
  },
  plugins: [
    // "gatsby-plugin-styled-components",
    "gatsby-plugin-image",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-postcss",
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: '4opf46zqtkkb',
        accessToken: 'n0KQGXpFHDdZuaFbvBES6mq5E8q2PxtgtgQC8SZPkUs',
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: config.defaultTitle,
        short_name: 'starter',
        start_url: '/',
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: 'minimal-ui',
        "icon": "src/images/logo.svg"
      }
    }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "images",
        "path": "./src/images/"
      },
      __key: "images"
    },

  ]
};
