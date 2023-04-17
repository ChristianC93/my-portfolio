import React from "react";
import Home from "./components/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./components/Project";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Home /> } />
        <Route path="/project" element={ <Project /> } />
        <Route path="/about" element={ <About /> } />
        <Route path="/contact" element={ <Contact /> } />
      </Routes>
    </div>
  );
}

export default App;
