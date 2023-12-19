import 'bulma/css/bulma.min.css';
import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faStar, faList, faCheckCircle, faInfoCircle } from '@fortawesome/free-solid-svg-icons';


export default function Portal() {
    const [currentService, setCurrentService] = useState(null);

    const showService = (service) => {
        setCurrentService(service);
    };

    return (
        <div className="container" style={{ background: '#f5f5f5' }}>

            <nav className="navbar" aria-label="main navigation" style={{ background: '#e0d6cb' }}>
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
                            <a className="button is-light" href="/favorites">
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

            <div className="columns is-fullheight">
                {/* Seção "Meus Serviços" na coluna à esquerda */}
                <div className="column is-one-third">
                    <section className="section has-background-light" style={{ borderRadius: '10px', padding: '20px', marginTop: '20px' }}>
                        <h1 className="title has-text-centered" style={{ color: '#333' }}>
                            Meus Serviços
                        </h1>

                        <div className="columns is-multiline">
                            <div className="column is-full">
                                <div className="box has-text-centered" style={{ background: '#e0d6cb' }}>
                                    <a href='/dia/cartasdia'>
                                        <h2 className="subtitle" style={{ color: '#333' }}>Tarot do Dia</h2>
                                    </a>
                                </div>
                            </div>

                            <div className="column is-full">
                                <div className="box has-text-centered" style={{ background: '#e0d6cb' }}>
                                    <a href='/consultas/tiragem'>
                                        <h2 className="subtitle" style={{ color: '#333' }}>Consulta Tripla</h2>
                                    </a>
                                    {/* Conteúdo relacionado à "Consulta Tripla" */}
                                </div>
                            </div>

                            <div className="column is-full">
                                <div className="box has-text-centered" style={{ background: '#e0d6cb' }}>
                                    <a>
                                        <h2 className="subtitle" style={{ color: '#333' }}>Pesquisar Cartas</h2>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>

                {/* Seção de Saudação à direita */}
                <div className="column">
                    <section className="section is-small">
                        {/* Conteúdo da primeira seção */}
                        <h1 className="title has-text-centered" style={{ color: '#333' }}>
                            Bem-vindo(a) à Alzira, sua Medium Digital
                        </h1>
                        <h2 className="subtitle" style={{ color: '#555' }}>
                            Descubra o universo místico do Tarot, uma arte milenar de reflexão, autoconhecimento e espiritualidade. As 78 cartas, divididas entre Arcanos Maiores e Menores, revelam caminhos simbólicos que podem guiar você em sua jornada.
                        </h2>
                    </section>
                </div>
            </div>

        </div>
    );
}
