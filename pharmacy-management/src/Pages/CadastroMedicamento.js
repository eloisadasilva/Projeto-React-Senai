import React from "react";
import "../App";
import { useState } from "react";
import { useNavigate } from "react-router-dom";


export default function CadastroMedicamento() {
    const [dadosMedicamento, setDadosMedicamento] = useState({
        medicamento: "",
        laboratorio: "",
        dosagem: "",
        tipo: "",
        preco: "",
        descricao: "",
    });
    const navigate = useNavigate();
    function CadastrarMedicamento(e) {
        e.preventDefault();

        fetch("http://localhost:3002/medicamento", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dadosMedicamento),
        })
        alert("Medicamento cadastrado.");
        navigate("/listagemmedicamentos");
        console.log(dadosMedicamento)
    }

    return (
        <div>
            <h2>Cadastro de Medicamento</h2>
            <div className="container">
                <div className="form-control">
                    <form onSubmit={CadastrarMedicamento}>
                        <div className="form-control">
                            <div className="row">
                                <div className="col-md-6 col-xs-6">
                                    <label>Medicamento</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Medicamento"
                                        required
                                        value={dadosMedicamento.medicamento}
                                        onChange={(e) => {
                                            setDadosMedicamento({
                                                ...dadosMedicamento,
                                                medicamento: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                                <div className="col-md-6 col-xs-6">
                                    <label>Laboratório</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Laboratorio"
                                        required
                                        value={dadosMedicamento.laboratorio}
                                        onChange={(e) => {
                                            setDadosMedicamento({
                                                ...dadosMedicamento,
                                                laboratorio: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-4">
                                    <label>Dosagem</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Dosagem"
                                        required
                                        value={dadosMedicamento.dosagem}
                                        onChange={(e) => {
                                            setDadosMedicamento({
                                                ...dadosMedicamento,
                                                dosagem: e.target.value,
                                            });
                                        }}
                                    />
                                </div>

                                <div className="col-md-4 col-xs-4">
                                    <label>Tipo</label>
                                    <select className="form-control" name="tipo" id="Dosagem" required
                                        value={dadosMedicamento.tipo}
                                        onChange={(e) => {
                                            setDadosMedicamento({
                                                ...dadosMedicamento,
                                                tipo: e.target.value,
                                            });
                                        }}>
                                        <option value="">Selecione</option>
                                        <option value="Comum">Comum</option>
                                        <option value="Controlado">Controlado</option>
                                    </select>

                                </div>

                                <div className="col-md-4 col-xs-4">
                                    <label>Preço Unitário</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Preco"
                                        required
                                        value={dadosMedicamento.preco}
                                        onChange={(e) => {
                                            setDadosMedicamento({
                                                ...dadosMedicamento,
                                                preco: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-12 col-xs-12">
                                    <label>Descrição</label>
                                    <textarea
                                        type="text"
                                        className="form-control"
                                        id="Descricao"
                                        cols="5" rows="10"
                                        required
                                        value={dadosMedicamento.descricao}
                                        onChange={(e) => {
                                            setDadosMedicamento({
                                                ...dadosMedicamento,
                                                descricao: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="containerButton">
                            <button className="btn btn-primary" type="submit" >
                                Salvar
                            </button>
                        </div>
                        <div className="containerButton">
                            <button className="btn btn-primary" type="button" value="Limpar" onClick={() => window.location.reload()}>
                                Limpar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}
