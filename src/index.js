import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

// Routing
import { BrowserRouter as Router } from "react-router-dom";

// State Management (Recoil JS)
import { RecoilRoot } from "recoil";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Router>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </Router>
);
