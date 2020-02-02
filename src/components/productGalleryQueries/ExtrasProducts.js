import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ExtrasProducts = () => {
  // graphql query for products with category "Extras"
  // graphql query doesn't support variables in useStaticQuery
  // this is why each possible return is its own component
  // pageQuery support variables, however React Components can't
  // receive arrays as props (to show a list of products in this case)
  // im sure there is a better way, but this is my first run with React
  // and i've only got a month to push this site out so will revisit.
  const images = useStaticQuery(graphql`
  query ExtraProducts {
    allMarkdownRemark(filter: {frontmatter: {blog: {eq: false}, category: {eq: "Extras"}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            productImageTitle
            productImage {
              childImageSharp {
                fixed {
                    ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
  
  `)

  return (
    <ul className="productImagesList">
      {// map through first 5 items of returned data
      images.allMarkdownRemark.edges.slice(0, 5).map(edge => {
        return (
          // important to give both the li AND the <Img> component a unique key
          <li key={edge.node.id} className="productImageItem">
            <Link to={`/products/${edge.node.fields.slug}`}>
              <Img
                className="productImage"
                fixed={edge.node.frontmatter.productImage.childImageSharp.fluid}
                key={edge.node.id}
              />
              <div className="productImgOverlay flex flexHardCenter">
              {edge.node.frontmatter.title}
              </div>
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default ExtrasProducts