// react-router-dom v6+ setup for Vite + React
import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import DemoPage1 from "./DemoPage1";
import DemoPage2 from "./DemoPage2";
import DemoPage3 from "./DemoPage3";
import DemoPage4 from "./DemoPage4";
import DemoPage5 from "./DemoPage5";
import DemoPage6 from "./DemoPage6";
import DemoPage7 from "./DemoPage7";
import DemoPage8 from "./DemoPage8";
import DemoPage9 from "./DemoPage9";
import DemoPage10 from "./DemoPage10";
import DemoPage11 from "./DemoPage11";
import DemoPage12 from "./DemoPage12";
import DemoPage13 from "./DemoPage13";
import DemoPage14 from "./DemoPage14";
import DemoPage15 from "./DemoPage15";
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
      <Link to="/demo6" style={{ marginRight: 16 }}>
        Demo Page 6
      </Link>
      <Link to="/demo7" style={{ marginRight: 16 }}>
        Demo Page 7
      </Link>
      <Link to="/demo8" style={{ marginRight: 16 }}>
        Demo Page 8
      </Link>
      <Link to="/demo9" style={{ marginRight: 16 }}>
        Demo Page 9
      </Link>
      <Link to="/demo10" style={{ marginRight: 16 }}>
        Demo Page 10
      </Link>
      <Link to="/demo11" style={{ marginRight: 16 }}>
        Demo Page 11
      </Link>
      <Link to="/demo12" style={{ marginRight: 16 }}>
        Demo Page 12
      </Link>
      <Link to="/demo13" style={{ marginRight: 16 }}>
        Demo Page 13
      </Link>
      <Link to="/demo14" style={{ marginRight: 16 }}>
        Demo Page 14
      </Link>
      <Link to="/demo15">Demo Page 15</Link>
    </nav>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/demo1" element={<DemoPage1 />} />
      <Route path="/demo2" element={<DemoPage2 />} />
      <Route path="/demo3" element={<DemoPage3 />} />
      <Route path="/demo4" element={<DemoPage4 />} />
      <Route path="/demo5" element={<DemoPage5 />} />
      <Route path="/demo6" element={<DemoPage6 />} />
      <Route path="/demo7" element={<DemoPage7 />} />
      <Route path="/demo8" element={<DemoPage8 />} />
      <Route path="/demo9" element={<DemoPage9 />} />
      <Route path="/demo10" element={<DemoPage10 />} />
      <Route path="/demo11" element={<DemoPage11 />} />
      <Route path="/demo12" element={<DemoPage12 />} />
      <Route path="/demo13" element={<DemoPage13 />} />
      <Route path="/demo14" element={<DemoPage14 />} />
      <Route path="/demo15" element={<DemoPage15 />} />
    </Routes>
  </Router>
);

export default Root;
