import React from 'react'
import './Btn.scss'

function Btn({children}) {
    return (
        <button className='btn'>
            {children}
        </button>
    )
}

export default Btn
