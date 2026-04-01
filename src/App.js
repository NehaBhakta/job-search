import { useState, useEffect } from "react";
import "./App.css";
import { Link, NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Banner from "./pages/Banner/Banner";
// Fixed: use relative path for Logo
import Logo from "./assets/images/logo.png";
import React from "react";
import Language from "./component/Language";


function App() {
  // Menu responsive
  const [menuOpen, setMenuOpen] = useState(false);

  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => setScroll(window.scrollY > 90);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header id="header" className={scroll ? "fixed-top" : "scroll-header"}>
        <div className="container d-flex align-items-center">
          <h1 className="logo me-auto">
            <Link to="./" className="logo me-auto">
              <img src={Logo} alt="orbitjob" className="img-fluid" />
            </Link>
          </h1>

          <nav id="navbar" className="navbar">
            <ul className={menuOpen ? "navbar-mobile" : ""}>
              <li>
                <NavLink className="nav-link scrollto" to="./">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="./#/MyJobs">
                  My Jobs
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="./#/Subscribe">
                  Subscribe
                </NavLink>
              </li>
              <li>
                <NavLink className="nav-link scrollto" to="./#/Signin">
                  Sign In
                </NavLink>
              </li>
              <li>
                <NavLink className="getstarted scrollto" to="./#/ForEmployer">
                  For Employer
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
              onClick={() => setMenuOpen(!menuOpen)}
            >
              <i className="bi bi-list mobile-nav-toggle"></i>
            </div>
          </nav>
        </div>
      </header>

      {/* Banner section */}
      <Banner />
    </>
  );
}

export default App;
