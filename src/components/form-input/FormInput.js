import React from 'react'
import './FormInput.scss'

function FormInput({name, svalue, changevalue, children, type}) {
    return (
        <label className='form-label'>
            {children}
            <input name={name} value={svalue} onChange={e=>changevalue(e.target.value)} type={type}/>
        </label>
    )
}

export default FormInput
