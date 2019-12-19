import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'
import aboutHeader from '../assets/headers/aboutHeader.png'
import aboutPageImg from '../assets/aboutPageImg.png'
import aboutSecondHeader from '../assets/headers/aboutSecondHeader.png'

const About = () => {
    return (
        
        <Layout>

            <PageHeader 
                title="about"
                headerStyle="pageTitle"
                bgImage={aboutHeader}
            />

            <TextSection 
                title="Brand Story"
                showHR="none"
                colorWiggleHR={orangeWiggleHR}
                showWiggleHR="block"
                textSectionImg={aboutPageImg}
                showImg="block"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, odio a earum cum recusandae ipsam non, perferendis aliquid dolores iure dignissimos omnis expedita optio libero excepturi architecto tempora quod cumque magnam exercitationem et autem. Obcaecati impedit nemo necessitatibus, debitis hic fugiat recusandae magnam. Laboriosam enim, quia aliquid dolores obcaecati natus maiores, deserunt consequatur illo provident aliquam aperiam. Nisi labore excepturi accusamus esse. Rerum soluta quis porro asperiores delectus sit incidunt."
                bgClass="whiteBg"
            />

            <PageHeader 
                id="aboutSecondHeader"
                title="warmth without the weight"
                headerStyle="pageTitle"
                bgImage={aboutSecondHeader}
            />
        

            <div className="whiteHexBg">

            <TextSection 
                title="Philosophy"
                showHR="block"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, odio a earum cum recusandae ipsam non, perferendis aliquid dolores iure dignissimos omnis expedita optio libero excepturi architecto tempora quod cumque magnam exercitationem et autem. Obcaecati impedit nemo necessitatibus, debitis hic fugiat recusandae magnam. Laboriosam enim, quia aliquid dolores obcaecati natus maiores, deserunt consequatur illo provident aliquam aperiam. Nisi labore excepturi accusamus esse. Rerum soluta quis porro asperiores delectus sit incidunt."
            />

            <TextSection 
                title="Company Info"
                showHR="block"
                message="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore, odio a earum cum recusandae ipsam non, perferendis aliquid dolores iure dignissimos omnis expedita optio libero excepturi architecto tempora quod cumque magnam exercitationem et autem. Obcaecati impedit nemo necessitatibus, debitis hic fugiat recusandae magnam. Laboriosam enim, quia aliquid dolores obcaecati natus maiores, deserunt consequatur illo provident uta quis porro asperiores delectus sit incidunt."
            />

            </div>

        </Layout>

    )
}

export default About