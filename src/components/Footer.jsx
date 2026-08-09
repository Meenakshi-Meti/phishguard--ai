import React from "react";
import "./Footer.css";

import {
  FaShieldHalved,
  FaGithub,
  FaLinkedin,
  FaArrowUp,
  FaCircleCheck,
} from "react-icons/fa6";


function Footer() {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };


  return (
    <footer className="footer">
      <div className="footer-glow footer-glow-one"></div>
      <div className="footer-glow footer-glow-two"></div>
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo">
              <div className="footer-logo-icon">
                <FaShieldHalved />
              </div>

              <div>
                <h2>
                  Phish<span>Guard</span>
                </h2>

                <p>
                  AI-Powered Cyber Defense
                </p>
              </div>

            </div>


            <p className="footer-description">
              Intelligent phishing detection designed to
              identify suspicious emails, URLs and digital
              threats before they become security incidents.
            </p>


            <div className="footer-status">

              <span className="footer-status-dot"></span>

              <span>
                AI SECURITY ENGINE ONLINE
              </span>

            </div>

          </div>
          <div className="footer-links">

            <div className="footer-column">
              <h3>
                Platform
              </h3>

              <a href="#scanner">
                URL Scanner
              </a>

              <a href="#email-analyzer">
                Email Analyzer
              </a>

              <a href="#threat-dashboard">
                Threat Dashboard
              </a>

              <a href="#features">
                Features
              </a>

            </div>


            <div className="footer-column">

              <h3>
                Security
              </h3>

              <a href="#features">
                AI Detection
              </a>

              <a href="#features">
                Threat Intelligence
              </a>

              <a href="#features">
                Security Analysis
              </a>

              <a href="#features">
                Real-Time Monitoring
              </a>

            </div>


            <div className="footer-column">

              <h3>
                Resources
              </h3>

              <a href="#scanner">
                Scan a URL
              </a>

              <a href="#email-analyzer">
                Analyze Email
              </a>

              <a href="#threat-dashboard">
                Security Reports
              </a>

              <a href="#features">
                Learn More
              </a>

            </div>

          </div>

        </div>

        <div className="footer-security">

          <div className="security-item">

            <FaCircleCheck />

            <div>
              <strong>
                Protected
              </strong>

              <span>
                AI engine active
              </span>
            </div>

          </div>


          <div className="security-item">

            <FaShieldHalved />

            <div>
              <strong>
                Secure Analysis
              </strong>

              <span>
                Multi-layer threat detection
              </span>
            </div>

          </div>


          <div className="security-item">

            <FaCircleCheck />

            <div>
              <strong>
                Real-Time
              </strong>

              <span>
                Continuous monitoring
              </span>
            </div>

          </div>

        </div>
        <div className="footer-bottom">

          <div className="footer-copyright">

            <p>
              © 2026 <strong>PhishGuard AI</strong>.
              All rights reserved.
            </p>

            <span>
              Built for a safer digital world.
            </span>

          </div>


          <div className="footer-social">

            <a
              href="#"
              aria-label="GitHub"
            >
              <FaGithub />
            </a>

            <a
              href="#"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>

          </div>


          <button
            className="back-to-top"
            onClick={scrollToTop}
            aria-label="Back to top"
          >

            <FaArrowUp />

          </button>

        </div>

      </div>

    </footer>
  );
}


export default Footer;