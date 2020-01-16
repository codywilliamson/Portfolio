import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import BlogHeader from '../assets/headers/blogHeader.png'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg' 
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'

const Blogs = () => {
    const blogPosts = useStaticQuery(graphql`
    {
        allMarkdownRemark(filter: {frontmatter: {blog: {eq: true}}}) {
          edges {
            node {
              frontmatter {
                excerpt
                date
                title
                blogPostFeaturedImage {
                  childImageSharp {
                    fluid {
                        ...GatsbyImageSharpFluid
                    }
                  }
                }
              }
              id
              fields {
                  slug
              }
            }
          }
        }
      }
      
    `)

    return (
        <Layout>

            <PageHeader 
                title="blog" 
                headerStyle="pageTitle" 
                bgImage={BlogHeader}
            />

           <div className="blogPage whiteHexBg">
           <TextSection 
                title="Yooneek's Latest Blogs" 
                showHR="none"
                colorWiggleHR={orangeWiggleHR}
                showWiggleHR="block"
                message="Come back here to keep up with Yooneek and what we're doing!"
                display="none"
                />


            <div className="blogListContainer flex flexColumn flexHardCenter">

                {
                blogPosts.allMarkdownRemark.edges.map((edge) => {
                    return (
                        <div className="latestNewsImgTextContainer" key={edge.node.id}>

                            <div className="latestNewsImgContainer">

                                <Link to={`/blog/${edge.node.fields.slug}`} >

                                    <Img
                                        className="latestNewsImg"
                                        fluid={edge.node.frontmatter.blogPostFeaturedImage.childImageSharp.fluid}
                                        key={edge.node.id}
                                    />

                                </Link>

                            </div>

                            <div className="latestNewsTextContainer">
                                <Link to={`/blog/${edge.node.fields.slug}`}>
                                    <h3 className="latestNewsTitle fadeIn">
                                        {edge.node.frontmatter.title}
                                        <br/>
                                        <span className="latestNewsBlogDate">
                                            {edge.node.frontmatter.date}
                                        </span>
                                    </h3>
                                </Link>

                                <p className="latestNewsText fadeIn">
                                {edge.node.frontmatter.excerpt}
                                </p>
                            </div>

                            

                        </div>
                    )
                })
                }

            </div>

           </div>

        </Layout>
    )
}

export default Blogs