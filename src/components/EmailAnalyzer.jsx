import React, { useState } from "react";
import "./EmailAnalyzer.css";

import {
  FaEnvelope,
  FaUserShield,
  FaTriangleExclamation,
  FaShieldAlt,
} from "react-icons/fa6";

function EmailAnalyzer() {
  const [email] = useState({

    sender:
      "security@microsoft-support-login.com",

    subject:
      "Your Microsoft account will be suspended",

    date:
      "Today • 10:45 AM",

    body:

`Dear User,

We detected unusual activity on your Microsoft account.

To avoid permanent suspension, verify your account immediately.

Click the secure link below.

https://microsoft-login-verification-security.com

Failure to verify within 12 hours may result in account deletion.

Regards,

Microsoft Security Team`

  });

  const [analysis] = useState({
  riskScore: 92,

  threatLevel: "HIGH",

  confidence: 98,

  verdict:
    "This email is highly suspicious. The sender imitates Microsoft's branding, creates urgency, and redirects users to a fake login domain.",

  indicators: [
    "Suspicious sender domain",
    "Urgent language",
    "External login link",
    "Brand impersonation",
    "Account suspension threat",
  ],

  recommendations: [
    "Do not click the link.",
    "Block the sender.",
    "Report the email as phishing.",
    "Delete the email immediately.",
  ],

  similarEmails: [
    {
      id: 1,
      subject: "Microsoft Password Reset",
      score: "96%",
    },
    {
      id: 2,
      subject: "Office365 Login Verification",
      score: "94%",
    },
    {
      id: 3,
      subject: "Outlook Security Alert",
      score: "91%",
    },
  ],
});


  return (

    <section className="email-analyzer">
      <div className="email-heading">
        <span>
          <FaShieldAlt />
          AI EMAIL ANALYZER
        </span>

        <h2>Email Threat Analysis</h2>

        <p>

          Our AI inspects sender identity, phishing
          language, malicious URLs and social engineering
          patterns before generating a security report.

        </p>

      </div>
      <div className="email-container">
        <div className="email-left">
          <div className="email-card">
            <div className="card-title">
              <FaUserShield />
              <h3>Sender</h3>
            </div>

            <p>{email.sender}</p>

          </div>
          <div className="email-card">
            <div className="card-title">
              <FaEnvelope />
              <h3>Subject</h3>
            </div>

            <p>{email.subject}</p>

          </div>
          <div className="email-card">
            <div className="card-title">
              <FaTriangleExclamation />
              <h3>Date</h3>
            </div>

            <p>{email.date}</p>

          </div>

          <div className="email-body">
            <h3>Email Content</h3>
            <pre>
              {email.body}
            </pre>

          </div>

        </div>

        <div className="email-right">
          <div className="email-right">
  <div className="analysis-card">
    <h3>Risk Score</h3>
    <div className="risk-circle">
      {analysis.riskScore}
      <span>%</span>
    </div>

  </div>

  <div className="analysis-card">
    <h3>Threat Level</h3>
    <div className="threat-badge">
      {analysis.threatLevel}
    </div>

    <p>

      Confidence

      <strong>

        {" "}

        {analysis.confidence}%

      </strong>

    </p>

  </div>

  <div className="analysis-card">
    <h3>AI Verdict</h3>
    <p>
      {analysis.verdict}
    </p>
  </div>

  <div className="analysis-card">
    <h3>Suspicious Indicators</h3>
    <ul>
      {analysis.indicators.map((item, index) => (
        <li key={index}>
          ⚠ {item}
        </li>
      ))}

    </ul>

  </div>


  <div className="analysis-card">
    <h3>Recommended Actions</h3>
    <ul>
      {analysis.recommendations.map((item, index) => (
        <li key={index}>
          ✅ {item}
        </li>

      ))}

    </ul>

  </div>
  <div className="analysis-card">
    <h3>Similar Fraud Emails</h3>
    {
      analysis.similarEmails.map((mail) => (
        <div
          className="similar-email"
          key={mail.id}
        >
          <span>
            {mail.subject}
          </span>
          <strong>
            {mail.score}
          </strong>
        </div>
      ))
    }
  </div>
</div>

  <div className="pulse-circle"></div>
    <h2>
     Waiting for Analysis
      </h2>
     <p> Connect this component with the
        Scanner module.
      <br />
        Once the user clicks Analyze,
        the AI report will appear here.
      </p>
          </div>
        </div>
    </section>
  );

}

export default EmailAnalyzer;