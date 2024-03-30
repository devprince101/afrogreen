import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../logo.svg';
import './styles/Navbar.css';

function Navbar() {
    const showNavbar = () => {
        document.body.classList.toggle('togllednav');
    }
    const hideNavbar = () => {
        document.body.classList.remove('togllednav');
    }
  return (
    <nav>
        <div className='navbar'>
            <div className='logowrapper'>
                <Link to="/">
                    <img src={Logo} alt='Afogreen Ltd' className='logo'/>
                </Link>
            </div>
            <ul className='jawrapper'>
                <li onClick={hideNavbar}>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li onClick={hideNavbar}>
                    <NavLink to="/about">
                        about us
                    </NavLink>
                </li>
                <li onClick={hideNavbar}>
                    <NavLink to="/contact_us">
                        contact us
                    </NavLink>
                </li>
            </ul>
            <button onClick={showNavbar} className='btn'>
                <div className='hamburger'/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar