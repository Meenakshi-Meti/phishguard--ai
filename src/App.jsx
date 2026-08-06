import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Scanner from "./components/Scanner";
import EmailAnalyzer from "./components/EmailAnalyzer";
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

        <Features />
      </main>

      <Footer />
    </div>
  );
}

export default App;