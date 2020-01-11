import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
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
                blog
            }
            html
            id
            timeToRead
            rawMarkdownBody
            wordCount {
                words
            }
        }
    }
`

const BlogPost = (props) => {
    return (
        <Layout>
            
            <div className="blogPostContainer whiteHexBg flex flexColumn">

            <Link to="/" className="backToLink">
                        &#10229; back to yooneek
            </Link>

                <div className="blogPostFeaturedImageContainer ">

                    <Img 
                        className="blogPostFeaturedImage"
                        fluid={props.data.markdownRemark.frontmatter.blogPostFeaturedImage.childImageSharp.fluid}
                        key={props.data.markdownRemark.id}
                    />

                </div>

                <div className="blogPostInformation flex flexColumn">

                    <h2 className="latestNewsTitle">
                        {props.data.markdownRemark.frontmatter.title}
                    </h2>

                    <p className="blogPostPublishedDate">
                        {props.data.markdownRemark.frontmatter.date}
                    </p>

                    <div className="blogPostMeta flex">
                        <p className="blogPostTimeToRead">
                            {props.data.markdownRemark.timeToRead}
                        </p>
                        <p className="blogPostTimeToRead">
                            {props.data.markdownRemark.wordCount.words}
                        </p>
                    </div>

                </div>

                <div className="blogPostText"
                        dangerouslySetInnerHTML={{
                            __html: props.data.markdownRemark.html
                        }}
                />


            </div>
            
        </Layout>
    )
}

export default BlogPost