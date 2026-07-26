import { motion } from "framer-motion";
import overviewData from "../../data/overviewData";
import FeatureCard from "./FeatureCard";
import CyberGlobe from "./CyberGlobe";
export default function Overview() {
  return (
    <section className="overview-section" id="overview">
      <div className="overview-grid"></div>
      <div className="blob blob-one"></div>
      <div className="blob blob-two"></div>
      <div className="blob blob-three"></div>
      <CyberGlobe />
      <motion.div
        className="overview-header"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
          
        <span className="overview-tag">
          WHY PHISHGUARDAI
        </span>
        <h2>
          Intelligent Protection
          <br />
          Against Modern
          <span> Cyber Threats</span>
        </h2>
        <p>
          PhishGuardAI combines Artificial Intelligence,
          Blockchain and Behaviour Analysis to detect,
          explain and prevent phishing attacks in real time.
        </p>

      </motion.div>
      <div className="cards-wrapper">
        {overviewData.map((feature) => (
          <FeatureCard
            key={feature.id}
            feature={feature}
          />
        ))}
      </div>
    </section>
  );
}