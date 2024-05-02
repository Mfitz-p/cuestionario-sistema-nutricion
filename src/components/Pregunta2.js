import React, { useState, useEffect } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form';


const Pregunta2 = () => {

    const [isSiChecked, setIsSiChecked] = useState(false);

    useEffect(() => {
        const radioNo = document.getElementById('cRadioNo2');
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
                                id='cRadioSi2'
                                label='Sí'
                                value='Sí'
                                checked={isSiChecked}
                                onChange={handleRadioChange}
                            />
                            <Form.Check
                                type='radio'
                                id='cRadioNo2'
                                label='No'
                                value='No'
                                checked={!isSiChecked}
                                onChange={handleRadioChange}
                            />
                        </div>
                    </Accordion.Header>
                    <Accordion.Body>
                        <input type="text" className="form-control" id="exampleInputText" aria-describedby="textHelp" placeholder='Escribe aquí tus alergias' />
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Pregunta2;