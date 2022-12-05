import React from 'react';
import { useEffect, useState, useMemo } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export default function ListaMedicamentos() {
  const [medicamentos, setListaMedicamentos] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3002/medicamento")
      .then((res) => res.json())
      .then((dados) => setListaMedicamentos(dados));
  }, []);

  console.log(medicamentos);

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [filtrado, setFiltro] = useState('');
  const [medicamento, setMedicamento] = useState('')
  const medicamentosfiltrados = useMemo(() => {
    medicamentos.filter((medicamento) => medicamento.toLowerCase().includes(filtrado));
  }, [filtrado]);

  return (
    <div>
      <h2>Listagem de Medicamentos</h2>

      <div className="row">
        <center>
          <div className="col-md-10 col-xs-10">
            <input className="form-control" type='text' value={filtrado} onChange={(e) => setFiltro(e.target.value)} placeholder='Pesquise aqui um medicamento pelo nome'></input>
          </div>
        </center>
      </div>
      {
        medicamentos.medicamento === filtrado ?
          medicamentosfiltrados.map((medicamento, index) => (

            <div key={index} id={medicamento.id} value={medicamento} className='ContainerProduto'>
              <div className="Produtos" >
                <img src="https://la61tzqb21.map.azionedge.net/Custom/Content/Themes/Shared/Imagens/tvg_m.jpg" className="ImagemProduto" alt="..." />
                <div className="card-body">
                  <center>
                    <h5 className="card-title">{medicamento.medicamento} {medicamento.dosagem}</h5>
                    <p className="card-text">{medicamento.laboratorio}</p>
                    <button className="btn btn-primary btn-sm" key={medicamento.id} onClick={() => handleShow(index)}>Detalhes</button>
                  </center>
                  <div >

                    {show ?

                      <div key={index} >

                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Nome do medicamento: {medicamento.medicamento}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body><p><b>Dosagem:</b> {medicamento.dosagem} <br />
                            <b>Laboratório:</b> {medicamento.laboratorio} <br />
                            <b>Tipo:</b> {medicamento.tipo} <br />
                            <b>Preço:</b> R$ {medicamento.preco} <br /><br />
                            <b>Descrição:</b> {medicamento.descricao}</p></Modal.Body>
                          <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                              OK
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                      : null
                    }
                  </div>
                </div>
              </div>
            </div>
          ))
          :
          medicamentos.map((medicamento, index) => (
            <div key={index} id={medicamento.id} value={medicamento} className='ContainerProduto'>
              <div className="Produtos" >
                <img src="https://la61tzqb21.map.azionedge.net/Custom/Content/Themes/Shared/Imagens/tvg_m.jpg" className="ImagemProduto" alt="..." />
                <div className="card-body">
                  <center>
                    <h5 className="card-title">{medicamento.medicamento} {medicamento.dosagem}</h5>
                    <p className="card-text">{medicamento.laboratorio}</p>
                    <button className="btn btn-primary btn-sm" key={medicamento.id} onClick={() => handleShow(index)}>Detalhes</button>
                  </center>
                  <div >
                    {show ?
                      <div key={index} >
                        <Modal show={show} onHide={handleClose}>
                          <Modal.Header closeButton>
                            <Modal.Title>Nome do medicamento: {medicamento.medicamento}</Modal.Title>
                          </Modal.Header>
                          <Modal.Body><p><b>Dosagem:</b> {medicamento.dosagem} <br />
                            <b>Laboratório:</b> {medicamento.laboratorio} <br />
                            <b>Tipo:</b> {medicamento.tipo} <br />
                            <b>Preço:</b> R$ {medicamento.preco} <br /><br />
                            <b>Descrição:</b> {medicamento.descricao}</p></Modal.Body>
                          <Modal.Footer>
                            <Button variant="primary" onClick={handleClose}>
                              OK
                            </Button>
                          </Modal.Footer>
                        </Modal>
                      </div>
                      : null}
                  </div>
                </div>
              </div>
            </div>
          ))
      }
    </div >
  )
}
