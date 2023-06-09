import React from "react";
import "./index.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects"; // Update path to Projects
import Contact from "./pages/Contact";


import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/Projects" element={<Projects />}
        />
        <Route path="/Contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;


