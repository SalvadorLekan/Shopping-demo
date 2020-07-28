import React,{useState} from 'react'
import './Nav.scss'
import { Link } from 'react-router-dom'

function Nav({userstate}) {
    const [ClassName, setClassName] = useState('')
    const handletoggle=(e) =>{
        ClassName? setClassName(''):setClassName('show_list')
    
    };
    return (
        <nav className="nav">
        <div className="container">
            <div className="logo">
                <Link to='/'>Salva</Link>
            </div>
            <span className="navTrigger" onClick={handletoggle}>
                <i></i>
                <i></i>
                <i></i>
            </span>
            <div id="mainListDiv" className={`main_list ${ClassName}`}>
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
        </div>
    </nav>
    )
}

export default Nav
