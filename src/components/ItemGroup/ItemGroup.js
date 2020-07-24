import React from 'react'
import './ItemGroup.scss'
import ItemCard from '../ItemCard/ItemCard'

function ItemGroup(props) {
    return (
        <div className='item-group'>
            <h2>{props.title}</h2>
            <div className='item-flex'>
                {props.list.map(lst=><ItemCard key={lst.id} history={props.history} name={lst.name} imgname={lst.imgname} large={lst.large} linkto={lst.linkto}/>)}
            </div>
            
        </div>
    )
}

export default ItemGroup
