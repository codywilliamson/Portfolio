import React, { Component } from "react"
import FirstImage from "../../assets/headers/homeHeader.png"
import SecondImage from "../../assets/headers/productsHeader.png"
import Slide from "./HomeSlide"

export default class HomeHeader extends Component {
    // TODO: create circles based on number of images 
  constructor(props) {
    super(props)

    this.state = {
        // background images array
      images: [FirstImage, SecondImage, FirstImage, SecondImage, FirstImage],
      // state index
      currentIndex: 0,
      // set translate value based on clientwidth
      translateValue: 0,
      // circles array index to fill based on current index
      circleFilled: 0,
    }
  }

  componentDidMount() {
    const interval = window.setInterval(() => {
        // auto play image slider
      this.nextSlide()
      // color dot after slide change
      this.colorDotToSlide()
    }, 5500)
    this.setState({ interval })
  }

  // slide to next image
  nextSlide = () => {
      // if index reaches the end, reset slider
    if (this.state.currentIndex === this.state.images.length - 1) {
      return this.setState({
        currentIndex: 0,
        translateValue: 0,
        circleFilled: 0,
      })
    }

    // add state values to change slide
    this.setState(prevState => ({
      currentIndex: prevState.currentIndex + 1,
      translateValue: prevState.translateValue + -this.slideWidth(),
      circleFilled: prevState.currentIndex + 1,
    }))
  }

  colorDotToSlide = () => {
      // grab circles array
    const circles = Array.from(document.querySelectorAll(".circle"))
    // remove any left over classes
    circles.forEach((circle) => {
        circle.classList.remove('orangeFill')
    })
    // add class to current circle
    circles[this.state.circleFilled].classList.add("orangeFill")
  }

  // get width of client
  slideWidth = () => {
    return document.querySelector(".pageHeaderContainer").clientWidth
  }

  render() {
    return (
      <div className="slider">
        <div
          className="sliderWrapper"
          style={{
            transform: `translateX(${this.state.translateValue}px)`,
            transition: `transform ease-in-out .5s`,
          }}
        >
          {
              // map through images array set in state
            this.state.images.map((image, i) => {
                // return slide with new image
                return <Slide key={i} image={image} />
            })
          }
        </div>
        <div className="headerLogoContainer flex flexHardCenter">
          <svg
            className="yooneekOutline"
            xmlns="http://www.w3.org/2000/svg"
            width="769"
            height="219"
            viewBox="0 0 769 219"
            fill="none"
          >
            <path
              d="M82.975 54.092H112.813L65.3875 
                            183.384C57.325 205.189 44.975 
                            217.642 23.4 217.642 15.3375 
                            217.642 8.63751 215.151 4.2375 
                            212.661L7.58751 188.251C11.0375 
                            189.907 15.75 191.209 20.2625 
                            191.209 31.4625 191.209 39.4125 
                            182.322 42.5625 167.974L1 
                            54.0779H30.725L57.0125 136.914 
                            82.975 54.092ZM163.375 51.7289C194.262 
                            51.7289 217.087 77.4542 217.087 110.991 
                            217.087 144.654 194.262 170.252 163.375 
                            170.252 132.6 170.252 109.675 144.654 
                            109.675 110.991 109.675 77.4401 132.6 
                            51.7289 163.375 51.7289ZM163.375 142.744C179.187 
                            142.744 190.387 129.23 190.387 110.976 190.387 
                            92.8498 179.187 79.3363 163.375 79.3363 147.675 
                            79.3363 136.362 92.8498 136.362 110.976 136.375 
                            129.23 147.675 142.744 163.375 142.744ZM276.237 
                            51.7289C307.125 51.7289 329.95 77.4542 329.95 
                            110.991 329.95 144.654 307.125 170.252 276.237 
                            170.252 245.462 170.252 222.537 144.654 222.537 
                            110.991 222.537 77.4401 245.462 51.7289 276.237 
                            51.7289ZM276.237 142.744C292.05 142.744 303.25 
                            129.23 303.25 110.976 303.25 92.8498 292.05 79.3363 
                            276.237 79.3363 260.537 79.3363 249.225 92.8498 
                            249.225 110.976 249.225 129.23 260.537 142.744 276.237 
                            142.744ZM437.775 96.4015V167.861H410.875V104.213C410.875 
                            88.449 401.875 79.9164 390.137 79.9164 378.312 79.9164 
                            367.837 88.449 367.837 104.213V167.861H341.037V54.092H366.587L367.112 
                            67.2519C372.35 59.3135 383.125 51.7289 398.1 51.7289 421.338 51.7289 
                            437.775 69.0348 437.775 96.4015ZM544.35 159.569C534.612 165.851 
                            521.112 170.238 506.45 170.238 470.85 170.238 448.025 146.423 
                            448.025 110.976 448.025 76.1382 469.8 51.7148 499.637 51.7148 
                            530.525 51.7148 553.975 78.0202 547.375 120.103H474.725C477.45 
                            135.98 490.012 143.565 506.55 143.565 519.012 143.565 530.637 
                            140.253 540.575 134.919L544.35 159.569ZM523.312 99.7268C522.575 
                            87.0481 514.1 77.3269 500.275 77.3269 485.937 77.3269 476.3 86.8076 
                            475.15 99.7268H523.312ZM650.512 159.569C640.775 165.851 627.275 
                            170.238 612.612 170.238 577.012 170.238 554.187 146.423 554.187 
                            110.976 554.187 76.1382 575.975 51.7148 605.8 51.7148 636.687 
                            51.7148 660.137 78.0202 653.537 120.103H580.887C583.612 135.98 
                            596.162 143.565 612.712 143.565 625.175 143.565 636.787 140.253 
                            646.737 134.919L650.512 159.569ZM629.475 99.7268C628.737 87.0481 
                            620.262 77.3269 606.437 77.3269 592.1 77.3269 582.462 86.8076 
                            581.312 99.7268H629.475ZM665.912 
                            1V167.875H692.712V121.999H707.575L735.737 167.875H767.35L729.562 
                            109.208 760.862 54.092H731.025L708.412 95.694H692.712V1H665.912Z"
              stroke="#FFFFFF"
              strokeWidth="2.5"
            />
          </svg>
        </div>
      </div>
    )
  }
}
