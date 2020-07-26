import React from 'react'
import './CostumForm.scss'

function CostumForm({children, submitFunction}) {
    return (
        <form 
        className='form'
        onSubmit={(e)=>{
            e.preventDefault()
            submitFunction()
        }}
        >
            {children}
        </form>
    )
}

export default CostumForm
