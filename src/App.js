import { useState, useEffect } from "react";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./pages/Banner/Banner";
import Logo from "./assets/images/logo.png";
import React from "react";
import Language from "./component/Language";

function App() {
  //   menu reponsive
  const [menuOpen, setMenuOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 90);
    });
  }, []);

  return (
    <>
      {/* <!-- ======= Header ======= --> */}
      <header id="header" className={scroll ? "fixed-top" : "scroll-header"}>
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="" className="logo me-auto">
              {" "}
              <img src={Logo} alt="orbitjob" className="img-fluid" />
            </Link>
          </h1>
          <nav id="navbar" className="navbar">
            <ul className={menuOpen ? "navbar-mobile" : ""}>
              <li>
                <NavLink className="nav-link scrollto " to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/MyJobs">
                  My Jobs
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/Subscribe">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    id="Group_15051"
                    data-name="Group 15051"
                    width="20"
                    height="20"
                    viewBox="0 0 20 20"
                  >
                    <path
                      id="Path_20182"
                      data-name="Path 20182"
                      d="M0,0H20V20H0Z"
                      fill="none"
                    />
                    <path
                      id="Path_20183"
                      data-name="Path 20183"
                      d="M16.4,14.143H18v1.619H2V14.143H3.6V8.476a6.4,6.4,0,1,1,12.8,0Zm-1.6,0V8.476a4.8,4.8,0,1,0-9.6,0v5.667ZM7.6,17.381h4.8V19H7.6Z"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="/Signin">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14.549"
                    height="18.2"
                    viewBox="0 0 14.549 18.2"
                  >
                    <g
                      id="Iconly-Light-Outline-Profile"
                      transform="translate(0.1 0.1)"
                    >
                      <g id="Profile" transform="translate(0.001 0)">
                        <path
                          id="Union_22"
                          data-name="Union 22"
                          d="M0,14.651c0-2.986,4.1-3.331,7.176-3.331,1.775,0,7.173,0,7.173,3.349,0,2.986-4.094,3.331-7.173,3.331C5.4,18,0,18,0,14.651Zm1.359,0c0,1.321,1.957,1.99,5.817,1.99s5.815-.662,5.815-1.972-1.956-1.99-5.815-1.99S1.358,13.343,1.358,14.651ZM7.146,9.619a4.823,4.823,0,1,1,.029,0ZM3.657,4.811A3.509,3.509,0,0,0,7.149,8.327l.026.647V8.327A3.517,3.517,0,1,0,3.657,4.811Z"
                          transform="translate(0 0)"
                          stroke="#000"
                          stroke-width="0.2"
                        />
                      </g>
                    </g>
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink className="getstarted scrollto" to="ForEmployer">
                  For Employer{" "}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="9.071"
                    height="14.844"
                    viewBox="0 0 9.071 14.844"
                  >
                    <path
                      id="Path_20177"
                      data-name="Path 20177"
                      d="M13.995,13.058,8.222,7.285,9.871,5.636l7.422,7.422L9.871,20.48,8.222,18.831Z"
                      transform="translate(-8.222 -5.636)"
                    />
                  </svg>
                </NavLink>
              </li>
              <li>
                <NavLink>
                  <Language />
                </NavLink>
              </li>
            </ul>
            <div
              className="menu-mobile"
              onClick={() => {
                setMenuOpen(!menuOpen);
              }}
            >
              <i className="bi bi-list mobile-nav-toggle"></i>
            </div>
          </nav>
          {/* <!-- .navbar --> */}
        </div>
      </header>
      <Banner />
      {/* <!-- End Header --> */}
    </>
  );
}

export default App;
