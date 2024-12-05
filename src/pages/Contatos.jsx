import { useState } from "react";
import './Contatos.css';
import { Header } from "../Components/Header";
import { Footer } from "../Components/Footer";

const Contatos = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!name || !email) { // Verificando os estados corretos
            alert("Preencha todos os campos antes do envio!");
            return;
        }
        // Lógica adicional para envio pode ser implementada aqui
        alert(`Dados enviados: Nome - ${name}, Email - ${email}`);
    };

    return (
        <div>
            <Header />
            <div className="contatos-container">
                <form onSubmit={handleSubmit}>
                    <h2 className="titulo">To contact, fill in the requested fields.</h2>
                    <div className="Input-field">
                        <input
                            type="text"
                            placeholder="Nome..."
                            aria-label="Nome"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                        />
                    </div>
                    <div className="Input-field">
                        <input
                            type="email"
                            placeholder="Email..."
                            aria-label="Email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <textarea className="text-area" name="Mensagem" id="Mensagem"></textarea>
                    </div>
                    <div>
                        <button className="button-submit" type="submit">Enviar</button>
                    </div>
                </form>
            </div>
        <Footer />
        </div>
    );
};

export default Contatos;
