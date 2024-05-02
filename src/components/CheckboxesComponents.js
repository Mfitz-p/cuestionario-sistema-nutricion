import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';

const CheckboxesComponents = () => {
    const [isSiChecked, setIsSiChecked] = useState(false);

    useEffect(() => {
        const radioNo = document.getElementById('cRadioNo');
        const accordionItem = document.getElementById('accordionItem');

        if (isSiChecked) {
            accordionItem?.setAttribute('aria-expanded', 'true');
            radioNo?.setAttribute('disabled', 'disabled');
        } else {
            accordionItem?.setAttribute('aria-expanded', 'false');
            radioNo?.removeAttribute('disabled');
        }
    }, [isSiChecked]);

    const handleRadioChange = (e) => {
        const value = e.target.value === 'Sí';
        setIsSiChecked(value);
    };


    return (
        <>
            <Accordion >
                <Accordion.Item eventKey="0" id='accordionItem' aria-expanded='false'>
                    <Accordion.Header>
                        <div className='d-flex'>
                            <Form.Check
                                className='me-4'
                                type='radio'
                                id='cRadioSi'
                                label='Sí'
                                value='Sí'
                                checked={isSiChecked}
                                onChange={handleRadioChange}
                            />
                            <Form.Check
                                type='radio'
                                id='cRadioNo'
                                label='No'
                                value='No'
                                checked={!isSiChecked}
                                onChange={handleRadioChange}
                            />
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        Selecciona
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Diabetes
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Enfermedades del corazón
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Enfermedades gastrointestinales
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Enfermedades renales
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Cancer
                            </label>
                        </div>
                        <div className="form-check">
                            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                            <label className="form-check-label" for="flexCheckDefault">
                                Otra
                            </label>
                        </div>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default CheckboxesComponents;