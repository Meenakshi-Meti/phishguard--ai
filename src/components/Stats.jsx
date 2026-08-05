import React from "react";
import {
  FaShieldAlt,
  FaGlobe,
  FaBug,
  FaRobot,
} from "react-icons/fa";

const stats = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    number: "99.8%",
    title: "Detection Accuracy",
  },
  {
    id: 2,
    icon: <FaGlobe />,
    number: "120+",
    title: "Countries Protected",
  },
  {
    id: 3,
    icon: <FaBug />,
    number: "25K+",
    title: "Threats Blocked",
  },
  {
    id: 4,
    icon: <FaRobot />,
    number: "24/7",
    title: "AI Monitoring",
  },
];

function Stats() {
  return (
    <section className="stats-section">

      <div className="stats-container">

        {stats.map((item) => (

          <div className="stat-card" key={item.id}>

            <div className="stat-icon">
              {item.icon}
            </div>

            <h2>{item.number}</h2>

            <p>{item.title}</p>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Stats;