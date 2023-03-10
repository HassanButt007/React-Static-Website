import React, { useState } from 'react';
import { Outlet, Link } from "react-router-dom";
import Dropdown from './Dropdown';
import Mobile from './Mobile';


function Header() {
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(!navbarOpen)
    }
    const closeMenu = () => {
        setNavbarOpen(false)
    }
    return (
        <>
            <main className="main-wrapper">
                <header className="header-section sticky-header d-none d-lg-block section-fluid-200">
                    <div className="header-wrapper">
                        <div className="container-fluid">
                            <div className="row justify-content-between align-items-center">
                                <div className="col-auto">

                                    <Link to="/" className="header-logo">
                                        <img src="/assets/images/logo/logo.png" alt="" />
                                    </Link>

                                </div>
                                <div className="col-auto d-flex align-items-center">

                                    <ul className="header-nav">
                                        <li><Link to="/">Home</Link></li>
                                        <li className="has-dropdown">
                                            <Link to="/service">Service</Link>
                                            <Dropdown />
                                        </li>
                                        <li className="has-dropdown">
                                            <Link to="/portfolio">Portfolio</Link>
                                        </li>
                                        <li className="has-dropdown">
                                            <Link to="/about">About</Link>
                                        </li>
                                        <li className="has-dropdown">
                                            <Link to="blog">Blogs</Link>
                                        </li>
                                        <li><Link to="contact">Contact</Link></li>
                                    </ul>
                                </div>
                                <div className="col-auto">
                                    <div className="header-btn-link">
                                        <Link to="/contact" className="btn btn-lg btn-default">Get Started</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </header>

                {/* Mobile Header */}

                <div className="mobile-header d-block d-lg-none">
                    <div className="container-fluid">
                        <div className="row align-items-center justify-content-between">
                            <div className="col-auto">
                                <div className="mobile-logo">
                                    <Link to="/"><img src="/assets/images/logo/logo.png" alt="" /></Link>
                                </div>
                            </div>
                            <div className="col-auto">
                                <div className="mobile-action-link text-end">
                                    <Link data-bs-toggle="offcanvas" to="#toggleMenu" role="button"><i className="icofont-navigation-menu"></i></Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="offcanvas offcanvas-start" tabIndex="-1" id="toggleMenu">
                    <div className="offcanvas-header">

                        <Link to="/" className="header-logo"><img src="/assets/images/logo/logo.png" alt="" /></Link>

                        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close" onClick={handleToggle}>
                           
                        </button>
                    </div>
                    <div className="offcanvas-body">

                        <div className="offcanvas-mobile-menu-wrapper">

                            <div className="mobile-menu-bottom">

                                <div className="offcanvas-menu">
                                    <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                                        <li><Link to="/" onClick={() => closeMenu()}>Home</Link></li>
                                        <li>
                                            <Link to="/service" onClick={() => closeMenu()}>Service</Link>
                                            <Mobile />
                                        </li>
                                        <li>
                                            <Link to="/portfolio" onClick={() => closeMenu()}>Portfolio</Link>
                                        </li>
                                        <li>
                                            <Link to="/about" onClick={() => closeMenu()}>About</Link>
                                        </li>
                                        <li>
                                            <Link to="/blog" onClick={() => closeMenu()}>Blogs</Link>
                                        </li>
                                        <li>
                                            <Link to="contact" onClick={() => closeMenu()}>Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>


                            <div className="mobile-contact-info text-center">
                                <ul className="social-link">
                                    <li><Link to="https://www.facebook.com/people/Hit-Digitally/100034443744675/"><i className="icofont-facebook"></i></Link>
                                    </li>
                                    <li><Link to="https://twitter.com/HDigitally?lang=en"><i className="icofont-twitter"></i></Link>
                                    </li>
                                    <li><Link to="https://www.youtube.com/channel/UC0PCwE6SK9SHqZKQ4bE_EHQ"><i className="icofont-youtube"></i></Link></li>
                                    <li><Link to="https://www.instagram.com/hitdigitally/"><i className="icofont-instagram"></i></Link></li>
                                </ul>
                            </div>


                        </div>
                    </div>
                </div>
            </main>
            <Outlet />
        </>
    )
}

export default Header;