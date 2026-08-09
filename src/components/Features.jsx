import React from "react";
import "./Features.css";

import {
  FaShieldHalved,
  FaRobot,
  FaGlobe,
  FaLink,
  FaChartLine,
  FaEnvelope,
  FaBolt,
  FaDatabase,
} from "react-icons/fa6";


function Features() {

  const features = [
    {
      icon: <FaShieldHalved />,
      title: "AI Threat Detection",
      description:
        "Advanced AI analyzes emails, URLs, and suspicious content to identify potential phishing attacks.",
      color: "cyan",
    },

    {
      icon: <FaRobot />,
      title: "Intelligent Analysis",
      description:
        "PhishGuard AI studies multiple signals and patterns instead of relying on a single detection rule.",
      color: "purple",
    },

    {
      icon: <FaGlobe />,
      title: "URL Protection",
      description:
        "Analyze suspicious links and identify malicious domains, redirects, and fake login pages.",
      color: "blue",
    },

    {
      icon: <FaEnvelope />,
      title: "Email Security",
      description:
        "Inspect sender information, email content, suspicious language, and social engineering patterns.",
      color: "green",
    },

    {
      icon: <FaChartLine />,
      title: "Threat Intelligence",
      description:
        "Visualize security activity through real-time threat statistics and intelligent security insights.",
      color: "orange",
    },

    {
      icon: <FaDatabase />,
      title: "Threat Database",
      description:
        "Compare suspicious activity against known threat patterns and continuously improve detection.",
      color: "red",
    },
  ];


  return (
    <section className="features" id="features">

      {/* ==============================
          SECTION HEADER
      ============================== */}

      <div className="features-header">

        <span className="features-label">
          <FaBolt />
          POWERFUL SECURITY
        </span>

        <h2>
          Built to Detect.
          <span> Designed to Protect.</span>
        </h2>

        <p>
          PhishGuard AI combines intelligent analysis,
          threat intelligence, and real-time monitoring
          to help identify phishing threats before they
          become a problem.
        </p>

      </div>


      {/* ==============================
          FEATURES GRID
      ============================== */}

      <div className="features-grid">

        {features.map((feature, index) => (

          <div
            className={`feature-card ${feature.color}`}
            key={index}
          >

            {/* Card glow */}

            <div className="feature-glow"></div>


            {/* Icon */}

            <div className="feature-icon">
              {feature.icon}
            </div>


            {/* Number */}

            <span className="feature-number">
              0{index + 1}
            </span>


            {/* Content */}

            <div className="feature-content">

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>


            {/* Bottom indicator */}

            <div className="feature-line">
              <span></span>
            </div>

          </div>

        ))}

      </div>


      {/* ==============================
          BOTTOM SECURITY STRIP
      ============================== */}

      <div className="features-security">

        <div className="security-icon">
          <FaShieldHalved />
        </div>

        <div className="security-text">

          <strong>
            Multi-Layered AI Protection
          </strong>

          <span>
            Every scan evaluates multiple security
            signals before generating a threat score.
          </span>

        </div>

        <div className="security-status">

          <span className="security-dot"></span>

          SYSTEM PROTECTED

        </div>

      </div>

    </section>
  );
}


export default Features;