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
                        What makes us YooNeek? Too many products are designed to simply
                         compete in the market, but ours are designed for you. We're not stuck in the 
                         rat race of trying to outdo the other guys. When you do that, you forget why 
                         started in the first place. We know exactly why we're here. You want products 
                         uniquely designed and made for you. With YooNeek products, you can spend less 
                         time worrying about your gear performing, and spend more time being you.
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
                        You know what you want. Not the gimmicks. You want something 
                        that works, that lives up to its promise. You want a product 
                        that's designed for you, not designed merely to compete against 
                        other products. Because we all know, what makes something truly 
                        unique is not just the difference between it and something else. 
                        What makes it unique is you.
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