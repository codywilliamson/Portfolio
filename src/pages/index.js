import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import TextSection from '../components/TextSection'
import ProductGallery from '../components/ProductGallery'
import LatestNews from '../components/LatestNews'
import homeHeader from '../assets/headers/homeHeader.png'
import whiteWiggleHR from '../assets/wiggleHR.svg'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'

const Home = () => {
    return (
        <Layout>

            {/* <PageHeader 
                showTitle="none"
                showLogo="block"
                headerStyle="mainTitle"
                bgImage={homeHeader}
                true
            /> */}
            <HomeHeader />

            <TextSection 
                title="The Yooneek Experience" 
                showHR="block"
                showWiggleHR="none"
                message={
                    /* to pass HTML as prop, use JSX */
                    <span>
                        Why "<b>Yooneek</b>"? It must be said that there's unique stuff all 
                        over the market place. From the traditional retailers to the startups, 
                        everyone has an angle on "<b>Yooneek</b>". But are you really looking 
                        for someone else's take on unique? Unique doesn't just have to refer to 
                        style, or price, or modern or antique &mdash; Yooneek just means "<b>made for you</b>".
                    </span>
                }
                bgClass="whiteBg"
                display="none"
                />

            <ProductGallery 
                title="Featured Products"
                showHR="none"
                
                />

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