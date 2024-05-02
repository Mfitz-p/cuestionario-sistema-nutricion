import React, { useState} from 'react';
import Form from 'react-bootstrap/Form';


const Pregunta8 = () => {

    const [radioSiChecked, setRadioSiChecked] = useState(false);

    const handleRadioChange = (e) => {
        const value = e.target.value === 'Sí';
        setRadioSiChecked(value);
    };


    return (
        <>
           <div className='d-flex'>
                <Form.Check
                    className='me-4'
                    type='radio'
                    id='fcRadioSi8'
                    label='Sí'
                    value='Sí'
                    checked={radioSiChecked}
                    onChange={handleRadioChange}
                />
                <Form.Check
                    type='radio'
                    id='fcRadioNo8'
                    label='No'
                    value='No'
                    checked={!radioSiChecked}
                    onChange={handleRadioChange}
                    disabled={radioSiChecked}
                />
            </div>
        </>
    )
}

export default Pregunta8;