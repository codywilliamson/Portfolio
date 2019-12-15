import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'
import infraredHeader from '../assets/headers/infraredHeader.png'
import infraredVideo from '../assets/headers/infraredVideo.png'
import InfraredBenefits from '../components/InfraredBenefits'


const Infrared = () => {
    return (
        <Layout>

            <PageHeader 
                title="far infrared"
                headerStyle="pageTitle"
                bgImage={infraredHeader}
            />

            {/* to be replaced with video... */}
            <section className="videoSection">
                <img src={infraredVideo} alt="" className="videoThumbnail"/>
            </section>

            <TextSection 
                title="About Far Infrared"
                showHR="none"
                colorWiggleHR={orangeWiggleHR}
                showWiggleHR="block"
                message="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum nisi est, aperiam tempore distinctio laboriosam ut quas dolorem veritatis architecto, animi dolore libero hic, quia quasi quibusdam amet illo aut."
                bgClass="whiteHexBg"
            />

            <InfraredBenefits title="FIR-SKIN T &#43;" />

            <TextSection 
                title="Technology &amp; How Far Infrared Works"
                showHR="block"
                showWiggleHR="none"
                message="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum atque pariatur exercitationem voluptas nulla. Exercitationem quidem architecto harum vitae impedit dolores enim. Debitis aperiam molestias consectetur suscipit aliquam blanditiis tenetur deleniti numquam doloremque! Quod cupiditate rerum illo rem assumenda vero dignissimos voluptatibus itaque ex dolores nulla, nihil deleniti quae atque."
                bgClass="whiteHexBg"
            />


        </Layout>
    )
}

export default Infrared