import React from 'react'

function Header() {
    return (
        <div>
            {/* ======= Top Bar ======= */}
            <section id="topbar" className="d-flex align-items-center">
                <div className="container d-flex justify-content-center justify-content-md-between">
                <div className="contact-info d-flex align-items-center">
                    <i className="bi bi-envelope d-flex align-items-center"><a href="mailto:zapinwhitehouse@gmail.com">zapinwhitehouse@gmail.com</a></i>
                    <i className="bi bi-phone d-flex align-items-center ms-4"><span>0812 6602 4020</span></i>
                </div>
                <div className="cta d-none d-md-flex align-items-center">
                    <a href="https://wa.wizard.id/54fafe" className="scrollto">Sewa sekarang</a>
                </div>
                </div>
            </section>
            {/* ======= Header ======= */}
            <header id="header" className="d-flex align-items-center">
                <div className="container d-flex align-items-center justify-content-between">
                    <div className="logo">
                        <h1><a href="index.html">Zapin White House</a></h1>
                        {/* Uncomment below if you prefer to use an image logo */}
                        {/* <a href="index.html"><img src="assets/img/logo.png" alt="" class="img-fluid"></a>*/}
                    </div>
                    <nav id="navbar" className="navbar">
                        <ul>
                        <li><a className="nav-link scrollto active" href="#hero">Home</a></li>
                        <li><a className="nav-link scrollto" href="#about">About</a></li>
                        <li><a className="nav-link scrollto" href="#services">Services</a></li>
                        <li><a className="nav-link scrollto" href="#portfolio">Gallery</a></li>
                        <li><a className="nav-link scrollto" href="#pricing">Pricing</a></li>
                        <li><a className="nav-link scrollto" href="#faq">Privacy policy</a></li>
                        <li><a className="nav-link scrollto" href="#contact">Contact</a></li>
                        </ul>
                        <i className="bi bi-list mobile-nav-toggle" />
                    </nav>{/* .navbar */}
                </div>
            </header>{/* End Header */}
        </div>
    )
}

export default Header
