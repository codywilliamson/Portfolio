import React from 'react'


const TextSection = (props) => {
    return (
        
        <section className={`textSectionContainer ${props.bgClass}`}>
            <div className="hexagon" style={{display: props.display }}></div>
            
            <h3 className="textSectionTitle">
                {props.title}
            </h3>

            <hr className={props.hrClass} />

            <p className="textSectionMsg">
                {props.message}
            </p>
        </section>

    )
}

export default TextSection