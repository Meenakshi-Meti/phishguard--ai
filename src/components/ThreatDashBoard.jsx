import React, { useState } from "react";
import "./ThreatDashboard.css";

import {
  FaExclamationTriangle,
  FaShieldAlt,
  FaEnvelope,
  FaGlobe,
  FaLink,
  FaChartLine,
  FaDatabase,
  FaCheckCircle,
} from "react-icons/fa";


function ThreatDashboard() {

  const [activeTab, setActiveTab] = useState("overview");
  const stats = [
    {
      icon: <FaExclamationTriangle/>,
      value: "1,284",
      label: "Threats Detected",
      change: "+18.4%",
      color: "red",
    },

    {
      icon: <FaShieldAlt />,
      value: "98.7%",
      label: "Detection Accuracy",
      change: "+2.1%",
      color: "cyan",
    },

    {
      icon: <FaEnvelope />,
      value: "8,492",
      label: "Emails Analyzed",
      change: "+24.8%",
      color: "purple",
    },

    {
      icon: <FaGlobe />,
      value: "3,721",
      label: "URLs Scanned",
      change: "+14.2%",
      color: "green",
    },
  ];

  const threats = [
    {
      name: "Microsoft Account Phishing",
      type: "Email",
      risk: "Critical",
      score: 96,
      time: "2 min ago",
    },

    {
      name: "Suspicious Login Portal",
      type: "URL",
      risk: "High",
      score: 87,
      time: "8 min ago",
    },

    {
      name: "Fake Delivery Notification",
      type: "Email",
      risk: "High",
      score: 82,
      time: "14 min ago",
    },

    {
      name: "Malicious Redirect",
      type: "URL",
      risk: "Medium",
      score: 68,
      time: "21 min ago",
    },

    {
      name: "Suspicious Attachment",
      type: "File",
      risk: "Medium",
      score: 61,
      time: "35 min ago",
    },
  ];

  const getRiskClass = (risk) => {

    if (risk === "Critical") {
      return "risk-critical";
    }

    if (risk === "High") {
      return "risk-high";
    }

    return "risk-medium";
  };


  return (
    <section className="threat-dashboard" id="dashboard">
      <div className="dashboard-header">
        <div>
          <span className="dashboard-label">
            <FaChartLine />
            SECURITY INTELLIGENCE
          </span>

          <h2>
            Threat <span>Dashboard</span>
          </h2>

          <p>
            Monitor threats, analyze security activity,
            and track the performance of the PhishGuard AI
            detection engine.
          </p>

        </div>
        <div className="system-status">
          <span className="status-dot"></span>
          <div>
            <strong>AI ENGINE ONLINE</strong>
            <small>
              Real-time protection active
            </small>
          </div>
        </div>
      </div>
      <div className="dashboard-tabs">

        <button
          className={activeTab === "overview" ? "active" : ""}
          onClick={() => setActiveTab("overview")}
        >
          Overview
        </button>

        <button
          className={activeTab === "threats" ? "active" : ""}
          onClick={() => setActiveTab("threats")}
        >
          Threats
        </button>

        <button
          className={activeTab === "activity" ? "active" : ""}
          onClick={() => setActiveTab("activity")}
        >
          Activity
        </button>

      </div>

      {activeTab === "overview" && (
        <div className="dashboard-stats">
          {stats.map((stat, index) => (
            <div
              className={`stat-card ${stat.color}`}
              key={index}
            >
              <div className="stat-top">
                <div className="stat-icon">
                  {stat.icon}
                </div>
                <span className="stat-change">
                  {stat.change}
                </span>
              </div>
              <h3>
                {stat.value}
              </h3>
              <p>
                {stat.label}
              </p>
            </div>
          ))}

        </div>

      )}

      <div className="dashboard-grid">
        <div className="threat-panel">
          <div className="panel-header">
            <div>
              <span className="panel-label">
                LIVE MONITOR
              </span>

              <h3>
                Recent Threats
              </h3>
            </div>

            <div className="live-status">
              <span></span>
              LIVE
            </div>
          </div>

          <div className="threat-list">
            {threats.map((threat, index) => (
              <div
                className="threat-item"
                key={index}
              >

                <div className="threat-icon">
                  {threat.type === "Email" && (
                    <FaEnvelope />
                  )}

                  {threat.type === "URL" && (
                    <FaLink />
                  )}

                  {threat.type === "File" && (
                    <FaDatabase />
                  )}
                </div>

                <div className="threat-info">
                  <h4>
                    {threat.name}
                  </h4>

                  <span>
                    {threat.type} • {threat.time}
                  </span>

                </div>

                <div className="threat-risk">
                  <strong>
                    {threat.score}
                  </strong>
                  <span className={getRiskClass(threat.risk)}>
                    {threat.risk}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="security-panel">
          <div className="panel-header">
            <div>
              <span className="panel-label">
                AI SECURITY SCORE
              </span>
              <h3>
                Protection Level
              </h3>
            </div>

            <FaShieldHalved className="panel-icon" />
          </div>

          <div className="score-container">
            <div className="score-circle">
              <div className="score-inner">
                <strong>
                  98
                </strong>

                <span>
                  / 100
                </span>
              </div>
            </div>
          </div>

          <div className="score-status">
            <FaCircleCheck />
            <div>

              <strong>
                Excellent Protection
              </strong>

              <p>
                Your environment is currently
                protected against known threats.
              </p>

            </div>

          </div>

          <div className="security-metrics">
            <div className="metric-heading">
              <span>
                Threat Detection
              </span>
              <strong>
                98%
              </strong>
            </div>
            <div className="metric-bar">
              <span
                style={{ width: "98%" }}
              ></span>
            </div>

            <div className="metric-heading">
              <span>
                Response Speed
              </span>

              <strong>
                94%
              </strong>

            </div>
            <div className="metric-bar">

              <span
                style={{ width: "94%" }}
              ></span>

            </div>

            <div className="metric-heading">
              <span>
                AI Confidence
              </span>

              <strong>
                97%
              </strong>

            </div>
            <div className="metric-bar">
              <span
                style={{ width: "97%" }}
              ></span>
            </div>
          </div>
        </div>
      </div>

      <div className="dashboard-footer">
        <div className="footer-status">
          <FaCircleCheck />
          <div>
            <strong>
              Threat Intelligence Synced
            </strong>

            <span>
              Global threat database updated 32 seconds ago
            </span>
          </div>
        </div>

        <div className="database-status">
          <FaDatabase />
          <span>
            DATABASE ONLINE
          </span>
        </div>
      </div>
    </section>
  );
}


export default ThreatDashboard;