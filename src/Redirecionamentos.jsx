// components
import App from "../src/App";
import Loading from "./Loading";
import Sobre from "./Sobre";

// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";






const Redirecionamentos = () => { 
  
  return (    
      <div>        
        <Routes>
          <Route path="/" element={<Loading />} />          
          <Route path="/home" element={<App/>} />
          <Route path="/sobre" element={<Sobre/>} />          
        </Routes>         
      </div>
      
    
  );
};

export default Redirecionamentos;
