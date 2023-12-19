import 'bulma/css/bulma.min.css';

export default function Login() {
    return (
        <div className="column is-4 is-offset-8">
            <div className="notification is-dark">
                <h4>
                    Faça login para sua nova conusulta
                </h4>
            </div>
            <form>
                <div className="field">
                    <label className="label">Usuário</label>
                    <div className="control is-dark">
                        <input
                            className="input is-rounded"
                            type="text"
                            placeholder="@Usuário"
                            name="user"
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
                        />
                    </div>
                </div>

                <div className="field">
                    <div className="control">
                        <button type="submit" className="button is-dark is-fullwidth">
                            <a href="/portal">Entrar</a>
                        </button>
                    </div>
                </div>
            </form>
        </div>
    )
}

