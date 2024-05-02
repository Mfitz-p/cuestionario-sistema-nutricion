import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import CheckboxesComponents from './CheckboxesComponents';
import Pregunta2 from './Pregunta2';
import Pregunta3 from './Pregunta3';
import Pregunta7 from './Pregunta7';
import Pregunta5 from './Pregunta5';
import Pregunta6 from './Pregunta6';
import Pregunta8 from './Pregunta8';
import Pregunta9 from './Pregunta9';


export const FormHistorialMedico = () => {
    
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <h4 className='fw-medium mt-4'> <i class="fa-solid fa-suitcase-medical text-warning"></i> Historial médico</h4>
                </div>
                <div className='row mb-3'>
                    <div className='col-12'>
                        <Form>
                            <div className='row'>
                                <div className='col-lg-4 col-sm-12'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>¿Padeces alguna enfermedad o afectación médica?</Form.Label>
                                    </Form.Group>
                                    <CheckboxesComponents />
                                </div>
                                <div className='col-lg-4 col-sm-12'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>¿Tienes alguna alergia?</Form.Label>
                                    </Form.Group>
                                    <Pregunta2 />
                                </div>
                                <div className='col-lg-4'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>¿Te han hecho alguna cirugía?</Form.Label>
                                    </Form.Group>
                                    <Pregunta3 />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <div className='col-lg-12'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>¿Algún familiar directo ha sufrido alguna afección médica como enfermedades del corazón, cáncer, diabetes u otro padecimiento crónico?</Form.Label>
                                    </Form.Group>
                                </div>
                                <div className='col-lg-4 mb-2'>
                                    <p className='mb-1'>Parentesco Familiar</p>
                                    <Form.Select aria-label="Default select example">
                                        <option>Selecciona parentesco</option>
                                        <option value="1">Abuelo Paterno</option>
                                        <option value="2">Abuela Paterna</option>
                                        <option value="3">Abuelo Materno</option>
                                        <option value="4" >Abuela Materna</option>
                                    </Form.Select>
                                </div>
                                <div className='col-lg-6'>
                                    <p className='mb-1'>Afectaciones médicas</p>
                                    <Form.Group className="mb-0" controlId="exampleForm.ControlTextarea1">
                                        <Form.Control as="textarea" rows={2} placeholder='Ej. Diabetes, Hipertención' />
                                    </Form.Group>
                                </div>
                                <div className='text-end mt-2'>
                                    <Button variant="secondary" size='sm' className='fs-6'><i className="fa-solid fa-person-circle-plus text-warning me-2"></i> Agregar otro familiar</Button>
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <div className='col-lg-4 col-sm-12 mb-3'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>¿Has hecho dieta para bajar de peso?</Form.Label>
                                    </Form.Group>
                                    <Pregunta5 />
                                </div>
                                <div className='col-lg-4 col-sm-12 mb-3'>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Label>¿Has tomado medicamentos para bajar de peso?</Form.Label>
                                    </Form.Group>
                                    <Pregunta6 />
                                </div>
                                <div className='col-lg-4 col-sm-12'>
                                    <Form.Group className="" controlId="formBasicEmail">
                                        <Form.Label>¿Has tomado tratamientos reductivos anteriormente?</Form.Label>
                                    </Form.Group>
                                    <Pregunta7 />
                                </div>
                            </div>

                            <div className='row mb-3'>
                                <div className='col-lg-4 mb-3'>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>¿Utilizas algún suplemento o tomas vitaminas de manera regular?</Form.Label>
                                    </Form.Group>
                                    <Pregunta8 />
                                </div>
                                <div className='col-lg-4'>
                                    <Form.Group className="mb-2" controlId="formBasicEmail">
                                        <Form.Label>¿Te has realizado estudios médicos recientes?</Form.Label>
                                    </Form.Group>
                                    <Pregunta9 />
                                </div>
                            </div>

                            <div className='d-flex justify-content-start mt-5'>
                                <div className='me-5'>
                                    <p className='mb-0'>Deseo continuar después.</p>
                                    <Button variant="link"> <i class="fa-regular fa-floppy-disk"></i> Guardar mi avance</Button>
                                </div>
                                <Button className='text-end' variant="warning" type="submit">
                                    Continuar
                                </Button>
                            </div>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    )
}
