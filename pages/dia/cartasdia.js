import 'bulma/css/bulma.min.css';
import { SortearCartas } from '../components/sortcard.js';
import React, { useState } from "react";

const CartaDia = () => {
  const [mostrarSequencia, setMostrarSequencia] = useState(false);
  const [cartaSelecionada, setCartaSelecionada] = useState(null);


  const embaralharCartas = () => {
    setMostrarSequencia(true);
    setCartaSelecionada(null); // Reset selected card when shuffling
  };

  const handleClickCarta = (numeroAleatorio) => {
    const cartaNome = arcanosMaiores[numeroAleatorio - 1];
    setCartaSelecionada(numeroAleatorio);
    alert(`A carta selecionada é: ${cartaNome}`);
    // You can replace the alert with your preferred notification component or method
  };


  return (
    <div className="hero is-fullheight is-bold">
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-half">
              <button
                className="button is-rounded is-primary is-large"
                onClick={embaralharCartas}
              >
                Ver Cartas
              </button>
            </div>
            <div className="column">
              <div className="content">
                <h2>Concentre-se npergunta antes de embaralhar as cartas</h2>
                <p>
                  Para meditar, encontre um local tranquilo e sente-se confortavelmente. Feche os olhos,
                  respire profundamente e concentre-se na sua respiração. Deixe pensamentos passarem sem
                  se prender a eles. Foque na sensação da respiração, seja na entrada e saída de ar ou
                  no movimento do abdômen. Se a mente divagar, suavemente redirecione o foco para a respiração.
                  Comece com sessões curtas, aumentando gradualmente conforme se sentir confortável. A prática
                  constante ajudará a cultivar calma e clareza mental.
                </p>
              </div>
            </div>
          </div>
          {mostrarSequencia && (
            <div className="columns is-multiline mt-4">
              <SortearCartas onCartaClick={handleClickCarta} cartaSelecionada={cartaSelecionada} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CartaDia;



const arcanosMaiores = [
  "O Louco",
  "O Mago",
  "A Sacerdotisa",
  "A Imperatriz",
  "O Imperador",
  "O Hierofante",
  "Os Enamorados",
  "O Carro",
  "A Justiça",
  "O Eremita",
  "A Roda da Fortuna",
  "A Força",
  "O Enforcado",
  "A Morte",
  "A Temperança",
  "O Diabo",
  "A Torre",
  "A Estrela",
  "A Lua",
  "O Sol",
  "O Julgamento",
  "O Mundo"
];

