import React from 'react'

function Portfolio() {
    return (
        <div>
            {/* ======= Portfolio Section ======= */}
            <section id="portfolio" className="portfolio">
            <div className="container">
                <div className="section-title">
                <h2 data-aos="fade-up">Gallery</h2>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                <div className="col-lg-12 d-flex justify-content-center">
                    <ul id="portfolio-flters">
                    <li data-filter="*" className="filter-active">All</li>
                    <li data-filter=".filter-app">Rumah</li>
                    <li data-filter=".filter-card">Ruangan</li>
                    <li data-filter=".filter-web">kamar</li>
                    <div className="text-center">
                        <a href="https://www.instagram.com/zapin_whitehouse/" className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
                    </div>
                    </ul>
                </div>
                </div>
                <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={200}>
                <div className="col-lg-4 col-md-6 portfolio-item filter-app">
                    <img src="img/portfolio/rumah.jpg" className="img-fluid" alt=" " />
                    <div className="portfolio-info">
                    <h4>tempat kos &amp; Homestay</h4>
                    <a href="assets/img/portfolio/rumah.jpg" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="tempat kos & Homestay"><i className="bx bx-plus" /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="img/portfolio/kamar1.png" className="img-fluid" alt=" " />
                    <div className="portfolio-info">
                    <h4>kamar 1</h4>
                    <a href="assets/img/portfolio/kamar1.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="kamar 1"><i className="bx bx-plus" /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="img/portfolio/ruangdalam1 1.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                    <h4>ruangan dalam 1</h4>
                    <a href="assets/img/portfolio/ruangdalam1 1.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="Ruangan Dalam 1"><i className="bx bx-plus" /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="img/portfolio/kamar2.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                    <h4>kamar 2</h4>
                    <a href="assets/img/portfolio/kamar2.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="kamar 2"><i className="bx bx-plus" /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-card">
                    <img src="img/portfolio/ruangandalam2.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                    <h4>Ruanagan Dalam 2</h4>
                    <a href="assets/img/portfolio/ruangandalam2.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="ruangan dalam 2"><i className="bx bx-plus" /></a>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 portfolio-item filter-web">
                    <img src="img/portfolio/kamar3.png" className="img-fluid" alt="" />
                    <div className="portfolio-info">
                    <h4>kamar 3</h4>
                    <a href="assets/img/portfolio/kamar3.png" data-gallery="portfolioGallery" className="portfolio-lightbox preview-link" title="kamar 3"><i className="bx bx-plus" /></a>
                    </div>
                </div>
                </div>
            </div>
            </section>{/* End Portfolio Section */}
        </div>
    )
}

export default Portfolio
