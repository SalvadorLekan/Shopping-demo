import React from 'react'
import './ItemCard.scss'


function ItemCard(props) {
    return (
        <div 
        className={`item-box ${props.large}`}
        onClick={()=> props.history.push(`${props.linkto}`)}>
            <img
            src={`./Images/${props.imgname}`} 
            alt={props.name}
            />
            <div className='inner-item'>
                <h3>{props.name}</h3>
            </div>
        </div>
    )
}

export default ItemCard
