import React, { useEffect, useState } from "react";

const messages = [
  "Initializing PhishGuardAI...",
  "Loading Threat Intelligence...",
  "Connecting to Secure Servers...",
  "Starting AI Engine...",
  "System Ready ✓",
];

function BootSequence({ onComplete }) {
  const [currentMessage, setCurrentMessage] = useState(0);

  useEffect(() => {
    
    const timer = setInterval(() => {
      setCurrentMessage((prev) => {
        if (prev === messages.length - 1) {
          clearInterval(timer);
          setTimeout(() => {
            if (onComplete) {
              onComplete();
            }
          }, 800);

          return prev;
        }
        return prev + 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <div className="boot-screen">

      <div className="boot-box">

        <h1 className="boot-title">
          PHISHGUARD<span>AI</span>
        </h1>

        <p className="boot-message">
          {messages[currentMessage]}
        </p>

        <div className="loading-bar">

          <div
            className="loading-fill"
            style={{
              width: `${((currentMessage + 1) / messages.length) * 100}%`,
            }}
          ></div>

        </div>

      </div>

    </div>
  );
}

export default BootSequence;