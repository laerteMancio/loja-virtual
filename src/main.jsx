import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Redirecionamentos from "./Redirecionamentos";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <Redirecionamentos />
    </StrictMode>
    ,
  </Router>
);
