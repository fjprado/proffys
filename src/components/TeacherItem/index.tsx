import React from "react";
import whatsappIcon from "../../assets/images/icons/whatsapp.svg";
import "./styles.css";

export default function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>
                <img
                    src="https://avatars0.githubusercontent.com/u/4109319?s=460&u=76500873d5ecfe5901daa99e446e70226c2df141&v=4"
                    alt="Fernando Prado"
                />
                <div>
                    <strong>Fernando Prado</strong>
                    <span>Matemática</span>
                </div>
            </header>

            <p>
                Em busca de novos conhecimentos.
                <br />
                <br />
                No meu tempo livre eu gosto muito de correr por aí fazendo
                corridas de rua (🏃) e jogar videogame (🎮).
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>
        </article>
    );
}
