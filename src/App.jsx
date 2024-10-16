import "./App.css";

import { useEffect, useState } from "react";

//images
import logoLogin from "../src/assets/icone-login.svg";
import carrinho from "../src/assets/carrinho.svg";
import bolsa1 from "../src/assets/produtos/bolsa-1.jpg";
import bolsa2 from "../src/assets/produtos/bolsa-2.jpg";
import bolsa3 from "../src/assets/produtos/bolsa-3.jpg";

//components
import Loading from "./Loading";

function App() {
  const [verificaGridContainer, setVerificaGridContainer] = useState(
    "grid-container-sumir"
  );

  const [telaLoading, setTelaLoading] = useState("");

  const [header, setHeader] = useState("header");
  const [content, setContent] = useState("content");

  useEffect(() => {
    const handleLoad = () => {
      
      setTelaLoading("aparecer-loading");  
      
      setTimeout(() => {
        document.body.style.overflow = "auto"; 
        setTelaLoading("sumir-loading");
        setVerificaGridContainer("grid-container-aparecer")
      }, 1000);
    };  
    
    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }  
    
    return () => window.removeEventListener("load", handleLoad);
  }, []);
  

  return (
    <>
      <div className="container">
        <div className={telaLoading}>
          <Loading />
        </div>

        <form className={verificaGridContainer}>
          <header className={header}>
            <div className="container-menus">
              <div className="menu-principal">
                <ul>
                  <li className="caixa-logo">Loja virtual</li>
                  <li className="caixa-input-pesquisa">
                    <input name="barra de pesquisa" type="text" />
                  </li>
                  <li>
                    <div className="container-usuario">
                      <div className="caixa-usuario">
                        <img src={logoLogin} alt="logo-login" />
                      </div>
                      <div className="caixa-entrar-cadastrar">
                        <span>Entre ou Cadastre-se</span>
                      </div>
                    </div>
                  </li>
                  <div className="caixa-carrinho">
                    <img src={carrinho} alt="carrinho" />
                  </div>
                </ul>
              </div>
              <div className="menu-atalhos">
                <ul>
                  <li>Home</li>
                  <li>Sobre</li>
                  <li>Produtos</li>
                </ul>
              </div>
            </div>
          </header>

          <div className={content}>
            <div className="container-apresentacao">
              <div className="caixas-apresentacao-1">
                <img src={bolsa1} alt="produto1" />
              </div>
              <div className="caixas-apresentacao-2">
                <img src={bolsa2} alt="produto2" />
              </div>
              <div className="caixas-apresentacao-3">
                <img src={bolsa3} alt="produto3" />
              </div>
              <div className="container-texto">
                <p>Estilo na mão, confiança em cada passo!</p>
              </div>
            </div>
          </div>

          <div className="content2">teste</div>

          <footer className="footer">footer</footer>
        </form>
      </div>
    </>
  );
}

export default App;
