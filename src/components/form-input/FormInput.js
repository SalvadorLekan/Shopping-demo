import React from 'react'
import './FormInput.scss'

function FormInput({name, svalue, changevalue, children, type, required}) {
    return (
        <label className='form-label'>
            {children}
            <input name={name} value={svalue} onChange={e=>changevalue(e.target.value)} type={type} required={required&&required}/>
        </label>
    )
}

export default FormInput
