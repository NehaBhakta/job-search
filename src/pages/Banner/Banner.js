import React from "react";
import BannerAction from "../../component/BannerActions";
import BannerMiddleSection from "../../component/BannerMiddleSection";
import About from "../About/About";
import Featured from "../Featured/Featured";
import Companies from "../Companies/Companies";
import CompanyLogo from "../CompanyLogo/CompanyLogo";
import Job from "../Job/Job";
import Footer from "../Footer/Footer";

const Banner = () => {
  const x = 5;
  return (
    <>
      <section id="hero" className="d-flex align-items-center">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-7 d-flex flex-column justify-content-center pt-4 pt-lg-0 order-2 order-lg-1"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <BannerMiddleSection />
              <BannerAction />
            </div>
            <div
              className="col-lg-6 order-1 order-lg-2 hero-img"
              data-aos="zoom-in"
              data-aos-delay="200"
            ></div>
          </div>
        </div>
      </section>
      <About />
      <Featured />
      <Companies />
      <CompanyLogo />
      <Job />
      <Footer />
      {x === 6 ? "hii" : "byy"}
    </>
  );
};

export default Banner;
