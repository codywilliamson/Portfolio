import React from 'react'
import { Link } from 'gatsby'
import fbIcon from '../assets/logos/fbIcon.svg'
import igIcon from '../assets/logos/igIcon.svg'
import twitterIcon from '../assets/logos/twitterIcon.svg'
import yooneekWhite from '../assets/logos/yooneekWhite.svg'

const Footer = () => {

    return (
        <footer className="siteFooterContainer">
            <div className="footerNavContainer"> 
                <img className="footerLogo fadeIn" src={yooneekWhite} alt="Yooneek Logo" />

                <ul className="footerNavMenu">
                    <Link to="/products" className="footerNavItem">Products</Link>
                    <Link to="/infrared" className="footerNavItem">Far Infrared</Link>
                    <Link to="/about" className="footerNavItem">About</Link>
                    <Link to="/contact" className="footerNavItem">Contact Us</Link>
                    <Link to="/blogs" className="footerNavItem">Blog</Link>
                </ul>

                <p className="footerAddress">
                    123 Street, Athens, AL, 12345
                </p>

                <p className="footerPhoneNumber">
                    <a href="tel:+">123-123-1234</a>
                </p>

                <ul className="footerSocialMenu flexHardCenter">
                    <li className="footerSocialIcon">
                        <img src={fbIcon} alt="Facebook svg icon" className="socialIcon"/>
                    </li>
                    <li className="footerSocialIcon">
                        <img src={twitterIcon} alt="Twitter svg icon" className="socialIcon"/>
                    </li>
                    <li className="footerSocialIcon">
                        <img src={igIcon} alt="Instagram svg icon" className="socialIcon"/>
                    </li>
                </ul>

                <p className="footerEmailSignupText">
                    Sign up for our email list!
                </p>

                <div className="emailSignUpControl">
                    <label htmlFor="emailSignup" className="sr-only">Enter Your Email Address: </label>
                    <input className="emailInput" type="text" name="email" id="emailSignup" placeholder="enter email address" />
                    <button className="emailSignupButton" type="button">Sign Up</button>
                </div>

                {/* <a href="#" className="footerPrivacyLink">
                    Privacy Policy &amp; Cookies Page
                </a> */}

                <p className="footerCopyight">
                    &copy; YOONEEK 2019
                </p>
            </div>
        </footer>
    )
}

export default Footer