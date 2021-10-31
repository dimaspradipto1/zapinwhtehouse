import React from 'react'

function Pricing() {
    return (
        <div>
            {/* ======= Pricing Section ======= */}
            <section id="pricing" className="pricing">
            <div className="container">
                <div className="section-title">
                <h2 data-aos="fade-up">Pricing</h2>
                <p data-aos="fade-up">List Harga sewa kos-kosan dan Homestay</p>
                </div>
                <div className="row">
                <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={100}>
                    <div className="box featured">
                    <h3>Kamar AC</h3>
                    <h4><sup>Rp</sup>1jt<span> / Bulan</span></h4>
                    <ul>
                        <li>sudah termasuk air &amp; listrik</li>
                        <li>spring bed</li>
                        <li>lemari pakaian</li>
                        <li>kamar mandi dalam kamar</li>
                    </ul>
                    <div className="btn-wrap">
                        <a href="https://wa.wizard.id/c01078" className="btn-buy">Sewa Sekrang</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={200}>
                    <div className="box">
                    <h3>Kamar non AC</h3>
                    <h4><sup>Rp</sup>1jt<span> / Bulan</span></h4>
                    <ul>
                        <li>sudah termasuk air &amp; listrik</li>
                        <li>spring bed</li>
                        <li>lemari pakaian</li>
                        <li>kamar mandi dalam kamar</li>
                    </ul>
                    <div className="btn-wrap">
                        <a href="https://wa.wizard.id/43fd24" className="btn-buy">sewa sekarang</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={100}>
                    <div className="box featured">
                    <h3>Homestay AC</h3>
                    <h4><sup>Rp</sup>600 rb<span> / Minggu</span></h4>
                    <ul>
                        <li>sudah termasuk air &amp; listrik</li>
                        <li>spring bed</li>
                        <li>lemari pakaian</li>
                        <li>kamar mandi dalam kamar</li>
                    </ul>
                    <div className="btn-wrap">
                        <a href="https://wa.wizard.id/04d772" className="btn-buy">Sewa Sekrang</a>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6 mt-4 mt-lg-0" data-aos="fade-up" data-aos-delay={200}>
                    <div className="box">
                    <h3>Homestay AC</h3>
                    <h4><sup>Rp</sup>110 rb<span> / Hari</span></h4>
                    <ul>
                        <li>sudah termasuk air &amp; listrik</li>
                        <li>spring bed</li>
                        <li>lemari pakaian</li>
                        <li>kamar mandi dalam kamar</li>
                    </ul>
                    <div className="btn-wrap">
                        <a href="https://wa.wizard.id/da4db7" className="btn-buy">Sewa Sekrang</a>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>{/* End Pricing Section */}
        </div>
    )
}

export default Pricing
