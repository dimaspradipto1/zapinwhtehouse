import React from 'react'

function Value() {
    return (
        <div>
            {/* ======= Values Section ======= */}
            <section id="values" className="values">
            <div className="container">
                <div className="row">
                <div className="col-md-6 d-flex align-items-stretch" data-aos="fade-up">
                    <div className="card" style={{backgroundImage: 'url(img/value-1.png)'}}>
                    <div className="card-body">
                        <h5 className="card-title"><a href>Our Mission</a></h5>
                        <p className="card-text">mencipatakan kos-kosan dengan suasana yang nyaman dan menyenangkan.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4 mt-md-0" data-aos="fade-up" data-aos-delay={100}>
                    <div className="card" style={{backgroundImage: 'url(img/value2.png)'}}>
                    <div className="card-body">
                        <h5 className="card-title"><a href>Our Plan</a></h5>
                        <p className="card-text">membuat kos-kosan yang mudah mengakses kemanapun.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay={200}>
                    <div className="card" style={{backgroundImage: 'url(img/value3.png)'}}>
                    <div className="card-body">
                        <h5 className="card-title"><a href>Our Vision</a></h5>
                        <p className="card-text">membuat kenyamanan bagi putri-putri yang tinggal di kos-kosan kami.</p>
                    </div>
                    </div>
                </div>
                <div className="col-md-6 d-flex align-items-stretch mt-4" data-aos="fade-up" data-aos-delay={300}>
                    <div className="card" style={{backgroundImage: 'url(img/value4.png)'}}>
                    <div className="card-body">
                        <h5 className="card-title"><a href>Our Care</a></h5>
                        <p className="card-text">memberikan fasilitas yang lengkap bagi putri-putri yang tinggal dikos-kosan.</p>
                    </div>
                    </div>
                </div>
                </div>
            </div>
            </section>{/* End Values Section */}
        </div>
    )
}

export default Value
