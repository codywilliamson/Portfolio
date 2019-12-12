import React from 'react'
import HomeProducts from './productGalleryQueries/HomeProducts'
import LeggingsProducts from './productGalleryQueries/LeggingsProducts'
import ExtrasProducts from './productGalleryQueries/ExtrasProducts'


const ProductGallery = (props) => {
    let productToShow;

    if (props.whichProduct === 'Leggings') {
        productToShow = <LeggingsProducts />
    } else if (props.whichProduct === 'Extras') {
        productToShow = <ExtrasProducts />
    } else {
        productToShow = <HomeProducts />
    }

    return (
        <section className="productGalleryContainer flexHardCenter">
            <h3 className="textSectionTitle minionPro">
                {props.title}
            </h3>

            <hr className="basicHR" style={{display: props.showHR}} />

            <img src={props.colorWiggleHR} alt="" className="wiggleHR" style={{display: props.showWiggleHR}}/>

            <div className="productImagesContainer">

                {productToShow}

            </div>

        </section>
    )
}

export default ProductGallery