import "./ThreatDashboard.css";

import {
  FaShieldAlt,
  FaEnvelope,
  FaBug,
  FaDatabase,
  FaCheckCircle,
  FaTriangleExclamation,
} from "react-icons/fa";

function ThreatDashboard() {
  const stats = [
    {
      title: "Threat Score",
      value: "92%",
      icon: <FaShieldAlt />,
      color: "#ff4d6d",
    },
    {
      title: "Emails Scanned",
      value: "1,284",
      icon: <FaEnvelope />,
      color: "#00e5ff",
    },
    {
      title: "Threats Blocked",
      value: "387",
      icon: <FaBug />,
      color: "#7c3aed",
    },
    {
      title: "Detection Accuracy",
      value: "98%",
      icon: <FaCheckCircle />,
      color: "#00ff88",
    },
  ];

  const threatFeed = [
    {
      type: "Critical",
      message: "Fake Microsoft login page detected",
      time: "2 min ago",
    },
    {
      type: "Warning",
      message: "Suspicious ZIP attachment blocked",
      time: "9 min ago",
    },
    {
      type: "Safe",
      message: "Internal payroll email verified",
      time: "18 min ago",
    },
  ];

  return (
    <section className="dashboard">
      <div className="dashboard-header">
        <span>LIVE SECURITY MONITOR</span>
        <h2>Threat Dashboard</h2>
        <p>
          Monitor email threats, phishing activity and AI
          detection performance in real time.
        </p>

      </div>

      <div className="stats-grid">
        {stats.map((item, index) => (
          <div className="stat-card" key={index}>
            <div
              className="stat-icon"
              style={{ color: item.color }}
            >
              {item.icon}
            </div>
            <h3>{item.value}</h3>
            <p>{item.title}</p>
          </div>

        ))}

      </div>
      <div className="dashboard-grid">
        <div className="dashboard-card">
          <h3>AI Detection Confidence</h3>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: "98%" }}
            ></div>
          </div>
          <p>98% confidence on the latest scan.</p>
        </div>

        <div className="dashboard-card">
          <h3>Recent Threat Feed</h3>
          {threatFeed.map((item, index) => (
            <div className="feed-item" key={index}>
              <div>
                <strong>{item.type}</strong>
                <p>{item.message}</p>
              </div>
              <span>{item.time}</span>
            </div>
          ))}

        </div>
        <div className="dashboard-card">
          <h3>System Status</h3>
          <div className="status-item">
            <FaCheckCircle color="#00ff88" />
            AI Detection Engine Online
          </div>
          <div className="status-item">
            <FaCheckCircle color="#00ff88" />
            Blockchain Synced
          </div>
          <div className="status-item">
            <FaCheckCircle color="#00ff88" />
            Threat Database Updated
          </div>
          <div className="status-item">
            <FaDatabase color="#00e5ff" />
            Last Sync: 2 minutes ago
          </div>
        </div>
      </div>
    </section>
  );
}

export default ThreatDashboard;