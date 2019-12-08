import React from 'react'

import topLeftBQ from '../assets/topLeftBQ.png'
import bottomRightBQ from '../assets/bottomRightBQ.png'


const TextSection = (props) => {
    

    return (
        
        <section className={`textSectionContainer ${props.bgClass}`}>
            <img src={topLeftBQ} alt="" className="topLeftBQ blockquote" style={{display: props.showBQs || "none" }} />
            <img src={bottomRightBQ} alt="" className="bottomRightBQ blockquote" style={{display: props.showBQs || "none" }} />
            <h3 className="textSectionTitle fadeIn minionPro">
                {props.title}
            </h3>

            <hr className="basicHR" style={{display: props.showHR}} />

            <img src={props.colorWiggleHR} alt="" className="wiggleHR" style={{display: props.showWiggleHR}}/>

            <p className="textSectionMsg fadeIn"> 
                {props.message}
            </p> 
        </section>

    )
}

export default TextSection