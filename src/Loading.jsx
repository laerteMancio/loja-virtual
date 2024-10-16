import React, { useState, useEffect } from "react";

import "./Loading.css";

function Loading() {
  

  return (
    <>
      <div className="container-loading">
        <span>Carregando</span>
        <span className="ponto">.</span>
        <span className="ponto">.</span>
        <span className="ponto">.</span>
      </div>
    </>
  );
}

export default Loading;
