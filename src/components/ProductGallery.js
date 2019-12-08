import React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import Img from 'gatsby-image'


const ProductGallery = (props) => {
    // use graphql to retrieve all images in src/products
    // use gatsby-transformer-sharp to dynamically resize images
    // 
    const images = useStaticQuery(graphql`
        query {
            allImageSharp {
                edges {
                    node {
                        fixed(width: 225, height: 225) {
                            width
                            height
                            src
                            tracedSVG
                          }
                    }
                }
            }
        }
    `)

    return (
        <section className="productGalleryContainer flexHardCenter">
            <h3 className="textSectionTitle minionPro">
                {props.title}
            </h3>

            <hr className={props.hrClass} style={{display: props.showHR }}/>

            <div className="productImagesContainer">

                <ul className="productImagesList">
                    {// map through first 5 items of returned data
                    images.allImageSharp.edges.slice(0, 5).map((edge) => {
                        return (
                            <li className="productImageItem">
                                <Img
                                    className="productImage"
                                    fixed={edge.node.fixed}
                                    alt="YOONEEK latest product images"
                                 />
                            </li>
                        )
                    })}

                    {/* <li className="productImageItem">
                        <img src="https://via.placeholder.com/225" alt="" className="productImage"/>
                    </li>
                    <li className="productImageItem">
                        <img src="https://via.placeholder.com/225" alt="" className="productImage"/>
                    </li>
                    <li className="productImageItem">
                        <img src="https://via.placeholder.com/225" alt="" className="productImage"/>
                    </li>
                    <li className="productImageItem">
                        <img src="https://via.placeholder.com/225" alt="" className="productImage"/>
                    </li>
                    <li className="productImageItem">
                        <img src="https://via.placeholder.com/225" alt="" className="productImage"/>
                    </li> */}
                </ul>

            </div>

        </section>
    )
}

export default ProductGallery