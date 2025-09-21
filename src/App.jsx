import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Nav from "./components/Nav";
import SpaceBackground from "./components/SpaceBackground";
import Home from "./pages/Home";
import About from "./pages/About";
import Teams from "./pages/Teams";
import Events from "./pages/Events";
import Teamss from "./pages/test";
import EventPage from "./pages/EventPage";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Test1 from "./pages/test2";

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
            <Route path="/t1" element={<Test1/>}/>
            <Route path="/team" element={<Teams/>}/>
            <Route path="/event" element={<Events/>}/>
            <Route path="/event1" element={<EventPage/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/contact" element={<Contact/>}/>
          </Route>
        </Routes>
      </div>
    </Router>
  );
}
