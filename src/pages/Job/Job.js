import React from "react";
import { Link } from "react-router-dom";

const Job = () => {
  return (
    <>
      <section id="JoB" className="services section-bg job-box">
        <div className="container" data-aos="fade-up">
          <div className="job-row">
            <diV className="job-wrap">
              <div className="job-img-box">
                <img src="app.png" alt="App" className="img-fluid" />
              </div>
              <div className="job-content">
                <h1>
                  Download <span>Orbit Job</span> app and find your dream job
                </h1>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy
                </p>
                <div className="right-job-box">
                  <div className="img-list">
                    <div className="img-item">
                      <Link to="" className="logo me-auto">
                        <img
                          src="/playstore.png"
                          alt="orbitjob"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                    <div className="img-item">
                      <Link to="" className="logo me-auto">
                        <img
                          src="/app-store.png"
                          alt="orbitjob"
                          className="img-fluid"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </diV>
          </div>
        </div>
      </section>
    </>
  );
};
export default Job;
