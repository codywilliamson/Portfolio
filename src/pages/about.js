import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'
import aboutHeader from '../assets/headers/aboutHeader.png'
import aboutSecondHeader from '../assets/headers/aboutSecondHeader.png'
import aboutThirdHeader from '../assets/headers/aboutThirdHeader.png'

const About = () => {
    return (
        
        <Layout>

            <PageHeader 
                title="about"
                headerStyle="pageTitle"
                bgImage={aboutHeader}
            />

            <TextSection 
                title="Our Brand"
                showHR="none"
                colorWiggleHR={orangeWiggleHR}
                showWiggleHR="block"
                message={
                    <span>
                        To us, <span className="yooneekSpan">YooNeek</span> is more than just a catchy title to identify our brand. 
                        Rather, it's a way of highlighting our products' abilities to perform and 
                        protect our customers through innovative technologies. We aren't caught up 
                        with trying to compete with others in the market, because we know what we deliver 
                        is something others aren't even doing. With <span className="yooneekSpan">YooNeek</span>, you can feel confident in your 
                        gear performing at the high levels you strive for every day &mdash; <em>in YOUR own <span className="yooneekSpan">YooNeek</span> way.</em>
                    </span>
                }
                bgClass="whiteBg"
            />

            <PageHeader 
                id="aboutSecondHeader"
                title="yooneek"
                headerStyle="pageTitle"
                bgImage={aboutSecondHeader}
            />
        

            <div className="whiteHexBg">

            <TextSection 
                title="Our Philosophy"
                showHR="block"
                message={
                    <span>
                        We know what you want &mdash; equipment that works and lives up 
                        to its promises. Products designed for you and designed to help 
                        you achieve your goals. It's our job to deliver those products so 
                        that you can focus on delivering results. We don't limit ourselves 
                        to the norms of what has already been done, and becuase of this, you 
                        won't be limited either.
                    </span>
                }
            />

            <PageHeader 
                id="aboutSecondHeader"
                title="warmth without the weight"
                headerStyle="pageTitle"
                bgImage={aboutThirdHeader}
            />

            </div>

        </Layout>

    )
}

export default About