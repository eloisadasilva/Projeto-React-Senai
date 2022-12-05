import React from 'react';
import './App.css';
import img_logo from './img_logo.png';
import Rotas from '../src/Rotas/Rotas';

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" >
        <img src={img_logo} className="imgLogo" alt='Logo Pharmacy Management'></img>

        <div className='containerNavbar'>
          <a className="navbar-brand" href="/">Mapas</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
        </div>

        <div className='containerNavbar'>
          <a className="navbar-brand" href="/farmacia"> <center>Cadastro <br /> de Farmácia</center></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
        </div>

        <div className='containerNavbar'>
          <a className="navbar-brand" href="/cadastromedicamento"><center> Cadastro de <br /> Medicamento</center></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
        </div>

        <div className='containerNavbar'>
          <a className="navbar-brand" href="/listagemmedicamentos"> <center>Listagem de <br /> Medicamentos</center></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
        </div>

        <div className='containerNavbar'>
          <a className="navbar-brand" href="/login">Login</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
        </div>

        <div className='containerNavbar'>
          <a className="navbar-brand" href="/cadastrousuario">Cadastro</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          </button>
        </div>
      </nav>
      <Rotas />
    </div>
  );
}

export default App;
