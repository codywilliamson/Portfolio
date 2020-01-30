import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'
import infraredHeader from '../assets/headers/infraredHeader.png'
// import infraredVideo from '../assets/headers/infraredVideo.png'
import InfraredBenefits from '../components/InfraredBenefits'


const Infrared = () => {
    return (
        <Layout>

            <PageHeader 
                title="far infrared"
                headerStyle="pageTitle"
                bgImage={infraredHeader}
            />

            {/* <section className="videoSection">
                <a href="#" target="_blank" className="youTubeVideoLink">
                    <img src={infraredVideo} alt="" className="videoThumbnail"/>
                </a>
            </section> */}

            <TextSection 
                title="About Far Infrared"
                showHR="none"
                colorWiggleHR={orangeWiggleHR}
                showWiggleHR="block"
                message={
                    <span>
                        <span className="textSectionEm">Far-infrared</span> uses <span className="textSectionEm">far-infrared</span> radiation,
                        which refers to a subdivision of the electromagnetic spectrum. Infrared 
                        is a type of light that humans can't see, but can feel as heat. "Far" describes
                        where the wavelengths fall on the light spectrum.
                        <br/>
                        <br/>
                        <span className="textSectionEm">Far Infrared Rays(FIR)</span> heat your muscles directly
                         without the need to heat the air around you. <span className="textSectionEm">FIR</span> 
                         enhances your energy purely by increased blood flow to the derma layer of your body. 
                         This is why we use <span className="textSectionEm">FIR</span> technology, as it allows us to create Yooneek and Innovative
                          products that not only help you perform, but take care of you at the same time.
                    </span>
                }
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