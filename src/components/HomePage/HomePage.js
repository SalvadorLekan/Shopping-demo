import React from 'react'
import './HomePage.scss'
import ItemGroup from '../ItemGroup/ItemGroup'

const firstList= [
    {name:'Desktops', imgname:'desktop.jpg', id:'Desktop', linkto:'Desktops'},
    {name:'Laptops', imgname:'laptop.jpg', id:'laptops', linkto:'laptops'},
    {name:'Tablets', imgname:'tablet.jpg', id:'Tablets', linkto:'Tablets'},
    {name:'Phones', imgname:'phone.jpg', id:'Phones', linkto:'Phones'},
    {name:'Televisions', imgname:'OS74370.jpg', id:'Televisions', linkto:'televisions'},
    {name:'Air Conditioners', imgname:'airconditioner.jpg', id:'Air Conditioners', linkto:'airconditioners'},
    {name:'Storge Devices', imgname:'flash.jpg', id:'Storge Devices', linkto:'Devices'},
    {name:'Keyboards And Mouse', imgname:'keyboard.jpg', id:'Keyboards And Mouse', linkto:'Mouse'},
    {name:'Wrist watches', imgname:'watch.jpg', id:'Wrist watches', linkto:'watches'},
    {name:'Cameras', imgname:'camera.jpg', id:'Cameras', linkto:'Cameras'},
    {name:'Batteries', imgname:'battery.jpg', id:'Batteries', linkto:'batteries'},
    {name:'Chargers', imgname:'charger.jpg', id:'Chargers', linkto:'Chargers'}
]

function HomePage(props) {
    return (
        <div>
            <ItemGroup list={firstList} title='Products' titleLink='shop'/>
            <ItemGroup list={[{name: 'Gadgets', imgname:'gadget.jpg', id:'nn',large:'large', linkto:'gadgets'},{name: 'Accessories', imgname:'accessories.jpg', id:'n', large:'large', linkto:'accessories'}]} title='Categories' titleLink='categories'/>
        </div>
    )
}

export default HomePage
