import "./AIInsights.css";

import {
  FaGlobe,
  FaLink,
  FaCheckCircle,
} from "react-icons/fa";

import {
  FaTriangleExclamation,
} from "react-icons/fa6";

function AIInsights() {

  const analysis = {
    threatLevel: "HIGH",

    confidence: 98,

    score: 92,

    explanation:
      "The email has been classified as HIGH RISK because it impersonates Microsoft's branding, contains urgency-based language, and redirects users to an external login page. Multiple phishing indicators were detected, making credential theft highly likely.",

    reasons: [
      {
        icon: <FaGlobe />,
        title: "Suspicious Domain",
        text: "The sender domain closely resembles Microsoft's official domain.",
      },

      {
        icon: <FaTriangleExclamation />,
        title: "Urgent Language",
        text: "The email pressures the recipient to act immediately.",
      },

      {
        icon: <FaLink />,
        title: "Malicious Link",
        text: "Contains an external login URL with phishing characteristics.",
      },

      {
        icon: <FaShieldAlt />,
        title: "Brand Impersonation",
        text: "Attempts to imitate Microsoft's security notifications.",
      },
    ],

    recommendations: [
      "Do not click any links.",
      "Delete the email immediately.",
      "Report the sender as phishing.",
      "Notify your security administrator.",
    ],
  };

  return (
    <section className="ai-section">
      <div className="ai-header">
        <span>
          <FaRobot />
          AI SECURITY ASSISTANT
        </span>
        <h2>AI Threat Insights</h2>
        <p>
          Understand why the email was flagged.
          Our AI explains every important phishing
          indicator in simple language.
        </p>
      </div>
      <div className="ai-container">
        <div className="ai-left">
          <div className="score-card">
            <h3>Threat Score</h3>
            <div className="score-circle">
              {analysis.score}
              <span>%</span>
            </div>
            <h2>{analysis.threatLevel}</h2>
            <p>
              AI Confidence
              <strong>
                {" "}
                {analysis.confidence}%
              </strong>
            </p>
          </div>
          <div className="recommend-card">
            <h3>
              <FaCheckCircle />
              Recommended Actions
            </h3>
            <ul>
              {analysis.recommendations.map((item, index) => (
                <li key={index}>
                  ✓ {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="ai-right">
          <div className="explanation-card">
            <h3>
              AI Explanation
            </h3>
            <p>
              {analysis.explanation}
            </p>
          </div>
          <div className="reason-grid">
            {
              analysis.reasons.map((reason, index) => (
                <div
                  className="reason-card"
                  key={index}
                >
                  <div className="reason-icon">
                    {reason.icon}
                  </div>
                  <h4>
                    {reason.title}
                  </h4>
                  <p>
                    {reason.text}
                  </p>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </section>
  );
}

export default AIInsights;