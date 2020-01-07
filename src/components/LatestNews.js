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
            
                {
                    // blogPosts.allMarkDownRemark.edges.slice(0, 3).map(edge => {
                    //     return (
                    //         <div className="latestNewsImgTextContainer minionPro">
                    //             <div className="latestNewsImgContainer fadeIn">
                    //                 <Link to={`/blog/${edge.node.fields.slug}`}>
                    //                     <img src={edge.node.frontmatter.blogFeaturedImageHomepage} alt="" className="latestNewsImg"/>
                    //                 </Link>
                    //             </div>

                    //             <div className="latestNewsTextContainer">
                    //                 <Link to={`/blog/${edge.node.fields.slug}`}>
                    //                     <h3 className="latestNewsTitle fadeIn">
                    //                         {edge.node.frontmatter.title}
                    //                     </h3>
                    //                 </Link>

                    //                 <p className="latestNewsText fadeIn">
                    //                 {edge.node.frontmatter.excerpt}
                    //                 </p>
                    //             </div>
                    //         </div>
                    //     )
                    // })
                }
        </section>
    )
}

export default LatestNews