import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import avatar from '../Images/avatar.png';
import { TimeLine } from './TimeLine';


function InicioBienvenida() {
  return (
    <>
      <div className='bg-body-tertiary'>
        <div className='container'>
          <Row>
            <Col className='col-lg-6 col-sm-10 pt-4 pb-4' >
              <div className='d-flex'>
                <Image
                  style={{ width: '80px', height: '80px', backgroundColor: '#CBCBCC' }}
                  className='me-3 rounded-circle'
                  src={avatar}
                  alt='Photo face'
                />
                <div>
                  <p className='mb-1 fw-medium'>Nutrición</p>
                  <h2 className='fw-bold'>Hola, Martha Fitz</h2>
                  <p className='mb-1 fw-light lh-base'>Para brindarte una mejor atención, contesta las siguientes preguntas.
                    La información es confidencial y esencial para crear tu perfil y que recibas la mejor atención.</p>
                </div>
              </div>
            </Col>
            <Col className='col-lg-6 col-sm-12 pt-4 pb-4' >
              <TimeLine />
            </Col>
          </Row>
        </div>
      </div>
    </>
  )
}

export default InicioBienvenida;