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



// Adicione esta função ao seu código existente

async function NewUser(userData) {
    try {
      // Verifica se todos os campos necessários estão presentes
      if (!userData.user || !userData.password || !userData.birthdate) {
        throw new Error('Todos os campos são obrigatórios.');
      }
  
      // Insira o novo usuário na tabela 'Usuario'
      const result = await query(`
        INSERT INTO Usuario (username, senha, data_nascimento)
        VALUES (?, ?, ?)
      `, [userData.user, userData.password, userData.birthdate]);
  
      // Verifica se a inserção foi bem-sucedida
      if (result.affectedRows > 0) {
        console.log('Novo usuário cadastrado com sucesso!');
      } else {
        throw new Error('Erro ao cadastrar usuário.');
      }
    } catch (error) {
      console.error('Erro ao cadastrar usuário:', error.message);
      throw error; // Rejeita a Promise para que o componente React possa lidar com o erro
    }
  }
  
  // Modifique a função handleSubmit em seu componente UserForm.js para chamar NewUser
  
  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      await NewUser(userData);
      console.log('Dados do usuário enviados para cadastro:', userData);
      // Adicione qualquer lógica adicional aqui, como redirecionamento após o cadastro bem-sucedido
    } catch (error) {
      // Trate o erro, por exemplo, exibindo uma mensagem de erro no seu formulário
      console.error('Erro durante o cadastro do usuário:', error.message);
    }
  };
  
