import React from "react"
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const HomeProducts = () => {
  const images = useStaticQuery(graphql`
    query {
        allMarkdownRemark(filter: {frontmatter: {blog: {eq: false}}}) {
          edges {
            node {
              id
              frontmatter {
                title
                productImage {
                  childImageSharp {
                    fixed(width: 225, height: 225) {
                      ...GatsbyImageSharpFixed
                    }
                  }
                }
              }
              fields {
                slug
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
                fixed={edge.node.frontmatter.productImage.childImageSharp.fixed}
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

export default HomeProducts