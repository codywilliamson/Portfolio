import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const ExtrasProducts = () => {
  // use graphql to retrieve all images in src/products
  // use gatsby-transformer-sharp to dynamically resize images
  // specify products/ dir to only retrieve images from there
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