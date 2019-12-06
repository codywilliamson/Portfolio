/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */

  plugins: [
    // sass support
    'gatsby-plugin-sass',
    // for sourcing data from local filesystem
    // check https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=gatsby%20source
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src/`
      }
    }
  ],
  siteMetadata: {
    title: 'Yooneek',
    author: 'Mindvolt'
  }
}
