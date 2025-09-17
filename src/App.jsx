import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SpaceBackground from "./components/SpaceBackground";
import Home from "./pages/Home";

export default function App() {
  return (
    <Router>
      <SpaceBackground />
      <div className="relative z-10">
        <Routes>
          <Route path="/" element={<Nav />}>
            <Route index element={<Home />}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
