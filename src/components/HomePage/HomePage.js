import React from 'react'
import './HomePage.scss'
import ItemGroup from '../ItemGroup/ItemGroup'

const firstList= [
    {name:'Desktops', imgname:'desktop.jpg', id:'Desktop'},
    {name:'Laptops', imgname:'laptop.jpg', id:'laptops'},
    {name:'Tablets', imgname:'tablet.jpg', id:'Tablets'},
    {name:'Phones', imgname:'phone.jpg', id:'Phones'},
    {name:'Televisions', imgname:'OS74370.jpg', id:'Televisions'},
    {name:'Air Conditioners', imgname:'airconditioner.jpg', id:'Air Conditioners'},
    {name:'Storge Devices', imgname:'flash.jpg', id:'Storge Devices'},
    {name:'Keyboards And Mouse', imgname:'keyboard.jpg', id:'Keyboards And Mouse'},
    {name:'Wrist watches', imgname:'watch.jpg', id:'Wrist watches'},
    {name:'Cameras', imgname:'camera.jpg', id:'Cameras'},
    {name:'Batteries', imgname:'battery.jpg', id:'Batteries'},
    {name:'Chargers', imgname:'charger.jpg', id:'Chargers'}
]

function HomePage() {
    return (
        <div>
            <ItemGroup list={firstList} title='Products'/>
            <ItemGroup list={[{name: 'Gadgets', imgname:'gadget.jpg', id:'nn',large:'large'},{name: 'Accessories', imgname:'accessories.jpg', id:'n', large:'large'}]} title='Categories'/>
        </div>
    )
}

export default HomePage
