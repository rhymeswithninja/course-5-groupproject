// import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./Pages/About"
import Work from "./Pages/Work";
import Contact from "./Pages/Contact";
import "./App.css";

function App() {
  return (
    <>
      <h1>Nav Bar</h1>
      
      <Router>
        {/* <Navbar /> */}
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
      
    </>
  );
}

export default App;
