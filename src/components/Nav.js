import React, { Component } from 'react'
import { Link } from 'gatsby'
import Logo from '../../static/assets/logo-main-dark.svg'

export default class Nav extends Component {

    render() {
        return (
            <header className="navigation">
                <nav id="navContainer" className="navContainer">
                    
                    <div className="logoContainer">
                        <Link to="/">
                            <img src={Logo} alt="" className="navLogo"/>
                        </Link>
                    </div>

                    <div className="menuContainer">
                        <Link to="/about" className="menuItem" activeClassName="activeItem">About</Link>
                        <Link to="/blogs" className="menuItem" activeClassName="activeItem">Blog</Link>
                    </div>

                    <div className="navMenuBtnContainer flexHardCenter">
                        <div // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
                            id="navHamburger"
                            role="navigation"
                            className="navHamburger notActive"
                            // onClick={openMobileNav}
                            // onKeyDown={handleKeyDown}
                        >
                            <span className="hamburgerBar"></span>
                            <span className="hamburgerBar"></span>
                            <span className="hamburgerBar"></span>
                        </div>
                    </div>

                </nav>
        </header>
        )
    }
}