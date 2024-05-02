import React from 'react';
import logo from '../Images/logo_chico.png';
import Image from 'react-bootstrap/Image';
import ModalConfirmacion from './ModalConfirmacion';

const Navbar = () => {
  return (
    <>
    <div className='container'>
      <nav className="navbar navbar-expand-lg bg-white">
        <div className="container-fluid">
          <a className="navbar-brand mx-3" href="#">
            <Image
              style={{ width: '60px', height: '60px' }}
              // className='me-3 rounded-circle'
              src={logo}
              alt='Logo grupo salinas'
            />
        </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Nutrición</a>
              </li>
              <li className='nav-item'>
                {/* <a className="nav-link me-3" href="#">Salir <i className="fa-solid fa-arrow-right-from-bracket"></i></a> */}
                <ModalConfirmacion />
              </li>
            </ul>
          </div>

        </div>
      </nav>
    </div>

    </>
  )
}

export default Navbar;