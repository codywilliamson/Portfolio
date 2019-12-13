import React from 'react'
// enable gatsby linking -- SPA performance
import { Link } from 'gatsby'
import yooneekOrange from '../assets/logos/yooneekOrange.svg'

const Nav = () => {
    
    function openMobileNav() {
        let hamburger = document.getElementById('navHamburger');
        let menu = document.querySelector('.menuContainer');
        let logo = document.querySelector('.navLogo');

        hamburger.classList.toggle('notActive');
        hamburger.classList.toggle('active');

        menu.classList.toggle('mobile');
        logo.classList.toggle('menuActive');
    }

    return (
        
        <header className="navigation">
            <nav id="navContainer" className="navContainer">
                
                <div className="logoContainer">
                    <Link to="/">
                        <img src={yooneekOrange} alt="Yooneek Logo" className="navLogo fadeIn"/>
                    </Link>
                </div>

                <div className="menuContainer">
                    <Link to="/products" className="menuItem fadeIn">Products</Link>
                    <Link to="/infrared" className="menuItem fadeIn">Far Infrared</Link>
                    <Link to="/about" className="menuItem fadeIn">About</Link>
                    <Link to="/contact" className="menuItem fadeIn">Contact Us</Link>
                </div>

                <div className="navMenuBtnContainer flexHardCenter">
                    <div id="navHamburger" className="navHamburger notActive" onClick={openMobileNav}>
                        <span className="hamburgerBar"></span>
                        <span className="hamburgerBar"></span>
                        <span className="hamburgerBar"></span>
                    </div>
                </div>

            </nav>
        </header>
    )
}

export default Nav