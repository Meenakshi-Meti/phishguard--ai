import React from "react";

const particleCount = 40;

function Particles() {
  return (
    <div className="particles-container">
      {[...Array(particleCount)].map((_, index) => (
        <span
          key={index}
          className="particle"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 8}s`,
            animationDuration: `${8 + Math.random() * 8}s`,
            width: `${2 + Math.random() * 5}px`,
            height: `${2 + Math.random() * 5}px`,
          }}
        />
      ))}
    </div>
  );
}

export default Particles;