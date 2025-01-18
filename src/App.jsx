import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

const All = () => <h1>All Content</h1>;
const Music = () => <h1>Music Page</h1>;
const Comedy = () => <h1>Comedy Page</h1>;
const Drawing = () => <h1>Drawing Page</h1>;

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/music" element={<Music />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/drawing" element={<Drawing />} />
      </Routes>
    </Router>
  );
};

export default App;
