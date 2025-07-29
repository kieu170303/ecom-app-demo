// react-router-dom v6+ setup for Vite + React
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DemoPage1 from "./DemoPage1";
import DemoPage2 from "./DemoPage2";
import DemoPage3 from "./DemoPage3";
import App from "./App";

const Root: React.FC = () => (
  <Router>
    <nav style={{ padding: 16, borderBottom: "1px solid #eee" }}>
      <Link to="/" style={{ marginRight: 16 }}>
        Home
      </Link>
      <Link to="/demo1" style={{ marginRight: 16 }}>
        Demo Page 1
      </Link>
      <Link to="/demo2" style={{ marginRight: 16 }}>
        Demo Page 2
      </Link>
      <Link to="/demo3">Demo Page 3</Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/demo1" element={<DemoPage1 />} />
      <Route path="/demo2" element={<DemoPage2 />} />
      <Route path="/demo3" element={<DemoPage3 />} />
    </Routes>
  </Router>
);

export default Root;
