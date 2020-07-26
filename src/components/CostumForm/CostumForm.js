import React from 'react'
import './CostumForm.scss'

function CostumForm({children, submitFunction}) {
    return (
        <form 
        className='form'
        onClick={(e)=>{
            e.preventDefault()
            submitFunction()
        }}
        >
            {children}
        </form>
    )
}

export default CostumForm
