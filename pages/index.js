import React, { useState } from 'react';
import 'bulma/css/bulma.min.css';
import Login from './acounts/login';
import UserForm from './acounts/cadastro';

const Home = () => {
   const [componenteAtual, setComponenteAtual] = useState(null);

   const mostrarElemento = (componente) => {
      setComponenteAtual(() => componente); // Passa uma função que retorna o componente
   };

   return (
      <div className="hero is-fullheight is-grey-darker"
         style={{
            backgroundImage: `url("/images/fundo.jpg")`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            minHeight: '100vh',
            justifyContent: 'left',
            alignItems: 'left',
            flexDirection: 'column',
         }}
      >
         <div className="hero-body">
            <div className="container">
               {componenteAtual ? (
                  // Renderiza o novo componente se existir
                  componenteAtual
               ) : (
                  <div className="column is-4 is-offset-8" id="formulario">
                     <h1 className="title is-1">Alzira a WebCigana</h1>
                     <p className="subtitle is-4">Bem vindo a minha mesa de atendimento.</p>
                     <p className="subtitle is-5">Entre ou faça seu cadastro para iniciar sua consulta.</p>
                     <div className="buttons">
                        <a className="button is-dark is-rounded" onClick={() => mostrarElemento(<UserForm />)}>
                           Cadastre-se
                        </a>
                        <a className="button is-black is-rounded" onClick={() => mostrarElemento(<Login />)}>
                           Login
                        </a>
                     </div>
                  </div>
               )}
            </div>
         </div>
      </div>
   );
};

export default Home;
