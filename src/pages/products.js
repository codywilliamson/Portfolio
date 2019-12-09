import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import ProductGallery from '../components/ProductGallery'
import LatestNews from '../components/LatestNews'
import productsHeader from '../assets/headers/productsHeader.png'
import whiteWiggleHR from '../assets/wiggleHR.svg'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'

const ProductsPage = () => {
    return (
        <Layout>

            <PageHeader 
                title="products" 
                headerStyle="pageTitle" 
                bgImage={productsHeader}
            />

            <ProductGallery 
                title="Leggings"
                hrClass="basicHR"
                showHR="none"/>

            <ProductGallery 
                title="Leggings"
                hrClass="basicHR"
                showHR="none"/>

            <PageHeader 
                title="products" 
                headerStyle="pageTitle" 
                bgImage={productsHeader}
            />

            <TextSection 
                title="Product Care" 
                showHR="none"
                colorWiggleHR={orangeWiggleHR}
                showWiggleHR="block"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum expedita aut. Voluptatem, nesciunt? Illo fugit pariatur commodi? Sapiente, quasi. Illo fugit pariatur commodi? Sapiente, quasi. Illo fugit pariatur commodi? Sapiente, quasi. Illo fugit pariatur commodi? Sapiente, quasi."
                bgClass="whiteBg"
                display="none"
                />

        </Layout>
    )
}

export default ProductsPage