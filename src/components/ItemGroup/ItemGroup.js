import React from 'react'
import { Link } from 'react-router-dom'
import './ItemGroup.scss'
import ItemCard from '../ItemCard/ItemCard'

function ItemGroup({title, list, titleLink}) {
    return (
        <div className='item-group'>
            <h2><Link to={titleLink}>{title}</Link></h2>
            <div className='item-flex'>
                {list.map(({id, ...someProp})=><ItemCard key={id} {...someProp}/>)}
            </div>
            
        </div>
    )
}

export default ItemGroup
