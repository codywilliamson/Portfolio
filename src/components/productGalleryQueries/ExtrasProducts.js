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
    query {
        allMarkdownRemark(filter: {frontmatter: {category: {eq:"Extras"} }}) {
          edges {
            node {
              id
              frontmatter {
                title
                category
                productImage {
                  childImageSharp {
                    fixed(width: 225, height: 225) {
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
            <Img
              className="productImage"
              fixed={edge.node.frontmatter.productImage.childImageSharp.fixed}
              key={edge.node.id}
            />
            <p className="productImageCaption">
              {edge.node.frontmatter.title}
            </p>
          </li>
        )
      })}
    </ul>
  )
}

export default ExtrasProducts