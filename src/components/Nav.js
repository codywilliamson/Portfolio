import React from 'react'
import { Link } from 'gatsby'

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

    // on desktop, adds scrolled class to nav
// var myNav = document.querySelector("nav");
// var nav = document.querySelector(".nav__list");

// window.onscroll = function() {
//   "use strict";
//   if (document.body.scrollTop >= 100 || document.documentElement.scrollTop >= 100) {
//     nav.classList.add("scrolled");
//     myNav.classList.add("scrolled");
//   } else {
//     nav.classList.remove("scrolled");
//     myNav.classList.remove("scrolled");
//   }
// };

    return (
        
        <header className="navigation">
            <nav id="navContainer" className="navContainer">
                
                <div className="logoContainer">
                    <Link to="/">
                    <svg className="navLogo" xmlns="http://www.w3.org/2000/svg" width="478" viewBox="0 0 478 129" fill="none">
                        <path d="M48.8 31.6H66.4L38.4 108C33.6 120.9 26.3 128.3 13.5 128.3 8.8 128.3 4.8 126.8 2.2 125.4L4.2 110.9C6.2 111.9 9 112.7 11.7 112.7 18.3 112.7 23 107.4 24.9 98.9L0.3 31.6H17.9L33.4 80.6 48.8 31.6ZM96.3 30.2C114.6 30.2 128.1 45.4 128.1 65.2 128.1 85.1 114.6 100.3 96.3 100.3 78.1 100.3 64.6 85.1 64.6 65.2 64.6 45.4 78.1 30.2 96.3 30.2ZM96.3 84C105.7 84 112.3 76 112.3 65.2 112.3 54.5 105.7 46.5 96.3 46.5 87 46.5 80.3 54.5 80.3 65.2 80.3 76 87 84 96.3 84ZM163 30.2C181.3 30.2 194.8 45.4 194.8 65.2 194.8 85.1 181.3 100.3 163 100.3 144.8 100.3 131.3 85.1 131.3 65.2 131.3 45.4 144.8 30.2 163 30.2ZM163 84C172.4 84 179 76 179 65.2 179 54.5 172.4 46.5 163 46.5 153.8 46.5 147.1 54.5 147.1 65.2 147.1 76 153.8 84 163 84ZM258.6 56.6V98.9H242.7V61.2C242.7 51.9 237.3 46.9 230.4 46.9 223.4 46.9 217.2 51.9 217.2 61.2V98.9H201.4V31.6H216.5L216.8 39.4C219.9 34.7 226.2 30.2 235.1 30.2 248.8 30.2 258.6 40.4 258.6 56.6ZM321.6 94C315.8 97.7 307.8 100.3 299.2 100.3 278.1 100.3 264.6 86.2 264.6 65.2 264.6 44.6 277.5 30.2 295.1 30.2 313.4 30.2 327.3 45.7 323.4 70.6H280.4C282 80 289.4 84.5 299.2 84.5 306.6 84.5 313.5 82.5 319.3 79.4L321.6 94ZM309.1 58.6C308.7 51.1 303.7 45.3 295.5 45.3 287 45.3 281.3 50.9 280.7 58.6H309.1ZM384.3 94C378.6 97.7 370.6 100.3 361.9 100.3 340.9 100.3 327.4 86.2 327.4 65.2 327.4 44.6 340.3 30.2 357.9 30.2 376.2 30.2 390 45.7 386.1 70.6H343.2C344.8 80 352.2 84.5 362 84.5 369.4 84.5 376.2 82.5 382.1 79.4L384.3 94ZM371.9 58.6C371.5 51.1 366.5 45.3 358.3 45.3 349.8 45.3 344.1 50.9 343.4 58.6H371.9ZM393.5 0.2V98.9H409.3V71.8H418.1L434.7 98.9H453.4L431.1 64.2 449.6 31.6H432L418.6 56.2H409.3V0.2H393.5ZM464.5 92.6H461.4V102.7H459.3V92.6H456.2V90.6H464.5V92.6ZM474.7 90.6L471.4 99.6 468.1 90.6H465.7V102.7H467.8V94.5H467.9L470.6 102.7H472.2L474.9 94.5H475V102.7H477V90.6H474.7Z" fill="#EE8922"/>
                    </svg>
                        {/* <img src={yooneekOrange} alt="Yooneek Logo" className="navLogo fadeIn"/> */}
                    </Link>
                </div>

                <div className="menuContainer">
                    <Link to="/products" className="menuItem" activeClassName="activeItem">Products</Link>
                    <Link to="/infrared" className="menuItem" activeClassName="activeItem">Far Infrared</Link>
                    <Link to="/about" className="menuItem" activeClassName="activeItem">About</Link>
                    <Link to="/contact" className="menuItem" activeClassName="activeItem">Contact Us</Link>
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