import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Footer from "./components/Footer";
import TextSection from "./components/TextSection";

function App() {
  return (
    <Router>
      <main className=" min-h-screen flex-col">
        <Navbar />
        <div className="content-wrapper">
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </div>
        <TextSection />

        <Footer />
      </main>
    </Router>
  );
}

export default App;
