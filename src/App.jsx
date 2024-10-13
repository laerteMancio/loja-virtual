import { useState } from "react";

import "./App.css";

//images
import logoLogin from "../src/assets/icone-login.svg";
import carrinho from "../src/assets/carrinho.svg";
import bolsa1 from "../src/assets/produtos/bolsa-1.jpg";
import bolsa2 from "../src/assets/produtos/bolsa-2.jpg";
import bolsa3 from "../src/assets/produtos/bolsa-3.jpg";

function App() {
  return (
    <>
      <form className="grid-container">
        <header className="header">
          <div className="container-menus">
            <div className="menu-principal">
              <ul>
                <li className="caixa-logo">Loja virtual</li>
                <li className="caixa-input-pesquisa">
                  <input type="text" />
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

        <main className="content">
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
          </div>
          <div className="container-texto">
            <span>Estilo na mão, confiança em cada passo</span>
          </div>
        </main>

        <footer className="footer">footer</footer>
      </form>
    </>
  );
}

export default App;
