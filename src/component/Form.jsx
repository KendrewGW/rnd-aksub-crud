import React from 'react';
import './form.css';

function Form(){
    return(
        <div className='form'>
            <h1>Form</h1>
            <form action="">
                <label htmlFor="">Judul</label>
                <input type="text" />
                <label htmlFor="">Nomor</label>
                <input type="number" />

                <button type='submit'>Submit</button>
            </form>
        </div>
    )
}

export default Form;