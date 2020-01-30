import React from "react"
import Layout from '../components/Layout'
import PageHeader from '../components/PageHeader'
import TextSection from '../components/TextSection'
import orangeWiggleHR from '../assets/orangeWiggleHR.svg'
import infraredHeader from '../assets/headers/infraredFirstHeader.png'
import secondHeader from '../assets/headers/infraredHeader.png'
// import infraredVideo from '../assets/headers/infraredVideo.png'
import InfraredBenefits from '../components/InfraredBenefits'
import spectrumChart from '../assets/infraredChart.png'
import lightChart from '../assets/infraredSecondChart.png'


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

            <PageHeader 
                title="FIR-SKIN T&#43;"
                headerStyle="pageTitle"
                bgImage={secondHeader}
            />

            <InfraredBenefits title="FIR-SKIN T &#43;" />

            <TextSection 
                title="Far Infrared Spectrum"
                showHR="block"
                showWiggleHR="none"
                message={
                    <span>
                        <span className="textSectionEm">Far Infrared</span> is closer to the microwave 
                        region of the electromagnetic spectrum. <span className="textSectionEm">Far Infrared</span> 
                        waves are thermal. In other words, we experience this type of infrared radiation every day 
                        in the form of heat! The heat that we feel from sunlight, a fire, a radiator or a warm 
                        sidewalk is infrared. The temperature-sensitive nerve endings in our skin can detect 
                        the difference between inside body temperature and outside skin temperature.
                    </span>
                }
                bgClass="whiteHexBg"
            />

            <div className="chartsContainer flex flexHardCenter flexColumn">
                <img src={spectrumChart} alt="Chart showcasing infrared spectrum" className="spectrumChart"/>
                <img src={lightChart} alt="Chart showcasing visible light" className="lightChart"/>
            </div>


        </Layout>
    )
}

export default Infrared