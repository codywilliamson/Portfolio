const path = require('path')

// programmatically create slug based on file name
module.exports.onCreateNode = ({ node, actions }) => {
    const { createNodeField } = actions

    if (node.internal.type === 'MarkdownRemark') {
        const slug = path.basename(node.fileAbsolutePath, '.md')

        createNodeField({
            node,
            name: 'slug',
            value: slug
        })
    }
}

// create pages based on slug asynchronously
module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    // conditional variables set based on content type
    const productTemplate = path.resolve('./src/templates/product.js')
    const blogTemplate = path.resolve('./src/templates/blog.js')
    let templateToUse,
        pathName;
      
    // query all md files
    const res = await graphql(`
        query {
            allMarkdownRemark {
              edges {
                node {
                  fields {
                    slug
                  }
                  frontmatter {
                    blog
                  }
                }
              }
            }
          }
    `)

    // loop through query results
    res.data.allMarkdownRemark.edges.forEach((edge) => {
      // check blog frontmatter flag in each md file
      if (edge.node.frontmatter.blog == true) {
        // set conditional variables to create blog pages
        templateToUse = blogTemplate;
        pathName = 'blog';
      } else {
        // other content type is products, set variables
        templateToUse = productTemplate;
        pathName = 'products';
      }

      // product files reference bulletPoints.md and reviews.md to structure product template
      // if slug equals one of these, return
      // gatsby build fails because it tries to create pages based on these
      // so output becomes 'products/reviews' but that doesn't exist
      // so this check ensures they are ignored at buildtime
      if (edge.node.fields.slug === "bulletPoints" || edge.node.fields.slug === "reviews") {
        return;
      }

      // createPages based checks above
        createPage({
            component: templateToUse,
            path: `/${pathName}/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}