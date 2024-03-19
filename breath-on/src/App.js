import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TimerSection from "./components/TimerSection";
import { ThemeProvider } from "./context/ThemeContext";

function App() {
  return (
    <Router>
      <ThemeProvider>
        <main>
          <Navbar />
          <div className="content-wrapper">
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/timer" element={<TimerSection />} />
            </Routes>
          </div>
          <Footer />
        </main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
