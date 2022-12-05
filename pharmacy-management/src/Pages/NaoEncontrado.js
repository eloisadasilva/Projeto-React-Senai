import React from "react";
import {Link} from "react-router-dom";

const NaoEncontrado = () => {
    return (
<div>
    <h1>
        Página não encontrada
    </h1>

    <p>
        <Link to = '/'>Voltar para a página de Mapas</Link>
    </p>
</div>
    )
}

export default NaoEncontrado;