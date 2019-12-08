import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import '../../static/fonts/fonts.css'
import '../sass/style.scss'



const Layout = (props) => {

    return (
        
        <div className="appWrapper">

            <Nav />

            <div className="contentWrapper">
                {props.children}
            </div>
            
            <Footer />

        </div>

    )
}

export default Layout