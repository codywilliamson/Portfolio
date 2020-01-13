import React from "react"
import Layout from "../components/Layout"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

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
      rawMarkdownBody
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <div className="blogPostContainer flex flexColumn">
        <div className="blogPostHeaderContainer orangeBg">
          <Link to="/" className="backToLink">
            &#10229; back to yooneek
          </Link>

          <div className="blogPostFeaturedImageContainer flexHardCenter">
            <Img
              className="blogPostFeaturedImage"
              fluid={
                props.data.markdownRemark.frontmatter.blogPostFeaturedImage
                  .childImageSharp.fluid
              }
              key={props.data.markdownRemark.id}
            />
          </div>

          <div className="blogPostHeaderInfo flexHardCenter flexColumn">
            <h2 className="latestNewsTitle">
              {props.data.markdownRemark.frontmatter.title}
            </h2>

            <p className="blogPostPublishedDate">
              {props.data.markdownRemark.frontmatter.date}
            </p>
          </div>
        </div>

        <div className="blogPostTextContainer flexHardCenter whiteBg">


            <div
            className="blogPostText"
            dangerouslySetInnerHTML={{
                __html: props.data.markdownRemark.html,
            }}
            />


        </div>

      </div>
    </Layout>
  )
}

export default BlogPost
