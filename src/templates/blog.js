import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

// export const query = graphql`
//     query($slug: String!) {
//         markdownRemark(fields: { slug: { eq: $slug } }) {
//             frontmatter {
//                 title
//                 category
//                 description
//                 benefits
//                 amazonLink
//                 productImage {
//                     childImageSharp {
//                       fluid(maxWidth: 425, maxHeight: 550, fit: FILL) {
//                         ...GatsbyImageSharpFluid
//                       }
//                     }
//                   }
//             }
//             html
//             id
//         }
//     }
// `

const BlogPost = (props) => {
    return (
        <Layout>
            
            test
            
        </Layout>
    )
}

export default BlogPost