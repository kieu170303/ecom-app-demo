// react-router-dom v6+ setup for Vite + React
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DemoPage1 from "./DemoPage1";
import DemoPage2 from "./DemoPage2";
import DemoPage3 from "./DemoPage3";
import DemoPage4 from "./DemoPage4";
import DemoPage5 from "./DemoPage5";
import DemoPage6 from "./DemoPage6";
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
      <Link to="/demo3" style={{ marginRight: 16 }}>
        Demo Page 3
      </Link>
      <Link to="/demo4" style={{ marginRight: 16 }}>
        Demo Page 4
      </Link>
      <Link to="/demo5" style={{ marginRight: 16 }}>
        Demo Page 5
      </Link>
      <Link to="/demo6">Demo Page 6</Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/demo1" element={<DemoPage1 />} />
      <Route path="/demo2" element={<DemoPage2 />} />
      <Route path="/demo3" element={<DemoPage3 />} />
      <Route path="/demo4" element={<DemoPage4 />} />
      <Route path="/demo5" element={<DemoPage5 />} />
      <Route path="/demo6" element={<DemoPage6 />} />
    </Routes>
  </Router>
);

export default Root;
