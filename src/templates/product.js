import React from 'react'
import Layout from '../components/Layout'
import { graphql, Link } from 'gatsby'
import Img from 'gatsby-image'
import sizingChart from '../assets/glovesSizingCharts.svg'
import coldWater from '../assets/careIcons/coldWaterWash.svg'
import doNotBleach from '../assets/careIcons/doNotBleach.svg'
import doNotDryClean from '../assets/careIcons/doNotDryClean.svg'
import doNotIron from '../assets/careIcons/doNotIron.svg'
import doNotTumbleDry from '../assets/careIcons/doNotTumbleDry.svg'
import handWash from '../assets/careIcons/handWash.svg'

export const query = graphql`
    query($slug: String!) {
        markdownRemark(fields: { slug: { eq: $slug } }) {
            frontmatter {
                title
                category
                productImage {
                    childImageSharp {
                      fluid(maxWidth: 500, maxHeight: 500, fit: FILL) {
                        ...GatsbyImageSharpFluid
                      }
                    }
                  }
                amazonLink
                Sizes
                color
                price
                showSizingChart
                productImageTitle
                reviews {
                    childMarkdownRemark {
                      html
                    }
                  }
                bulletPoints {
                    childMarkdownRemark {
                      html
                    }
                  }
            }
            html
            id
        }
    }
`

const ProductPage = (props) => {
    let iconsArr = [handWash, coldWater, doNotBleach, doNotDryClean, doNotIron, doNotTumbleDry];

    let showChart;

    if (props.data.markdownRemark.frontmatter.showSizingChart === true) {
        showChart = 'block';
    } else {
        showChart = 'none';
    }

    return (
        <Layout>
            
            <div className="singleProductPageContent flexHardCenter">

                <Link to="/products" className="backToLink">
                        &#10229; back to products
                </Link>

            <div className="singleProductItemContainer"> 

                <div className="singleProductImgContainer flex flexColumn flexHardCenter">
                    <Img
                        className="singleProductImage"
                        fluid={props.data.markdownRemark.frontmatter.productImage.childImageSharp.fluid}
                        key={props.data.markdownRemark.id}
                    />
                    <div className="productImageInfo flex flexColumn">
                        <h3 className="productImageTitle textSectionEm">
                            {props.data.markdownRemark.frontmatter.productImageTitle}
                        </h3>
                        <div className="productImageDescription"
                            dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
                        />
                    </div>
                </div>

                <div className="singleProductInfoContainer flex flexColumn flexHardCenter">
                    <div className="pageTitleHR">
                        <h2 className="singleProductName">
                            {props.data.markdownRemark.frontmatter.title}
                        </h2>

                        <hr className="basicHR productHr"/>
                    </div>

                    <div className="productInfo">
                        <p className="productSpecs">
                            COLOR: <b>{props.data.markdownRemark.frontmatter.color}</b>
                            <br/>
                            SIZES: <b>{props.data.markdownRemark.frontmatter.Sizes}</b>
                        </p>

                        <ul className="productPoints" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.frontmatter.bulletPoints.childMarkdownRemark.html }} /> 

                        <img src={sizingChart} alt="Chart showcasing sizes of glovesSizingChart" className="sizeChart" style={{display: showChart}}/>
                        
                        <h3 className="productCareTitle">
                            EASY CARE INSTRUCTIONS:
                        </h3>

                        <div className="productCareIcons flex">
                            {
                                iconsArr.map((icon, i) => (
                                    <img key={i} src={icon} alt="" className="productCareIcon"/>
                                ))
                            }
                        </div>

                    </div>
                    
                    <div className="buyNowContainer flex flexColumn">
                        <p className="productPrize">
                            PRICE: {props.data.markdownRemark.frontmatter.price}
                        </p>
                        <a href={props.data.markdownRemark.frontmatter.amazonLink} className="submit buyNow" target="_blank" rel="noopener noreferrer">Buy Now On Amazon</a>
                    </div> 
                </div>

            </div>


            <div className="productReviewsContainer">
                <h3 className="textSectionTitle">
                    Product Reviews
                </h3>

                <hr className="basicHR fullWidthHR"/>

                <div className="" dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.frontmatter.reviews.childMarkdownRemark.html }}></div>
            </div>

            </div>
            
        </Layout>
    )
}

export default ProductPage