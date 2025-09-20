import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SpaceBackground from "./components/SpaceBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Events from "./pages/Events";
import Teamss from "./pages/test";

export default function App() {
  return (
    <Router>
      <SpaceBackground />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />}/>
            <Route path="/about" element={<About/>}/>
            <Route path="/tp" element={<Teamss/>}/>
            <Route path="/team" element={<Teams/>}/>
            <Route path="/event" element={<Events/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
