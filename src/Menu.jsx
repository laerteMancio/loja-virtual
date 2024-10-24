import { Link } from 'react-router-dom';

//imagens menu
import logoLogin from "../src/assets/icone-login.svg";
import carrinho from "../src/assets/carrinho.svg";

import "./Menu.css";

const Menu = () => {
  return (
    <div className="container-menus">
      <div className="menu-principal">
        <ul>
          <li className="caixa-logo">Loja virtual</li>
          <div className="menu-atalhos">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/sobre">Sobre</Link></li>
          <li><Link to="/sobre">Produtos</Link></li>
        </ul>
      </div>
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
     
    </div>
  );
};

export default Menu;
