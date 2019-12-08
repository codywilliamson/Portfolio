import React from 'react'
import { Link } from 'gatsby'

const Footer = () => {
    return (
        <footer className="siteFooterContainer">
            <div className="footerNavContainer">
                <h1 className="footerLogo fadeIn">
                    yooneek<sub className="logoTM">tm</sub>
                </h1>

                <ul className="footerNavMenu">
                    <Link to="" className="footerNavItem">Products</Link>
                    <Link to="" className="footerNavItem">Far Infrared</Link>
                    <Link to="" className="footerNavItem">About</Link>
                    <Link to="" className="footerNavItem">Contact Us</Link>
                </ul>

                <p className="footerAddress">
                    123 Street, Athens, AL, 12345
                    <span className="footerPhoneNumber">
                        <a href="tel:+">123-123-1234</a>
                    </span>
                </p>

                <ul className="footerSocialMenu">
                    <li className="footerSocialIcon"></li>
                    <li className="footerSocialIcon"></li>
                    <li className="footerSocialIcon"></li>
                </ul>

                <p className="footerEmailSignupText">
                    Sign up for our email list!
                </p>

                <div className="emailSignUpControl">
                    <label htmlFor="emailSignup" className="sr-only">Enter Your Email Address: </label>
                    <input type="text" name="email" id="emailSignup" placeholder="enter email address" />
                    <button className="emailSignupButton" type="button">Sign Up</button>
                </div>

                <a href="" className="footerPrivacyLink">
                    Privacy Policy &amp; Cookies Page
                </a>

                <p className="footerCopyight">
                    &copy; YOONEEK 2019
                </p>
            </div>
        </footer>
    )
}

export default Footer