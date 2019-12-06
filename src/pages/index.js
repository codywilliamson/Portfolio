import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import ProductGallery from '../components/ProductGallery'
import LatestNews from '../components/LatestNews'
import homeHeader from '../assets/headers/homeHeader.png'

const Home = () => {
    return (
        <Layout>

            <PageHeader 
                title="yooneek" 
                headerStyle="mainTitle" 
                bgImage={homeHeader}
            />

            <TextSection 
                title="The Yooneek Experience" 
                hrClass="basicHR"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum expedita aut. Voluptatem, nesciunt? Illo fugit pariatur commodi? Sapiente, quasi."
                bgClass="bgWhite"
                display="none"
                />

            <ProductGallery title="Featured Products" hrClass="basicHR"/>

            <TextSection
                title="Far Infrared Benefits"
                hrClass="wiggleHR"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum expedita aut. Voluptatem, nesciunt? Illo fugit pariatur commodi? Sapiente, quasi."
                bgClass="bgOrange"
                display="block"
            />

            <LatestNews />
                
            
            

        </Layout>
    )
}

export default Home