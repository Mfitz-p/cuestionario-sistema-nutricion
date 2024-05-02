import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalConfirmacion() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
     
     <a className="nav-link me-3" onClick={handleShow}>Salir <i className="fa-solid fa-arrow-right-from-bracket"></i></a>

      <Modal show={show} onHide={handleClose} animation={false} centered >
        <Modal.Header closeButton>
          
        </Modal.Header>
        <Modal.Body className='h4 text-center mt-4 mb-4'>¿Estas segur@ que quieres salir?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button variant="warning" onClick={handleClose}>
            Salir
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default ModalConfirmacion;
