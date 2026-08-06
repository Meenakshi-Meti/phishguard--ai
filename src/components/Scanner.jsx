import React, { useState } from "react";
import "./Scanner.css";

import {
  FaGlobe,
  FaEnvelope,
  FaFileAlt,
  FaQrcode,
  FaShieldAlt,
  FaRobot,
} from "react-icons/fa";

function Scanner() {
  const [scanType, setScanType] = useState("URL");
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const handleAnalyze = () => {
    if (input.trim() === "") {
      alert("Please enter something to scan.");
      return;
    }

    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      alert(
        "Frontend Demo Complete ✅\n\nBackend AI analysis will be connected later."
      );
    }, 3000);
  };
  return (
    <section className="scanner-section" id="scanner">
      <div className="scanner-heading">
        <span>AI SECURITY ENGINE</span>
        <h2>Threat Scanner</h2>
        <p>
          Scan suspicious URLs, Emails, QR Codes and Files using
          PhishGuardAI's intelligent detection engine.
        </p>

      </div>
      <div className="scanner-container">
        <div className="scanner-left">   
          <div className="scanner-tabs">
            <button
              className={scanType === "URL" ? "active" : ""}
              onClick={() => setScanType("URL")}
            >
             <FaGlobe />
              URL
            </button>

            <button
              className={scanType === "Email" ? "active" : ""}
              onClick={() => setScanType("Email")}
            >
              <FaEnvelope />
              Email
            </button>

            <button
              className={scanType === "File" ? "active" : ""}
              onClick={() => setScanType("File")}
            >
              <FaFileAlt />
              File
            </button>

            <button
              className={scanType === "QR" ? "active" : ""}
              onClick={() => setScanType("QR")}
            >
              <FaQrcode />
              QR Code
            </button>

          </div>
          <textarea
            placeholder={`Paste your ${scanType} here...`}
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />


          <button
            className="analyze-btn"
            onClick={handleAnalyze}
            disabled={loading}
          >
            {loading ? "Analyzing..." : "Analyze Now"}
          </button>

        </div>

        <div className="scanner-right">
          <div className="scanner-card">
            <FaRobot className="scanner-icon" />
            <h3>AI Engine</h3>
            <p className="online">ONLINE</p>
          </div>

          <div className="scanner-card">
            <FaShieldAlt className="scanner-icon" />
            <h3>Detection Accuracy</h3>
            <h2>99.8%</h2>
          </div>

          <div className="scanner-card">
            <h3>Threats Blocked Today</h3>
            <h1>25,842</h1>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Scanner;