import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import HomeHeader from '../components/HomeHeader/HomeHeader'
import TextSection from '../components/TextSection'
import ProductGallery from '../components/ProductGallery'
import LatestNews from '../components/LatestNews'
import QuotesSlider from '../components/_QuotesSlider'
import homeHeader from '../assets/headers/homeHeader.png'
import whiteWiggleHR from '../assets/wiggleHR.svg'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'

const Home = () => {
    return (
        <Layout>

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
                title="Our Products"
                showHR="none"
                
                />

            <TextSection
                title="Far Infrared Benefits"
                showHR="none"
                colorWiggleHR={whiteWiggleHR}
                showWiggleHR="block"
                message={
                    <span>
                        <span className="textSectionEm">Far Infrared Rays (FIR)</span> heat your 
                        muscles directly without the need to heat the air around you. <span className="textSectionEm">FIR</span> 
                        enhances your energy purely by increased blood flow to the derma layer of your body. 
                        This is why we use <span className="textSectionEm">FIR</span> technology, as it allows
                         us to create Yooneek and Innovative products that not only help you perform, but 
                         take care of you at the same time...
                    </span>
                }
                bgClass="orangeBg"
                display="block"
            />

            <QuotesSlider
            />

            <LatestNews />
                
            
            

        </Layout>
    )
}

export default Home