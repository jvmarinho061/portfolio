import { Header } from "../Components/Header";
import './Portfolio.css';
import { Footer } from "../Components/Footer";
import pokedexVideo from '../assets/pokedex.mp4';
import pokedexGif from '../assets/pokedexGif.gif';
import RocketSeatVideo from '../assets/projetoReact.mp4';
import ToDoList from '../assets/ToDoList.mp4';

const Portfolio = () => {
    return (
        <div>
            <Header />
            <div className="Pokedex">
                <div className="card">
                    <h2 className="titulo">Pokedex</h2>
                    <h2 className="pokedex-descricao">
                        Project in React with a focus on using an API
                    </h2>
                    <img
                        src={pokedexGif}
                        alt="Pokedex-GIF"
                        className="gif-pokedex"
                    />
                    <br />
                    <button 
                    className="botao"><a 
                    href="https://github.com/jvmarinho061/Pokedex-React" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    See project 
                    </a>
                    </button>
                    <video
                        src={pokedexVideo}
                        autoPlay
                        muted
                        loop
                        className="video"
                    />
                </div>

                <div className="card">
                    <h2 className="titulo">RocketSeat</h2>
                    <h2 className="pokedex-descricao">
                        Project aimed at studying componentization, <br />
                        properties, states, immutability and hooks.
                    </h2>
                    <button 
                    className="botao"><a 
                    href="https://github.com/jvmarinho061/Projeto-React-Rocketset" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    See project 
                    </a>
                    </button>
                    <video
                        src={RocketSeatVideo}
                        autoPlay
                        muted
                        loop
                        className="video"
                    />
                </div>
                <div className="card">
                    <h2 className="titulo">To do list</h2>
                    <h2>Simple list in react for testing tools like 
                        <br />delete list, add and mark components </h2>
                    <br />
                    <button 
                    className="botao"><a 
                    href="https://github.com/jvmarinho061/To-do-list-react" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    See project 
                    </a>
                    </button>
                    <video
                        src={ToDoList}
                        autoPlay
                        muted
                        loop
                        className="video" 
                    />
                </div>
                <div className="botao-repertorio">
                <button 
                    className="botao"><a 
                    href="https://github.com/jvmarinho061?tab=repositories" 
                    target="_blank" 
                    rel="noopener noreferrer"> 
                    See my repertories on GitHub
                    </a>
                    </button>
                </div>
            </div>
            <Footer />
        </div>
    );
}; 

export default Portfolio;
