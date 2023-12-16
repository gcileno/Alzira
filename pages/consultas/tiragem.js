import 'bulma/css/bulma.min.css';
import { SortearCartas } from '../components/sortcard.js';
import React, { useState } from 'react';

export const Tiragem = () => {
    const [mostrarSequencia, setMostrarSequencia] = useState(false);
    const [cartaSelecionada, setCartaSelecionada] = useState(null);


    const embaralharCartas = () => {
        setMostrarSequencia(true);
    };

    const handleClickCarta = (numeroAleatorio) => {
        setCartaSelecionada(numeroAleatorio);
        // Lógica adicional ao clicar em uma carta, se necessário
    };


    return (
        <div className="hero is-fullheight is-bold">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-vcentered is-centered" >
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
                            </div>
                        </div>
                    </div>
                    {mostrarSequencia && (
                        <SortearCartas/>
                    )}
                </div>
            </div>
        </div>
    );
};



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

