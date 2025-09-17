import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom"
// import Layout from "./components/Layout";
import Nav from "./components/Nav";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
            <Route path="/" element={<Nav/>} >  
          </Route>
        </Routes>
      </Router>
    </>
  )

}
