import { motion } from "framer-motion";
import { useRef } from "react";

export default function FeatureCard({ feature }) {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 18;
    const rotateX = ((y / rect.height) - 0.5) * -18;
    card.style.transform = `
        perspective(1000px)
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        scale(1.04)
      `;
    card.style.setProperty("--x", `${x}px`);
    card.style.setProperty("--y", `${y}px`);
  };
  const handleLeave = () => {
    const card = cardRef.current;
    card.style.transform = `
        perspective(1000px)
        rotateX(0deg)
        rotateY(0deg)
        scale(1)
      `;
  };
  const Icon = feature.icon;
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 100,
        scale: 0.8,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      viewport={{ once: true }}
      transition={{
        duration: 0.9,
        delay: feature.delay,
        ease: "easeOut",
      }}
      className={`feature-card ${feature.size}`}
      style={feature.position.desktop}
    >
      <div
        ref={cardRef}
        className="feature-card-inner"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleLeave}
      >
        <div
          className="mouse-glow"
          style={{
            background: `radial-gradient(circle at var(--x) var(--y),
            ${feature.accent}55,
            transparent 65%)`,
          }}
        />
        <div
          className="card-border"
          style={{
            boxShadow: `0 0 25px ${feature.accent}`,
          }}
        />
        <div
          className="icon-wrapper"
          style={{
            background: `${feature.accent}20`,
            color: feature.accent,
          }}
        >
          <Icon size={34} />
        </div>
        <h3>{feature.title}</h3>
        <p>{feature.description}</p>
      </div>
    </motion.div>
  );
}