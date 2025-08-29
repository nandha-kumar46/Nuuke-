import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Nuukeconomics from "./Nuukeconomics";
import Socialmedia from "./Socialmedia";
import Contact from "./Contact";

function Bodycontent() {
  return (
    <div className="body-container" style={{ minHeight: "100vh", padding: "20px",marginTop: "60px"}}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/nuukeconomics" element={<Nuukeconomics />} />
        <Route path="/socialmedia" element={<Socialmedia />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default Bodycontent;
