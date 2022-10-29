import React, {useState} from 'react'
 import {Link} from 'react-router-dom'
 import './Navbar.css'


function Navbar() {
    const[click, setClick] = useState(false)

    const handleClick = () => {
        setClick(!click)
    }
    return (
        <>
            <nav className='navbar'>
                <div className='nav-container'>
                    <Link to='/' className='nav-logo'>Digiency <i className='fas fa-code'> </i></Link>
                    <ul className={click ? "nav-menu active" : "nav-menu"}>
                        <li className='nav-item'> <Link to='/' className='nav-links' onClick={handleClick}>Home</Link></li>
                        <li className='nav-item'> <Link to='/about'  className='nav-links' onClick={handleClick}>About</Link></li>
                        <li className='nav-item'> <Link to='/login' className='nav-links' onClick={handleClick} >Login</Link></li>
                        <li className='nav-item'> <Link to='/signup' className='nav-links' onClick={handleClick}>SignUp</Link></li>
                    </ul>
                    <div className='nav-icon' onClick={handleClick}>
                        <i className={click ? "fas fa-times" : "fas fa-bars"}> </i>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;