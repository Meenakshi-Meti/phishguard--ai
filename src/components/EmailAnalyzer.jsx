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
          <div className="analysis-placeholder">
            <div className="pulse-circle"></div>
            <h2>
              Waiting for Analysis
            </h2>

            <p>
              Connect this component with the
              Scanner module.
              <br />
              Once the user clicks Analyze,
              the AI report will appear here.
            </p>

          </div>
        </div>
      </div>
    </section>
  );

}

export default EmailAnalyzer;