import React from 'react'

function Service() {
    return (
        <div>
            {/* ======= Services Section ======= */}
            <section id="services" className="services section-bg">
            <div className="container">
                <div className="section-title" data-aos="fade-up">
                <h2>Services</h2>
                <p>Keunggulan Zapin White House.</p>
                </div>
                <div className="row">
                <div className="col-lg-4 col-md-6" data-aos="fade-up">
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-moon-stars" /></div>
                    <h4 className="title"><a href>Dekat dengan mesjid</a></h4>
                    <p className="description">bisa sholat tepat waktu secara berjamaah.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={100}>
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-basket" /></div>
                    <h4 className="title"><a href>Dekat dengan pasar basah Botania</a></h4>
                    <p className="description">ekatnya jarak pasar basah dengan lokasi kos membuat kamu bisa mengatur waktu kapanpun jika inin berbelanja.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={200}>
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-building" /></div>
                    <h4 className="title"><a href>1 menit ke kampus UNIBA</a></h4>
                    <p className="description">lokasi yang begitu dekat dengan kampus sangat pas bagi kamu yang kuliah di UNIBA.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={300}>
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-geo-fill" /></div>
                    <h4 className="title"><a href>5 menit kebandara Hang Nadim</a></h4>
                    <p className="description">jarak yang dekat menjadikan kamu tidak perlu terburu-buru untuk berpegian ke bandara.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={400}>
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-brightness-high" /></div>
                    <h4 className="title"><a href>5 menit ke Mega Mall</a></h4>
                    <p className="description">akses yang dekat dari berbagai pusat mall membuat kamu bisa pilih yang kamu mau.</p>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6" data-aos="fade-up" data-aos-delay={500}>
                    <div className="icon-box">
                    <div className="icon"><i className="bi bi-flag-fill" /></div>
                    <h4 className="title"><a href>5 menit ke pelabuhan International Batam center</a></h4>
                    <p className="description">lokasi yang strategis bisa membuat adventure kamu terasa menyenangkan dan seru ke negara tetangga.</p>
                    </div>
                </div>
                </div>
            </div>
            </section>{/* End Services Section */}
        </div>
    )
}

export default Service
