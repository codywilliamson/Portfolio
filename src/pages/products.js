import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import ProductGallery from '../components/ProductGallery'
import productsHeader from '../assets/headers/productsHeader.png'
import productsMidPage from '../assets/headers/productsMidPageHeader.png'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg' 
import FAQs from '../components/FAQs'

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
                colorWiggleHR={orangeWiggleHR}
                whichProduct="Leggings"
                showHR="none"/>

            <ProductGallery 
                title="Extras"
                hrClass="basicHR"
                whichProduct="Extras"
                showHR="block"/>

            <PageHeader 
                title="designed to work. better" 
                headerStyle="pageTitle" 
                bgImage={productsMidPage}
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

            <FAQs />

        </Layout>
    )
}

export default ProductsPage