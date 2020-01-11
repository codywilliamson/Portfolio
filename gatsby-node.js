const path = require('path')

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

module.exports.createPages = async ({ graphql, actions }) => {
    const { createPage } = actions
    const productTemplate = path.resolve('./src/templates/product.js')
    const blogTemplate = path.resolve('./src/templates/blog.js')
    let templateToUse,
        pathName;
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

    res.data.allMarkdownRemark.edges.forEach((edge) => {
      if (edge.node.frontmatter.blog == true) {
        templateToUse = blogTemplate;
        pathName = 'blog';
      } else {
        templateToUse = productTemplate;
        pathName = 'product';
      }

        createPage({
            component: templateToUse,
            path: `/${pathName}/${edge.node.fields.slug}`,
            context: {
                slug: edge.node.fields.slug
            }
        })
    })
}

// module.exports.createPages = async ({ graphql, actions }) => {
//   const { createPage } = actions
//   const blogTemplate = path.resolve('./src/templates/blog.js')
//   const res = await graphql(`
//       query {
//           allMarkdownRemark(filter: {frontmatter: {blog: {eq: true}}}) {
//             edges {
//               node {
//                 fields {
//                   slug
//                 }
//               }
//             }
//           }
//         }
//   `)

//   res.data.allMarkdownRemark.edges.forEach((edge) => {
//       createPage({
//           component: blogTemplate,
//           path: `/blog/${edge.node.fields.slug}`,
//           context: {
//               slug: edge.node.fields.slug
//           }
//       })
//   })
// }