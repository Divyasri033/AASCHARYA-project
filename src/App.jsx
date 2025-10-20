import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Listen from "./Components/Listen";
import More from "./Components/More";
import Navbar from "./Components/Nav";
import Videos from "./Components/Videos";
const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar */}
        <Navbar />
        {/* Page content */}
        <div style={{ padding: "20px" }}>
          <Routes>
        <Route path="/" element={<Home/>} />
      <Route path="/listen" element={<Listen />} />  
        <Route path="/more" element={<More />} />
        <Route path="/" element={<Navbar />} />
        <Route path="/videos" element={<Videos/>} />
          </Routes>
           </div>
      </div>
    </Router>
  );
};

export default App;