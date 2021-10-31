/* eslint-disable react/jsx-no-duplicate-props */
import React from 'react'

function Contact() {
    return (
        <div>
            {/* ======= Contact Section ======= */}
            <section id="contact" className="contact">
            <div className="container">
                <div className="section-title">
                <h2 data-aos="fade-up">Contact</h2>
                </div>
                <div data-aos="fade-up">
                    <iframe title="map" style={{border: 0, width: '100%', height: 350}} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.0691100339836!2d104.08607351426586!3d1.1103751626085472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31d989d791bff96b%3A0x495e0b84302c64d7!2sKos%20Zapin%20White%20House!5e0!3m2!1sid!2sid!4v1631794266993!5m2!1sid!2sid" width="600" height="450" frameBorder={0} allowFullScreen />
                </div>
                <div className="row justify-content-center">
                <div className="col-xl-4 col-lg- mt-3" data-aos="fade-up">
                    <div className="info-box">
                    <i className="bx bx-map" />
                    <h3>Our Address</h3>
                    <p>Perum KPRI-Sekawan BLok C7 No.1 (Belakang Mall Botania 2)-kota Batam</p>
                    </div>
                </div>
                <div className="col-xl-4 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay={100}>
                    <div className="info-box">
                    <i className="bx bx-envelope" />
                    <h3>Email Us</h3>
                    <p>zapinwhitehouse@gmail.com</p>
                    </div>
                </div>
                <div className="col-xl-3 col-lg-4 mt-4" data-aos="fade-up" data-aos-delay={200}>
                    <div className="info-box">
                    <i className="bx bx-phone-call" />
                    <h3>Call Us</h3>
                    <p>0812 6602 4020</p>
                    </div>
                </div>
                </div>
                
            </div>
            </section>{/* End Contact Section */}
        </div>
    )
}

export default Contact
