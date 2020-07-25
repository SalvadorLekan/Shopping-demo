import React from 'react'

function CostumForm({children,...otherProps}) {
    return (
        <form>
            {children}
        </form>
    )
}

export default CostumForm
