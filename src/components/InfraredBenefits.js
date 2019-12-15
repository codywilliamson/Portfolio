import React from 'react'
import orangeDots from '../assets/orangeDots.png'
import dotsWithLines from '../assets/dotsWithLines.png'
import glowingGloves from '../assets/glowingGloves.png'

const InfraredBenefits = (props) => {
    return (
        <section className="infraredBenefitsContainer">

                <div className="benefitsBorder">

                    <h4 className="textSectionTitle benefitsTitle">
                        {props.title}
                    </h4>

                    <div className="benefitsCardContainer">

                        <div className="benefitsCard">
                            <img src={orangeDots} alt="" className="benefitsImg"/>
                            <p className="benefitsCardTitle">
                                Direct Energy Transfer
                            </p>
                        </div>
                        <div className="benefitsCard">
                            <img src={dotsWithLines} alt="" className="benefitsImg"/>
                            <p className="benefitsCardTitle">
                                Conduction
                            </p>
                        </div>
                        <div className="benefitsCard">
                            <img src={glowingGloves} alt="" className="benefitsImg"/>
                            <p className="benefitsCardTitle">
                                Convection
                            </p>
                        </div>

                    </div>

                </div>

            </section>
    )
}

export default InfraredBenefits