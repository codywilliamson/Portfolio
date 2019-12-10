import React from 'react'
import HomeProducts from './HomeProducts'


const ProductGallery = (props) => {

    return (
        <section className="productGalleryContainer flexHardCenter">
            <h3 className="textSectionTitle minionPro">
                {props.title}
            </h3>

            <hr className="basicHR" style={{display: props.showHR}} />

            <img src={props.colorWiggleHR} alt="" className="wiggleHR" style={{display: props.showWiggleHR}}/>

            <div className="productImagesContainer">

                <HomeProducts />

            </div>

        </section>
    )
}

export default ProductGallery