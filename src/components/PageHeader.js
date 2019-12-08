import React from 'react'

const PageHeader = (props, mainPage) => {
    return (

        <section className="pageHeaderContainer flexHardCenter" style={{backgroundImage: "url(" + props.bgImage + ")"}}>
            
            <h1 className={props.headerStyle}>
                {props.title}
            </h1>
            
        </section>

    )
}

export default PageHeader