import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Scanner from "./components/Scanner";
import ThreatDashboard from "./components/ThreatDashboard";
import EmailAnalyzer from "./components/EmailAnalyzer";
import AIInsights from "./components/AIInsights";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Background from "./components/Background";

function App() {
  return (
    <div className="app">
      <Background />

      <Navbar />

      <main>
        <Hero />

        <Scanner />

        <ThreatDashboard />

        <EmailAnalyzer />

        <AIInsights />

        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;