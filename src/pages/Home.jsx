import { Header } from "../Components/Header";
import './Home.css';
import joaoImage from '../assets/joao.png';
import { Footer } from "../Components/Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <main className="conteudo">
        <section className="conteudo-principal">
          <div className="conteudo-principal-escrito">
            <h1 className="conteudo-principal-escrito-titulo">Portfolio</h1>
            <h2 className="conteudo-principal-escrito-subtitulo">
              Front-end who writes clean and efficient code
            </h2>
            <button className="conteudo-principal-escrito-botao">
              <a href="https://github.com/jvmarinho061?tab=repositories" target="_blank" rel="noopener noreferrer">
                Activities
              </a>
            </button>

          </div>
          <img className="conteudo-principal-imagem" src={joaoImage} alt="Image of João" />
        </section>
        <tr />
        <section className="conteudo-secundario">
          <h3 className="conteudo-secundario-titulo">Front-end</h3>
          <p className="conteudo-secundario-paragrafo">
            See all my activities on <strong>GitHub</strong>
          </p>
          <p className="conteudo-secundario-paragrafo">
            Focused on <strong>Design</strong> for websites
          </p>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Home;
