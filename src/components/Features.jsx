import "./Features.css";

import {
  FaGlobe,
  FaEnvelope,
  FaFileShield,
  FaQrcode,
  FaRobot,
  FaLink,
  FaShieldAlt,
  FaChartLine,
} from "react-icons/fa";

function Features() {

  const features = [
    {
      icon: <FaGlobe />,
      title: "URL Threat Scanner",
      description:
        "Analyze suspicious URLs and detect malicious domains, redirects, and phishing websites.",
      tag: "WEB SECURITY",
      color: "cyan",
    },

    {
      icon: <FaEnvelope />,
      title: "Email Intelligence",
      description:
        "Inspect email content, sender identity, links, and social engineering patterns.",
      tag: "EMAIL SECURITY",
      color: "purple",
    },

    {
      icon: <FaFileShield />,
      title: "Malicious File Detection",
      description:
        "Identify suspicious attachments and potentially dangerous files before they are opened.",
      tag: "FILE SECURITY",
      color: "green",
    },

    {
      icon: <FaQrcode />,
      title: "QR Code Scanner",
      description:
        "Scan QR codes and identify hidden malicious URLs and suspicious redirects.",
      tag: "QR SECURITY",
      color: "pink",
    },

    {
      icon: <FaRobot />,
      title: "AI Threat Analysis",
      description:
        "Use intelligent analysis to understand why a message has been classified as suspicious.",
      tag: "AI ENGINE",
      color: "blue",
    },

    {
      icon: <FaLink />,
      title: "Blockchain Verification",
      description:
        "Compare detected phishing signatures with a tamper-resistant threat intelligence ledger.",
      tag: "BLOCKCHAIN",
      color: "orange",
    },

    {
      icon: <FaShieldAlt />,
      title: "Real-Time Protection",
      description:
        "Monitor incoming threats and provide instant alerts before users interact with them.",
      tag: "PROTECTION",
      color: "red",
    },

    {
      icon: <FaChartLine />,
      title: "Threat Intelligence",
      description:
        "Visualize threat activity, detection patterns, risk scores, and security trends.",
      tag: "ANALYTICS",
      color: "yellow",
    },
  ];

  return (
    <section className="features-section" id="features">
      <div className="features-header">
        <span className="features-label">
          <FaShieldAlt />
          PHISHGUARD AI CAPABILITIES
        </span>
        <h2>
          One Platform.
          <br />
          <span>Complete Threat Protection.</span>
        </h2>
        <p>
          PhishGuard AI combines artificial intelligence,
          threat intelligence, and security analysis into
          one unified protection system.
        </p>
      </div>

      <div className="features-grid">
        {features.map((feature, index) => (
          <div
            className={`feature-card ${feature.color}`}
            key={index}
          >
            <div className="feature-number">
              0{index + 1}
            </div>

            <div className="feature-icon">
              {feature.icon}
            </div>

            <div className="feature-content">
              <span className="feature-tag">
                {feature.tag}
              </span>

              <h3>
                {feature.title}
              </h3>

              <p>
                {feature.description}
              </p>

            </div>
            <div className="feature-arrow">
              →
            </div>
          </div>
        ))}

      </div>
      <div className="features-bottom">
        <div className="live-indicator"></div>
        <span>
          PHISHGUARD AI ENGINE
        </span>
        <p>
          Multiple security layers working together
          to identify threats before they reach you.
        </p>

      </div>

    </section>
  );
}

export default Features;