import React from 'react';
import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";


export default function MapaFarmacias() {
    const [farmacias, setFarmacias] = useState([]);

    useEffect(() => {
        getPharmacy()
    }, [])

    function getPharmacy() {
        fetch("http://localhost:3002/farmacia")
            .then((response) => response.json())
            .then((data) => {
                setFarmacias(data);
            })
    }

    console.log("Lista" + JSON.stringify(farmacias))

    return (
        <>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h2>Mapa de Farmácias</h2>
                <MapContainer
                    center={[-23, -51]}
                    zoom={8}
                    scrollWheelZoom={true}
                    style={{ height: "500px", width: "800px" }}
                >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />

                    {farmacias !== undefined ? (farmacias.map((farmacia, index) => (

                        <Marker key={index} position={[farmacia.latitude, farmacia.longitude]}>
                            <Popup>
                                <p><b>Razão Social: </b> {farmacia.razao}</p>
                                <p><b>CNPJ: </b>{farmacia.cnpj}</p>
                                <p><b>Nome Fantasia: </b>{farmacia.fantasia}</p>
                                <p><b>E-mail: </b>{farmacia.email}</p>
                                <p><b>Telefone: </b>{farmacia.telefone}</p>
                                <p><b>Celular: </b><a href={`https://wa.me/55${farmacia.celular}`} > {farmacia.celular}</a> </p>

                                <p><b>CEP: </b>{farmacia.cep}</p>
                                <p><b>Número: </b>{farmacia.numero}</p>
                                <p><b>Bairro: </b>{farmacia.bairro}</p>
                                <p><b>Cidade: </b>{farmacia.localidade}</p>
                                <p><b>Estado: </b>{farmacia.uf}</p>
                            </Popup>
                        </Marker>)
                    )) : ((<div>Carregando</div>))

                    }

                </MapContainer>
            </div>
        </>
    );
};


