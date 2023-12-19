import 'bulma/css/bulma.min.css';
import SortearCartas from '../components/sortcard.js';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faList, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';

const Tiragem = () => {
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
        <div className="container" style={{ background: '#f5f5f5' }}>
            <nav className="navbar" aria-label="main navigation" style={{ background: '#e0d6cb' }}>
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item ">
                            <a className="button is-light" href="/portal">
                                <FontAwesomeIcon icon={faStar} style={{ marginRight: '5px' }} />
                                Portal
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="button is-light">
                                <FontAwesomeIcon icon={faList} style={{ marginRight: '5px' }} />
                                Cartas Favoritas
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a className="button is-light">
                                <FontAwesomeIcon icon={faCheckCircle} />
                                Consultas anteriores
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

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
                        <SortearCartas />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Tiragem;

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

