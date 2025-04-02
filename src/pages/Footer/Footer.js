import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <section id="footer" className="footer section-bg">
        <div className="container" data-aos="fade-up">
          <div className="row">
            <div className="footer-list col-xl-4 col-md-3 d-flex align-items-stretch flex-wrap">
              <Link to="" className="logo me-auto">
                <img src="/logo.png" alt="orbitjob" className="img-fluid" />
              </Link>
              <div className="follow">
                <p>Follow us on</p>
                <div className="social-icon">
                  <Link to="">
                    <i class="bi bi-instagram"></i>
                  </Link>
                  <Link to="">
                    <i class="bi bi-linkedin"></i>
                  </Link>
                </div>
              </div>
            </div>
            <div className="footer-list col-xl-4 col-md-3 d-flex align-items-stretch flex-wrap">
              <p>Connect with us</p>
              <Link
                to="mailto:info@orbitjobs.id"
                className="flex gap-1 mb-2 hover:text-primary md:justify-start justify-center cursor-pointer"
              >
                <i class="bi bi-envelope"></i>
                <p>info@orbitjobs.id</p>
              </Link>
              <Link
                to="+62 811-1921-8222"
                className="flex gap-1 mb-2 hover:text-primary md:justify-start justify-center cursor-pointer"
              >
                <i class="bi bi-whatsapp"></i>
                <p>+62 811-1921-8222</p>
              </Link>
            </div>
            <div className="footer-list col-xl-2 col-md-3 d-flex align-items-stretch flex-wrap">
              <Link to="">Terms & Conditions</Link>
              <Link to="">Privacy Policy</Link>
              <Link to="">About Us</Link>
              <Link to="">FAQ</Link>
            </div>
            <div className="footer-list col-xl-2 col-md-3 d-flex align-items-stretch flex-wrap footer-last-child">
              <div>
                <Link to="">Blogs</Link>
                <Link to="">For Seeker</Link>
                <Link to="">For Employer</Link>
              </div>
            </div>
            <div className="footer-bottom col-xl-12 col-md-12">
              <p>
                ©2022 <a href="https://example.com">Orbit Jobs</a>All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
