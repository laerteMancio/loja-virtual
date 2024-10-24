import "./Sobre.css";

//images
import img1 from "../src/assets/sobre/img1.jpg";
import img2 from "../src/assets/sobre/img2.jpg";

const Sobre = () => {
  return (
    <div className="grid-container">
      {/* Inicio conteudo */}
      <div className="content-sobre">
        <div className="content-1-sobre">
          <p>
            Bem-vindo à Estilo de Mão, onde moda, praticidade e
            qualidade se encontram em cada detalhe. Fundada com a paixão por
            oferecer bolsas que refletem personalidade e sofisticação, nossa
            missão é proporcionar a cada cliente não apenas um acessório, mas
            uma extensão do seu estilo de vida.
          </p>
        </div>
        <div className="content-2-sobre">
          <div className="imagem-sobre-1">
            <img src={img1} alt="sobre-1" />
          </div>
        </div>
        <div className="content-3-sobre">
          <div className="imagem-sobre-3">
            <img src={img2} alt="sobre-3" />
          </div>

          <p>
            Na Estilo de Mão, acreditamos que uma bolsa é muito mais do que um
            simples item de moda. Ela carrega histórias, experiências e momentos
            importantes do dia a dia. Por isso, nos dedicamos a criar e
            selecionar peças que aliam design inovador, materiais de alta
            qualidade e funcionalidade, garantindo que cada uma de nossas bolsas
            seja o complemento perfeito para qualquer ocasião.
          </p>
        </div>
      </div>
      {/* Fim conteudo */}
    </div>
  );
};

export default Sobre;
