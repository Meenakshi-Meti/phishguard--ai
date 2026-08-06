import { useState } from "react";
import BootSequence from "./BootSequence";
import Globe from "./Globe";
import Stats from "./Stats";
import Particles from "./Particles";

import "./Hero.css";

function Hero() {

    const [loaded, setLoaded] = useState(false);

    if (!loaded) {
        return <BootSequence onComplete={() => setLoaded(true)} />;
    }

    return (
    <section className="hero">

        <Particles />

        <div className="hero-container">

            {/* Left Side */}

            <div className="hero-left">

                <div className="hero-tag">
                    AI Powered Security
                </div>

                <h1>
                    Detect
                    <span> Phishing </span>
                    Before It Happens
                </h1>

                <p>
                    AI-powered phishing detection platform that scans URLs,
                    emails, files, and QR codes to protect users from cyber
                    attacks in real time.
                </p>

                <div className="hero-buttons">

                    <button className="primary-btn">
                        Start Scan
                    </button>

                    <button className="secondary-btn">
                        Learn More
                    </button>

                </div>

            </div>

            {/* Right Side */}

            <div className="hero-right">

                <div className="hero-glow"></div>

                <Globe />

            </div>

        </div>

        <Stats />

    </section>
);
}

