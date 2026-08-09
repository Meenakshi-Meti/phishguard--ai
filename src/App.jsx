import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Scanner from "./components/Scanner";
import EmailAnalyzer from "./components/EmailAnalyzer";
import ThreatDashboard from "./components/ThreatDashboard";
import AIInsights from "./components/AIInsights";
import Features from "./components/Features";


import Background from "./components/Background";


function App() {

  return (
    <div className="app">
      <Background />
      <Navbar />
      <main>
        <Hero />
        <Scanner />
        <EmailAnalyzer />
        <ThreatDashboard />
        <AIInsights />
        <Features />
      </main>
    </div>
  );
}

export default App;