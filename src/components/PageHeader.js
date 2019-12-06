import React from 'react'

const PageHeader = (props) => {
    return (

        <section className="pageHeaderContainer" style={{backgroundImage: props.bgImage}}>
            <h1 className={props.headerStyle}>
                {props.title}
            </h1>
        </section>

    )
}

export default PageHeader