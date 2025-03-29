import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import Header from "./components/Header";
import Contact from "./components/Contact";

import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
        <Header />
        <Contact />
    </Router>
  </React.StrictMode>
);