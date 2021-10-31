import React from 'react'

function WhyUs() {
    return (
        <div>
            {/* ======= Why Us Section ======= */}
            <section id="why-us" className="why-us">
            <div className="container">
                <div className="row">
                <div className="col-xl-4 col-lg-5" data-aos="fade-up">
                    <div className="content">
                    <h3>mengapa memilih Zapin White House</h3>
                    <p>
                        Dengan Lokasi yang strategis, tempat yang nyaman dan juga dilengkapi fasilitas yang super duper lengkap yang akan membuat harimu lebih menyenangkan. dan bisa menjadi Homestay yang hanya butuh beberapa hari untuk menginap. 
                    </p>
                    <div className="text-center">
                        <a href="# " className="more-btn">Learn More <i className="bx bx-chevron-right" /></a>
                    </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-7 d-flex">
                    <div className="icon-boxes d-flex flex-column justify-content-center">
                    <div className="row">
                        <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={100}>
                        <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-receipt" />
                            <h4>Tempat yang bersih</h4>
                            <p>Membuat suasana hati lebih tenang dan nyaman.</p>
                        </div>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={200}>
                        <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-box" />
                            <h4>Fasilitas</h4>
                            <p>Dengan fasilitas yang lenkap dapat membantu semua aktifitas kamu di kos-kosan.</p>
                        </div>
                        </div>
                        <div className="col-xl-4 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay={300}>
                        <div className="icon-box mt-4 mt-xl-0">
                            <i className="bx bx-map-pin" />
                            <h4>Dekat kemana saja</h4>
                            <p>Dengan lokasi yang strategis yang bisa menjangkau tujuan anda.</p>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>{/* End Why Us Section */}
        </div>
    )
}

export default WhyUs
