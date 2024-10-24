import "./App.css";

import { useEffect, useState } from "react";

//components
import Menu from "../src/Menu";

//imagens apresentacao
import bolsa1 from "../src/assets/produtos/bolsa-1.jpg";
import bolsa2 from "../src/assets/produtos/bolsa-2.jpg";
import bolsa3 from "../src/assets/produtos/bolsa-3.jpg";


function App() {
  const [palavraApresentacao, setPalavraApresentacao] =
    useState("palavra-sem-efeito");

  const [sobreEfeito, setSobreEfeito] = useState("sobre-sem-efeito");

  const [botaoLeiaMais, setBotaoLeiaMais] = useState("sumirInput");

  const sobreNos = [
    "Lorem",
    "ipsum",
    "dolor",
    "sit",
    "amet,",
    "consectetur",
    "adipisicing",
    "elit.",
    "Velit,",
    "culpa",
    "recusandae,",
    "porro",
    "dolores,",
    "sint",
    "possimus",
    "iusto",
    "optio",
    "maiores",
    "repellendus",
    "maxime",
    "atque",
    "aliquid",
    "voluptates",
    "veniam",
    "ducimus",
    "itaque",
    "non",
    "ea",
    "quas",
    "vero!",
  ];

  const [content1, setContent1] = useState("content1");
  const [content2, setContent2] = useState("content2");
  const [content3, setContent3] = useState("content3");
  const [content4, setContent4] = useState("content4");

  const [cx1, setCx1] = useState("cx1-exibir");
  const [cx2, setCx2] = useState("cx2-exibir");
  const [cx3, setCx3] = useState("cx3-exibir");

  const [botaoVejaMais1, setBotaoVejaMais1] = useState("sumir");
  const [botaoVejaMais2, setBotaoVejaMais2] = useState("sumir");
  const [botaoVejaMais3, setBotaoVejaMais3] = useState("sumir");

  // Controle de efeito da frase de apresentação
  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        document.body.style.overflow = "auto";
        setPalavraApresentacao("palavra-com-efeito");
      }, 1000);
    };

    if (document.readyState === "complete") {
      handleLoad();
    } else {
      window.addEventListener("load", handleLoad);
    }

    return () => window.removeEventListener("load", handleLoad);
  }, []);

  // Controle de efeito de scroll ao carregar a pagina
  useEffect(() => {
    const handleScroll = () => {
      setContent2("content2-exibir");
      setCx1("cx1-exibir");
      setCx2("cx2-exibir");
      setCx3("cx3-exibir");
    };

    window.addEventListener("scroll", handleScroll);

    //limpar
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScrollDestaques = () => {
    setContent1("content1-exibir");
  };

  const handleScrollConheca = () => {
    setContent3("content3-exibir");
  };

  const handleScrollSobreNos = () => {
    setContent4("content4-exibir");
    setSobreEfeito("sobre-com-efeito");
    setTimeout(() => {
      setBotaoLeiaMais("exibirInput");
    }, 3100);
  };

  return (
    <>
      <form className="grid-container">
       

        {/* --------------- Inicio Content --------------- */}

        <div onMouseEnter={handleScrollDestaques} className="content">
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
              <span className={palavraApresentacao}>Estilo</span>
              <span className={palavraApresentacao}>na</span>
              <span className={palavraApresentacao}>mão,</span>
              <span className={palavraApresentacao}>confiança</span>
              <span className={palavraApresentacao}>em</span>
              <span className={palavraApresentacao}>cada</span>
              <span className={palavraApresentacao}>passo!</span>
            </div>
          </div>
        </div>

        {/* --------------- Fim Content --------------- */}

        {/* --------------- Inicio Content1 --------------- */}

        <div className={content1}>
          <h1>Destaques</h1>
        </div>

        {/* --------------- Fim Content1 --------------- */}

        {/* --------------- Inicio Content2 --------------- */}

        <div onMouseEnter={handleScrollConheca} className={content2}>
          <div
            className={cx1}
            onMouseEnter={() => setBotaoVejaMais1("aparecer")}
            onMouseLeave={() => setBotaoVejaMais1("sumir")}
          >
            <div className="caixa-img-produto-home"></div>
            <input className={botaoVejaMais1} type="button" value="Veja mais" />
            <div className="dados-produtos">
              <h1>Título</h1>
              <p></p>
            </div>
          </div>

          <div
            className={cx2}
            onMouseEnter={() => setBotaoVejaMais2("aparecer")}
            onMouseLeave={() => setBotaoVejaMais2("sumir")}
          >
            <div className="caixa-img-produto-home-1">
              <input
                className={botaoVejaMais2}
                type="button"
                value="Veja mais"
              />
            </div>
            <div className="dados-produtos">
              <h1>Título</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                culpa recusandae, porro dolores, sint possimus iusto optio
                maiores repellendus maxime atque aliquid voluptates veniam
                ducimus itaque non ea quas vero!
              </p>
            </div>
          </div>

          <div
            className={cx3}
            onMouseEnter={() => setBotaoVejaMais3("aparecer")}
            onMouseLeave={() => setBotaoVejaMais3("sumir")}
          >
            <div className="caixa-img-produto-home-2">
              <input
                className={botaoVejaMais3}
                type="button"
                value="Veja mais"
              />
            </div>
            <div className="dados-produtos">
              <h1>Título</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit,
                culpa recusandae, porro dolores, sint possimus iusto optio
                maiores repellendus maxime atque aliquid voluptates veniam
                ducimus itaque non ea quas vero!
              </p>
            </div>
          </div>
        </div>

        <div onMouseEnter={handleScrollSobreNos} className={content3}>
          <h1>Conheça nossos produtos!</h1>
        </div>

        <div className={content4}>
          <div className="principal-sobre-nos">
            <h1>Um pouco sobre nós...</h1>
            <p>
              {sobreNos.map((palavra, index) => (
                <span key={index} className={sobreEfeito}>
                  {palavra}{" "}
                </span>
              ))}
            </p>
            <div className="sobre-nos-caixa-btn">
              <div>
                <input className={botaoLeiaMais} value="Leia mais" />
              </div>
            </div>
          </div>
          <div className="principal-imagem-sobre-nos"></div>
        </div>

        {/* --------------- Fim Content2 --------------- */}

      
      </form>
    </>
  );
}

export default App;
