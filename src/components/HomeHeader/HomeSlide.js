import React from 'react'


const HomeSlide = ({ image }) => {
    const backgroundImage = {
        backgroundImage:  `url(${image})`
    }

    return (

        <section className="pageHeaderContainer flexHardCenter" style={backgroundImage}>
            
        </section>

    )
}

export default HomeSlide