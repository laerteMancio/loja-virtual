import "./Footer.css"

const Footer = () => {
  return (
    
      <div className="footer">
        <label className="footer-1">
          <span>Se inscreva para receber nossas novidades!</span>
          <input className="newsInput" type="text" />
          <input className="submitInput" type="button" value="Enviar" />
        </label>

        <div className="footer-2">
          <div className="footer-2-colunas">
            <span>facebook</span>
            <span>instagram</span>
          </div>
          <div className="footer-2-colunas">
            <span>Sobre nós</span>
            <span>contato</span>
          </div>
          <div className="footer-2-colunas">
            <span>Termos</span>
            <span>Privacidade</span>
            <span>Cookies</span>
            <span>Licença</span>
          </div>
        </div>
      </div>
    
  );
};

export default Footer;
