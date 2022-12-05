import React from "react";
import { Route, Routes, BrowserRouter, Navigate } from "react-router-dom";

import Login from "../Pages/Login";
import CadastroFarmacia from "../Pages/CadastroFarmacia";
import MapaFarmacias from "../Pages/Mapa";
import CadastroMedicamento from "../Pages/CadastroMedicamento";
import ListagemMedicamentos from "../Pages/ListagemMedicamentos";
//import NaoEncontrado from "../Pages/NaoEncontrado";
import { useUsuario } from "../Components/Context";
import { RotaPrivada } from "./RotaPrivada";
import CadastroUsuario from "../Pages/CadastroUsuario";


const Rotas = () => {
    const { dadosUsuario } = useUsuario();
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/cadastrousuario" element={<CadastroUsuario />} />
            </Routes>
            <Routes element={<RotaPrivada dadosUsuario={dadosUsuario} />}>
                <Route exact path="/" element={<MapaFarmacias />} />
                <Route exact path="/mapa" element={<Navigate replace to="/" />} />
                <Route exact path="/farmacia" element={<CadastroFarmacia />} />
                <Route exact path="/cadastromedicamento" element={<CadastroMedicamento />} />
                <Route exact path="/listagemmedicamentos" element={<ListagemMedicamentos />} />
                {/* <Route exact path="*" element={<NaoEncontrado />} /> */}
            </Routes>
        </BrowserRouter>

    )
}

export default Rotas;