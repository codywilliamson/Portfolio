import React from 'react'
import { Link } from 'gatsby'

const ProductGallery = (props) => {
    return (
        <section className="productGalleryContainer">
            <h3 className="textSectionTitle">
                {props.title}
            </h3>

            <hr className={props.hrClass}/>

            <div className="productImagesContainer">

                <ul className="productImagesList">
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
                    </li>
                    <li className="productImageItem">
                        <img src="https://via.placeholder.com/225" alt="" className="productImage"/>
                    </li>
                </ul>

            </div>

        </section>
    )
}

export default ProductGallery