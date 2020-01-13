import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const LatestNews = () => {
  const blogPosts = useStaticQuery(graphql`
  query {
    allMarkdownRemark(filter: {frontmatter: {blog: {eq: true}}}) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date
            blogPostFeaturedImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            excerpt
          }
        }
      }
    }
  }
    
`)

    return (
        <section className="latestNewsContainer flexHardCenter">
            <h3 className="textSectionTitle minionPro fadeIn">
                Latest News
            </h3>
            
            
          <div className="latestNewsImgTextContainer minionPro">
              <div className="latestNewsImgContainer fadeIn">
                  <Link to={`/blog/${blogPosts.allMarkdownRemark.edges[0].node.fields.slug}`}>
                  <Img
              className="latestNewsImg"
              fluid={
                blogPosts.allMarkdownRemark.edges[0].node.frontmatter.blogPostFeaturedImage
                  .childImageSharp.fluid
              }
            />
                  </Link>
              </div>

              <div className="latestNewsTextContainer">
                  <Link to={`/blog/${blogPosts.allMarkdownRemark.edges[0].node.fields.slug}`}>
                      <h3 className="latestNewsTitle fadeIn">
                          {blogPosts.allMarkdownRemark.edges[0].node.frontmatter.title}
                          <br/>
                          <span className="latestNewsBlogDate">
                            {blogPosts.allMarkdownRemark.edges[0].node.frontmatter.date}
                          </span>
                      </h3>
                  </Link>

                  <p className="latestNewsText fadeIn">
                  {blogPosts.allMarkdownRemark.edges[0].node.frontmatter.excerpt}
                  </p>
              </div>
          </div>
                        
                    
              
        </section>
    )
}

export default LatestNews