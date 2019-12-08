import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import ProductGallery from '../components/ProductGallery'
import LatestNews from '../components/LatestNews'
import homeHeader from '../assets/headers/homeHeader.png'
import whiteWiggleHR from '../assets/wiggleHR.svg'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'

const Home = () => {
    return (
        <Layout>

            <PageHeader 
                title="yooneek" 
                headerStyle="mainTitle" 
                bgImage={homeHeader}
                true
            />

            <TextSection 
                title="The Yooneek Experience" 
                showHR="block"
                showWiggleHR="none"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum expedita aut. Voluptatem, nesciunt? Illo fugit pariatur commodi? Sapiente, quasi. Illo fugit pariatur commodi? Sapiente, quasi. Illo fugit pariatur commodi? Sapiente, quasi. Illo fugit pariatur commodi? Sapiente, quasi."
                bgClass="whiteBg"
                display="none"
                />

            <ProductGallery 
                title="Featured Products"
                hrClass="basicHR"
                showHR="none"/>

            <TextSection
                title="Far Infrared Benefits"
                showHR="none"
                colorWiggleHR={whiteWiggleHR}
                showWiggleHR="block"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum expedita aut. Voluptatem, nesciunt? Illo fugit pariatur commodi? Sapiente, quasi."
                bgClass="orangeBg"
                display="block"
            />

            <TextSection
                title="What Customers Are Saying About Yooneek"
                showHR="none"
                colorWiggleHR={orangeWiggleHR}
                showWiggleHR="block"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel rerum expedita aut. Voluptatem, nesciunt? Illo fugit pariatur commodi? Sapiente, quasi."
                bgClass="whiteBg"
                display="block"
                showBQs="block"
            />

            <LatestNews />
                
            
            

        </Layout>
    )
}

export default Home