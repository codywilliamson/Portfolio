import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                category
                description
                benefits
                amazonLink
                productImage {
                    childImageSharp {
                      fluid(maxWidth: 425, maxHeight: 550, fit: FILL) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
            }
            html
            id
        }
    }
`

const ProductPage = (props) => {
    return (
        <Layout>
            
            <div className="singleProductPageContent flexHardCenter">

                <Link to="/products" className="backToLink">
                        &#10229; back to products
                </Link>

            <div className="singleProductItemContainer">

                <div className="singleProductImgContainer flexHardCenter">
                <Img
                    className="singleProductImage"
                    fluid={props.data.markdownRemark.frontmatter.productImage.childImageSharp.fluid}
                    key={props.data.markdownRemark.id}
                />
                </div>

                <div className="singleProductInfoContainer">
                    <div className="pageTitleHR">
                        <h2 className="singleProductName">
                            {props.data.markdownRemark.frontmatter.title}
                        </h2>

                        <hr className="basicHR"/>
                    </div>

                    {/* amazon stars & link */}

                    <div className="productInfoPgs">
                        <div className="paragraphContainer">
                            <span className="productInfoHeading">
                                Description /
                            </span>
                            <p className="productDescription">
                                {props.data.markdownRemark.frontmatter.description}
                            </p>
                        </div>

                        <div className="paragraphContainer">
                            <span className="productInfoHeading">
                                    Benefits /
                            </span>
                            <p className="productDescription">
                                {props.data.markdownRemark.frontmatter.benefits}
                            </p>
                        </div>
                    </div>

                    <a href="#" className="submit buyNow">Buy Now On Amazon</a>
                </div>

            </div>


            <div className="productReviewsContainer">
                <h3 className="textSectionTitle">
                    Product Reviews
                </h3>

                <hr className="basicHR fullWidthHR"/>

                
            </div>
            
            </div>
            
        </Layout>
    )
}

export default ProductPage