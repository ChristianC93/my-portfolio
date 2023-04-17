import React from "react";
import Home from "./routes/Home";
import { Routes, Route } from "react-router-dom";
import Project from "./routes/Project";
import About from "./routes/About";
import Contact from "./routes/Contact";

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
