import React from 'react'
// enable gatsby linking -- SPA performance
import { Link } from 'gatsby'



const Nav = () => {
    return (
        <header className="navigation">
            <nav className="navContainer">

                <div className="logoContainer">
                    <h1 className="navLogo">
                        yooneek<sub className="logoTM">tm</sub>
                    </h1>
                </div>

                <div className="menuContainer">
                    <Link to="/products" className="menuItem">Products</Link>
                    <Link to="/infrared" className="menuItem">Far Infrared</Link>
                    <Link to="/about" className="menuItem">About</Link>
                    <Link to="/contact" className="menuItem">Contact Us</Link>
                </div>

            </nav>
        </header>
    )
}

export default Nav