import React from "react";
import "../App";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";



const ACCESS_TOKEN_MAP_BOX = `access_token=pk.eyJ1IjoiZWxvaXNhc2lsdmEiLCJhIjoiY2w4NnNqMDNmMG1vMjN2bHRsd2p3ZjE1cyJ9.Bw2dMkLU6K2Yl4Nf_vp6CQ`;


export default function CadastroFarmacia() {

    const [dadosFarmacia, setDadosFarmacia] = useState({
        razao: "",
        cnpj: "",
        fantasia: "",
        email: "",
        telefone: "",
        celular: "",
        cep: "",
        logradouro: "",
        numero: "",
        bairro: "",
        localidade: "",
        uf: "",
        complemento: "",
        latitude: "",
        longitude: ""
    });

    useEffect(() => {
        if (dadosFarmacia.cep.length === 9) {
            fetch(`https://viacep.com.br/ws/${dadosFarmacia.cep}/json/`)
                .then((response) => {
                    return response.json();
                })
                .then((data) => {

                    setDadosFarmacia((prev) => ({
                        ...prev,
                        ...data,
                    }));
                });
            console.log(dadosFarmacia.cep);

        }
    }, [dadosFarmacia.cep]);


    useEffect(() => {
        if (dadosFarmacia.logradouro !== "") {
            fetch(
                `https://api.mapbox.com/geocoding/v5/mapbox.places/${dadosFarmacia.logradouro}.json?${ACCESS_TOKEN_MAP_BOX}`
            )
                .then((response) => response.json())
                .then((data) => {

                    const [longitude, latitude] = data.features[0].center;
                    setDadosFarmacia((prev) => ({
                        ...prev,
                        latitude,
                        longitude,
                    }));
                });
            console.log(dadosFarmacia.latitude)
        }
    });

    const navigate = useNavigate();
    const CadastrarFarmacia = (e) => {
        e.preventDefault();


        fetch("http://localhost:3002/farmacia", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(dadosFarmacia),
        })
        alert("Farmácia foi cadastrada. Verificar no mapa.");
        navigate("/");
    }

    return (
        <div>
            <h2>Cadastro de Farmácia</h2>
            <div className="container">
                <div className="form-control">
                    <form onSubmit={CadastrarFarmacia}>
                        <div className="form-control">
                            <div className="row">
                                <div className="col-md-4 col-xs-4">
                                    <label>Razão Social</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="RazaoSocial"
                                        required
                                        value={dadosFarmacia.razao}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, razao: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="col-md-4 col-xs-4">
                                    <label>CNPJ</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="cnpj"
                                        required placeholder='XX.XXX.XXX/0001-XX'
                                        value={dadosFarmacia.cnpj}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, cnpj: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="col-md-4 col-xs-4">
                                    <label>Nome Fantasia</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="NomeFatasia"
                                        required
                                        value={dadosFarmacia.fantasia}
                                        onChange={(e) => {
                                            setDadosFarmacia({
                                                ...dadosFarmacia,
                                                fantasia: e.target.value,
                                            });
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-4">
                                    <label>E-mail</label>
                                    <input type="email" className="form-control" id="Email" required
                                        value={dadosFarmacia.email}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, email: e.target.value });
                                        }} />
                                </div>

                                <div className="col-md-4 col-xs-4">
                                    <label>Telefone</label>
                                    <input type="text" className="form-control" id="Telefone" required placeholder='(00)00000000'
                                        value={dadosFarmacia.telefone}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, telefone: e.target.value });
                                        }} />
                                </div>
                                <div className="col-md-4 col-xs-4">
                                    <label>Celular</label>
                                    <input type="text" className="form-control" id="Celular" required placeholder='(00)000000000'
                                        value={dadosFarmacia.celular}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, celular: e.target.value });
                                        }} />
                                </div>
                            </div>
                        </div>
                        <div className="form-control">
                            <div className="row">
                                <div className="col-md-3 col-xs-3">
                                    <label>CEP</label>
                                    <input type="text" className="form-control" id="Cep" required
                                        value={dadosFarmacia.cep}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, cep: e.target.value });
                                        }} />
                                </div>
                                <div className="col-md-7 col-xs-7">
                                    <label>Logradouro</label>
                                    <input type="text" className="form-control" id="Logradouro" required
                                        value={dadosFarmacia.logradouro}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, logradouro: e.target.value });
                                        }} />
                                </div>
                                <div className="col-md-2 col-xs-2">
                                    <label>Número</label>
                                    <input type="text" className="form-control" id="Numero" required
                                        value={dadosFarmacia.numero}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, numero: e.target.value });
                                        }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-4">
                                    <label>Bairro</label>
                                    <input type="text" className="form-control" id="Bairro" required
                                        value={dadosFarmacia.bairro}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, bairro: e.target.value });
                                        }} />
                                </div>

                                <div className="col-md-4 col-xs-4">
                                    <label>Cidade</label>
                                    <input type="text" className="form-control" id="Cidade" required
                                        value={dadosFarmacia.localidade}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, localidade: e.target.value });
                                        }} />
                                </div>
                                <div className="col-md-4 col-xs-4">
                                    <label>Estado</label>
                                    <input type="text" className="form-control" id="Estado" required
                                        value={dadosFarmacia.uf}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, uf: e.target.value });
                                        }} />
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-4 col-xs-4">
                                    <label>Complemento</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Complemento"
                                        value={dadosFarmacia.complemento}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, complemento: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="col-md-4 col-xs-4">
                                    <label>Latitude</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Latitude"
                                        disabled
                                        value={dadosFarmacia.latitude}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, latitude: e.target.value });
                                        }}
                                    />
                                </div>
                                <div className="col-md-4 col-xs-4">
                                    <label>Longitude</label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="Longitude"
                                        disabled
                                        value={dadosFarmacia.longitude}
                                        onChange={(e) => {
                                            setDadosFarmacia({ ...dadosFarmacia, longitude: e.target.value });
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="containerButton">
                            <button className="btn btn-primary" type="submit" > Salvar </button>
                        </div>
                        <div className="containerButton">
                            <button className="btn btn-primary" type="button" value="Limpar" onClick={() => window.location.reload()}>Limpar</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}


