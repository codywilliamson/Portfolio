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
    // for optimizing & transforming images using graphql
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    'gatsby-transformer-remark',
    // for sourcing data from local filesystem
    // check https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=gatsby%20source
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'src',
        path: `${__dirname}/src`
      }
    },
    // source products directory
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'products',
        path: `${__dirname}/src/products`
      }
    },
    // source blogs directory
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'blogs',
        path: `${__dirname}/src/blogs`
      }
    },
    // load self hosted fonts
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        custom: {
          families: [
            'Minion Pro'
          ],
          urls: ['fonts.css']
        }
      }
    }
  ],
  // site details
  siteMetadata: {
    title: 'Yooneek',
    author: 'Mindvolt'
  }
}
