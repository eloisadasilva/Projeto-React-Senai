import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

export default function Login() {

    const [login, setLogin] = useState({ email: "", password: "" })
    const navigate = useNavigate()
    function Logar(e) {
        e.preventDefault()
        alert("Usuário logado.")
        navigate("/")
        console.log(login)
    }

    return (
        <div>
            <div className="containerLogin">

                <div className="form-control-login">

                    <h2>Faça seu login:</h2>
                    <form onSubmit={Logar}>

                        <div className="col-md-6 offset-md-3">
                            <label className="form-label">E-mail:</label>
                            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" required value={login.email} onChange={(e) => { setLogin({ ...login, email: e.target.value }) }} />
                        </div>
                        <div className="col-md-6 offset-md-3">
                            <label className="form-label">Senha:</label>
                            <input type="password" className="form-control" id="Senha" minLength={8} required value={login.password} onChange={(e) => { setLogin({ ...login, password: e.target.value }) }} />
                        </div>
                        <div className='marginButton'>
                            <button type="submit" className="btn btn-primary float-center">Entrar</button>
                        </div>

                        <p> Ainda não tem um cadastro?
                            <Link to='/cadastrousuario'> Clique aqui!</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>


    )
}