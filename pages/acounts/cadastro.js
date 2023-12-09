import 'bulma/css/bulma.min.css';

// components/UserForm.js
import { useState } from 'react';

const UserForm = () => {
    const [userData, setUserData] = useState({
        name: '',
        password: '',
        birthdate: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUserData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Adicione aqui a lógica para enviar os dados do usuário para o backend ou fazer outra coisa
        console.log('Dados do usuário:', userData);
    };

    return (
            <div className="column is-4 is-offset-8">
                    <div className="notification is-dark">
                        <h4>Bem vindo a tela de Cadastro</h4>
                    </div>
                    <form onSubmit={handleSubmit}>
                        <div className="field">
                            <label className="label">Seu usuário de acesso</label>
                            <div className="control">
                                <input
                                    className="input is-rounded"
                                    type="text"
                                    placeholder="@Usuário"
                                    name="user"
                                    value={userData.user}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Senha</label>
                            <div className="control">
                                <input
                                    className="input is-rounded"
                                    type="password"
                                    placeholder="Digite sua senha"
                                    name="password"
                                    value={userData.password}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <label className="label">Data de Nascimento</label>
                            <div className="control">
                                <input
                                    className="input is-rounded"
                                    type="date"
                                    name="birthdate"
                                    value={userData.birthdate}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="field">
                            <div className="control">
                                <button type="submit" className="button is-dark is-fullwidth">
                                    Cadastrar
                                </button>
                            </div>
                        </div>
                    </form>
            </div>
    );
};

export default UserForm;




