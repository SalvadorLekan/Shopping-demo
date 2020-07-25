import React from 'react'
import products from './ProductAPI'
import ItemGroup from '../ItemGroup/ItemGroup'

function Shop() {
    return (
        <div>
            <h2>vvv</h2>
            {products
            .map(({productList,name,titleLink})=><ItemGroup key={titleLink} list={productList} title={name} titleLink={titleLink} limit={4}/>)
            }
            
        </div>
    )
}

export default Shop
