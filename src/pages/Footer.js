import React from 'react'

function Footer() {
    return (
        <div>
            {/* ======= Footer ======= */}
            <footer id="footer">
                <div className="footer-top">
                <div className="container">
                    <div className="row">
                    <div className="col-lg-2 col-md-6 footer-links">
                        <h4>Useful Links</h4>
                        <ul>
                        <li><i className="bx bx-chevron-right" /> <a href="#hero">Home</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#about">About us</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#service">Services</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#pricing">Pricing</a></li>
                        <li><i className="bx bx-chevron-right" /> <a href="#faq">Privacy policy</a></li>
                        </ul>
                    </div>
                    <div className="col-lg-4 col-md-6 footer-newsletter">
                        <h4>Mari tinggal diKos-kosan Zapin White House</h4>
                        <p>lokasi yang strategis dan fasilitas kos yang lengkap</p>
                        <div className="social-links text-center text-lg-right pt-3 pt-lg-0">
                        <a href="https://www.facebook.com/profile.php?id=100071481344901" className="facebook"><i className="bx bxl-facebook" /></a>
                        <a href="https://www.instagram.com/zapin_whitehouse/" className="instagram"><i className="bx bxl-instagram" /></a>
                        <a href="https://wa.wizard.id/54fafe" className="whatsapp"><i className="bx bxl-whatsapp" /></a>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="container d-lg-flex py-4">
                <div className="me-lg-auto text-center text-lg-start">
                    <div className="copyright">
                    © Copyright <strong><span>Zapin White House</span></strong>.
                    </div>
                </div>
                </div>
            </footer>{/* End Footer */}
        </div>
    )
}

export default Footer
