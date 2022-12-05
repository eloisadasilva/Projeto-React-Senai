import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";


export default function CadastroUsuario() {

    const [cadastro, setCadastro] = useState({ nome: "", email: "", password: "", reppassword: "" })
    const navigate = useNavigate()
    function Cadastrar(e) {
        e.preventDefault()

        cadastro.password !== cadastro.reppassword ?

            navigate("/cadastrousuario")
                (alert("Senhas não são iguais. Verificar."))

            :

            navigate("/login")
                (alert("Usuário cadastrado. Faça o login."))

        console.log({ cadastro })

    }

    return (
        <div>
            <div className="containerLogin">

                <div className="form-control-login">

                    <h2>Faça seu cadastro:</h2>
                    <form onSubmit={Cadastrar}>

                        <div className="col-md-6 offset-md-3">
                            <label className="form-label">Nome:</label>
                            <input type="text" className="form-control" id="Nome" required value={cadastro.nome} onChange={(e) => { setCadastro({ ...cadastro, nome: e.target.value }) }} />
                        </div>
                        <div className="col-md-6 offset-md-3">
                            <label className="form-label">E-mail:</label>
                            <input type="email" className="form-control" id="Email" aria-describedby="emailHelp" required value={cadastro.email} onChange={(e) => { setCadastro({ ...cadastro, email: e.target.value }) }} />
                        </div>
                        <div className="col-md-6 offset-md-3">
                            <label className="form-label">Senha:</label>
                            <input type="password" className="form-control" id="Senha" minLength={8} required value={cadastro.password} onChange={(e) => { setCadastro({ ...cadastro, password: e.target.value }) }} />
                        </div>
                        <div className="col-md-6 offset-md-3">
                            <label className="form-label">Repetir a Senha:</label>
                            <input type="password" className="form-control" id="RepetirSenha" minLength={8} required value={cadastro.reppassword} onChange={(e) => { setCadastro({ ...cadastro, reppassword: e.target.value }) }} />
                        </div>
                        <div className='marginButton'>
                            <button type="submit" className="btn btn-primary float-center">Entrar</button>
                        </div>
                        <p> Já tem um cadastro?
                            <Link to='/login'> Clique aqui!</Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>


    )
}