import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Redirecionamentos from "./Redirecionamentos";
import { BrowserRouter as Router } from "react-router-dom";
import "./Main.css";

import Menu from "./Menu";
import Footer from "./Footer";

createRoot(document.getElementById("root")).render(
  <Router>
    <StrictMode>
      <div className="main-container">
        <div className="header-grid">
          <Menu/>
        </div>
        <div className="redirecs-grid" >
          <Redirecionamentos />
        </div>
        
        <div className="footer-grid"  >
          <Footer />
        </div>
        
      </div>
    </StrictMode>
    ,
  </Router>
);
