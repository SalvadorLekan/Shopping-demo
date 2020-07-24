import React from 'react'
import { withRouter } from 'react-router-dom'
import './ItemCard.scss'


function ItemCard({large, linkto, imgname, name, history}) {
    return (
        <div 
        className={`item-box ${large}`}
        onClick={()=> history.push(`${linkto}`)}>
            <img
            src={`./Images/${imgname}`} 
            alt={name}
            />
            <div className='inner-item'>
                <h3>{name}</h3>
            </div>
        </div>
    )
}

export default withRouter(ItemCard)
