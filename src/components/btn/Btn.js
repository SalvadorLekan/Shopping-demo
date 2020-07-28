import React from 'react'
import './Btn.scss'

function Btn({children, type, click}) {
    return (
        <button className='btn' type={type} onClick={click}>
            {children}
        </button>
    )
}

export default Btn
