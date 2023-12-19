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
                            <a className="button is-light" href="/">
                                <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
                                Portal
                            </a>
                        </div>
                    </div>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <a className="button is-light" href='/dia/cartasdia'>
                                <FontAwesomeIcon icon={faList} style={{ marginRight: '5px' }} />
                                Tarot do dia
                            </a>
                        </div>
                        <div className="navbar-item">
                            <a className="button is-light" href='/consultas/tiragem'>
                                <FontAwesomeIcon icon={faCheckCircle} />
                                Consulta Tripla
                            </a>
                        </div>
                    </div>
                </div>
            </nav>

            <section class="section is-medium">
                <h1 class="title">Lista de Cartas Favoritas</h1>
                <h2 class="subtitle">
                    Não encontrei lista de favoritos para seu login.
                </h2>
            </section>

        </div>
    );
}
