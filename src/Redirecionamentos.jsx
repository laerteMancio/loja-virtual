// components
import App from "../src/App";
import Loading from "./Loading";


// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";





const Redirecionamentos = () => { 
  
  return (    
      <div>        
        <Routes>
          <Route path="/" element={<Loading />} />          
          <Route path="/home" element={<App/>} />          
        </Routes>         
      </div>
      
    
  );
};

export default Redirecionamentos;
