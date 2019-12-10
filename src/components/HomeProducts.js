import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HomeProducts = () => {
  // use graphql to retrieve all images in src/products
  // use gatsby-transformer-sharp to dynamically resize images
  // specify products/ dir to only retrieve images from there
  const images = useStaticQuery(graphql`
    query {
      allFile(filter: { sourceInstanceName: { eq: "products" } }) {
        edges {
          node {
            id
            childImageSharp {
              fixed(width: 225, height: 225) {
                ...GatsbyImageSharpFixed
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
      images.allFile.edges.slice(0, 5).map(edge => {
        return (
          // important to give both the li AND the <Img> component a unique key
          <li key={edge.node.id} className="productImageItem">
            <Img
              className="productImage"
              fixed={edge.node.childImageSharp.fixed}
              key={edge.node.id}
            />
          </li>
        )
      })}
    </ul>
  )
}

export default HomeProducts