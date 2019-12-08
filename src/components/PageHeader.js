import React from 'react'

const PageHeader = (props) => {
    return (

        <section className="pageHeaderContainer flexHardCenter" style={{backgroundImage: "url(" + props.bgImage + ")"}}>
            
            <h1 className={`fadeIn ${props.headerStyle}`}>
                {props.title}
            </h1>
            
        </section>

    )
}

export default PageHeader