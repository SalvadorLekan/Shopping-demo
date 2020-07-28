import React from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

function Nav({userstate}) {
    return (
        <nav className="nav">
        <div className="container">
            <div className="logo">
                <Link to='/'>Salva</Link>
            </div>
            <div id="mainListDiv" className="main_list">
                <ul className="navlinks">
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/'>Portfolio</Link></li>
                    <li><Link to='/'>Services</Link></li>
                    <li>{
                        userstate?
                            <div className='a'>Sign Out</div>:
                            <Link to='/signin'>Sign In</Link>}</li>
                </ul>
            </div>
            <span className="navTrigger">
                <i></i>
                <i></i>
                <i></i>
            </span>
        </div>
    </nav>
    )
}

export default Nav
