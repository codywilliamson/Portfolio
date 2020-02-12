/**
 * Configure your Gatsby site with this file.
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  pathPrefix: '/',                                      // adding path for static files
  plugins: [
    // plugins
    `gatsby-plugin-sass`,                                // sass compilation
    `gatsby-plugin-sharp`,                               // for optimizing & transforming images using graphql
    `gatsby-transformer-sharp`,                          // for optimizing & transforming images using graphql
    `gatsby-transformer-remark`,                         // parsing markdown files
    `gatsby-plugin-react-helmet`,                        // manipulating document head (seo)
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,    // prefetching lato google font to reduce external stylesheet dependencies
      options: {
        fonts: [
          {
            family: `Lato`,
            variants: [`300`, `400`, `700`, `900`]
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,               // for sourcing the file system (https://www.gatsbyjs.org/packages/gatsby-source-filesystem/)
      options: {
        name: `src`,
        path: `${__dirname}/src`
      }
    },
  ],
  siteMetadata: {                                       // site details
    title: `codywilliamson`,
    author: `Cody Williamson`,
    description: `Website for Web Developer Cody Williamson`
  }
}
