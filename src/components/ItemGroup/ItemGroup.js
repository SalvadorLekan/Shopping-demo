import React from 'react'
import './ItemGroup.scss'
import ItemCard from '../ItemCard/ItemCard'

function ItemGroup({title, list, }) {
    return (
        <div className='item-group'>
            <h2>{title}</h2>
            <div className='item-flex'>
                {list.map(({id, ...someProp})=><ItemCard key={id} {...someProp}/>)}
            </div>
            
        </div>
    )
}

export default ItemGroup
