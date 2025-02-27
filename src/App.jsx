import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Blog from "./pages/Blog";
import All from "./pages/All";
import Music from "./pages/Music";
import Comedy from "./pages/Comedy";
import Drawing from "./pages/Drawing";

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/music" element={<Music />} />
        <Route path="/comedy" element={<Comedy />} />
        <Route path="/drawing" element={<Drawing />} />
        <Route path="/blog" element={<Blog />} />
      </Routes>
    </Router>
  );
};

export default App;
