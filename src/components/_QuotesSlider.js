import React, { Component } from 'react'
import topLeftBQ from '../assets/topLeftBQ.png'
import bottomRightBQ from '../assets/bottomRightBQ.png'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import orangeWiggleHr from '../assets/orangeWiggleHR.svg'

export default class HomeHeader extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 4500,
            cssEase: "linear"
        };
        return (
            <section className="textSectionContainer whiteBg quoteSliderMaster">
                <img src={topLeftBQ} alt="" className="topLeftBQ blockquote"/>
                <img src={bottomRightBQ} alt="" className="bottomRightBQ blockquote"/>
                <h3 className="textSectionTitle fadeIn minionPro">
                    What Customers Are Saying About Yooneek
                </h3>

                <img src={orangeWiggleHr} alt="" className="wiggleHR"/>

                <div className="quoteSliderContainer">
                <Slider {...settings}>

                    <div className="quoteContainer textSectionMsg">

                        <div className="flex flexHardCenter flexColumn">
                            <h4 className="quoteTitle">
                                REEL CASE: <b>Versatile, Rugged, Awesome</b>
                            </h4>
                            <p className="quote"> 
                                Wow! This reel case is one of those things you study, then ask 
                                yourself why didn't I come up with this? My fly reels and spare 
                                spools are organized for the first time ever. I can get my hands 
                                on the one I need without a hassle. My stuff doesn't get beat up 
                                just from being stowed in my gear bag. I'm so impressed, I'm ordering 
                                anotehr one for my baitcasters and a couple more to gift to my fishing 
                                buddies.
                                <br/>
                                <span className="customerName">
                                    &mdash; Amazon Customer
                                </span>
                            </p> 
                        </div>

                    </div>

                    <div className="quoteContainer textSectionMsg">

                        <div className="flex flexHardCenter flexColumn">
                            <h4 className="quoteTitle">
                                REEL CASE: <b>Quality and versatility.</b>
                            </h4>
                            <p className="quote"> 
                                Great product, well made. I can see multiple uses in addition 
                                to the intended. This was a gift for my husband and he loves it.
                                <br/>
                                <span className="customerName">
                                    &mdash; Leslie Rainey
                                </span>
                            </p> 
                        </div>

                    </div>


                </Slider>
                </div>
                
            </section>
        )
    }
    
}