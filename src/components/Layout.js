import React, { Component } from 'react'
import Nav from './Nav'
// import Footer from './Footer' 
import '../sass/style.scss'


export default class Layout extends Component {

    render() {
        return (
            <div className="appWrapper">

                <Nav />
                    <div className="contentWrapper">
                        {this.props.children}
                    </div>
                {/* <Footer /> */}

            </div>
        )
    }
}