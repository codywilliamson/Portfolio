import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'

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
            blogFeaturedImageHomepage
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
                      <img src={blogPosts.allMarkdownRemark.edges[0].node.frontmatter.blogFeaturedImageHomepage} alt="" className="latestNewsImg"/>
                  </Link>
              </div>

              <div className="latestNewsTextContainer">
                  <Link to={`/blog/${blogPosts.allMarkdownRemark.edges[0].node.fields.slug}`}>
                      <h3 className="latestNewsTitle fadeIn">
                          {blogPosts.allMarkdownRemark.edges[0].node.frontmatter.title}
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