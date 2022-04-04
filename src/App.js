import Navbar from "./components/Navbar";
import Header from "./components/Header";
import MapView from "./components/MapView";
import Home from "./components/Home";
import About from "./components/About";
import Team from "./components/Team";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/team" element={<Team />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
