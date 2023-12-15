import 'bulma/css/bulma.min.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faList, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { CartaDia } from './dia/cartasdia';
import { Tiragem } from './consultas/tiragem';

export default function Portal() {
    const [currentService, setCurrentService] = useState(null);

    const showService = (service) => {
        setCurrentService(service);
    };

    return (
        <div className="container" style={{ background: '#f5f5f5' }}>

            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-menu">
                    <div className="navbar-start">
                        <div className="navbar-item ">
                            <a className="button is-light">
                                <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                                Usuário
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="button is-light" onClick={() => showService('tarotDia')}>
                                <FontAwesomeIcon icon={faList} style={{ marginRight: '5px' }} />
                                Tirada dia
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a className="button is-light" onClick={() => showService('consultaTripla')}>
                                <FontAwesomeIcon icon={faCheckCircle} style={{ marginRight: '5px' }} />
                                Consulta Tripla
                            </a>
                        </div>
                        {/* Adicione links para outros serviços conforme necessário */}
                    </div>
                </div>
            </nav>

            <section className="section is-small">
                {/* Conteúdo da primeira seção */}
                <h1 className="title has-text-centered" style={{ color: '#333' }}>
                    Bem-vindo(a) à Alzira, sua Medium Digital
                </h1>
                <h2 className="subtitle" style={{ color: '#555' }}>
                    Descubra o universo místico do Tarot, uma arte milenar de reflexão, autoconhecimento e espiritualidade. As 78 cartas, divididas entre Arcanos Maiores e Menores, revelam caminhos simbólicos que podem guiar você em sua jornada.
                </h2>
            </section>

            <section className="section has-background-light" style={{ borderRadius: '10px', padding: '20px', marginTop: '20px' }}>
                <h1 className="title has-text-centered" style={{ color: '#333' }}>
                    Meus Serviços
                </h1>

                <div className="columns is-multiline">
                    <div className="column is-one-third">
                        <div className="box has-text-centered" style={{ background: '#e0d6cb' }}>
                            <a onClick={() => showService('tarotDia')}>
                                <h2 className="subtitle" style={{ color: '#333' }}>Tarot do Dia</h2>
                            </a>
                        </div>
                    </div>

                    <div className="column is-one-third">
                        <div className="box has-text-centered" style={{ background: '#e0d6cb' }}>
                            <a onClick={() => showService('consultaTripla')}>
                                <h2 className="subtitle" style={{ color: '#333' }}>Consulta Tripla</h2>
                            </a>
                            {/* Conteúdo relacionado à "Consulta Tripla" */}
                        </div>
                    </div>

                    <div className="column is-one-third">
                        <div className="box has-text-centered" style={{ background: '#e0d6cb' }}>
                            <a>
                                <h2 className="subtitle" style={{ color: '#333' }}>Pesquisar Cartas</h2>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section">
                {/* Conteúdo da terceira seção (alterar conforme o serviço selecionado) */}
                {currentService === 'tarotDia' && <CartaDia />}
                {currentService === 'consultaTripla' && <Tiragem />}
                {/* Adicione mais condições conforme necessário para outros serviços */}
            </section>
        </div>
    );
}
