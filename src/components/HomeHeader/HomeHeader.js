import React, { Component } from "react"
import FirstImage from "../../assets/headers/homeHeader.png"
import SecondImage from "../../assets/headers/productsHeader.png"
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"


export default class HomeHeader extends Component {
    render() {
        const settings = {
            dots: true,
            infinite: true,
            speed: 1000,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 3000,
            cssEase: "linear",
            customPaging: i => (
                    <div className="circle"></div>
            )
        };
        return (
            <div className="homeSlideContainer">
                <Slider {...settings}>
                    <div className="slideContainer">
                        <div className="pageHeaderContainer" style={{ backgroundImage:  `url(${FirstImage})` }}>

                        </div>
                    </div>
                    <div className="slideContainer">
                        <div className="pageHeaderContainer" style={{ backgroundImage:  `url(${SecondImage})` }}>

                        </div>
                    </div>
                </Slider>
                <div className="yooneekOutlineContainer flex flexHardCenter">

                    <svg className="yooneekOutline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 769 219" fill="none"><path d="M83 54h30L65 183c-8 22-20 35-42 35-8 0-14-3-19-5l4-25c3 2 8 3 12 3 11 0 19-9 23-23L1 54h30l26 83 26-83zm80-2c31 0 54 25 54 59s-23 59-54 59c-30 0-53-25-53-59s23-59 53-59zm0 91c16 0 27-14 27-32s-11-32-27-32c-15 0-27 14-27 32s12 32 27 32zm113-91c31 0 54 25 54 59s-23 59-54 59-53-25-53-59 22-59 53-59zm0 91c16 0 27-14 27-32s-11-32-27-32c-15 0-27 14-27 32s12 32 27 32zm162-47v72h-27v-64c0-16-9-24-21-24s-22 8-22 24v64h-27V54h26v13c5-8 16-15 31-15 23 0 40 17 40 44zm106 64c-9 6-23 10-38 10-35 0-58-24-58-59s22-59 52-59c31 0 54 26 47 68h-72c2 16 15 24 32 24 12 0 24-4 34-9l3 25zm-21-60c0-13-9-23-23-23s-24 10-25 23h48zm128 60c-10 6-24 10-38 10-36 0-59-24-59-59s22-59 52-59c31 0 54 26 48 68h-73c3 16 15 24 32 24 12 0 24-4 34-9l4 25zm-22-60c0-13-9-23-23-23s-24 10-25 23h48zm37-99v167h27v-46h15l28 46h31l-37-59 31-55h-30l-23 42h-15V1h-27z" stroke="#FFF" strokeWidth="2.5"/></svg>

                </div>
            </div>
        )
    }
    
}


