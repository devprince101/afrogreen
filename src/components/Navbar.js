import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import Logo from '../logo.svg';
import './styles/Navbar.css';

function Navbar() {
  return (
    <nav>
        <div className='navbar'>
            <div className='logowrapper'>
                <Link to="/">
                    <img src={Logo} alt='Afogreen Ltd' className='logo'/>
                </Link>
            </div>
            <ul className='jawrapper'>
                <li>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/about">
                        about us
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/contact_us">
                        contact us
                    </NavLink>
                </li>
            </ul>
            <button className='btn'>
                <div className='hamburger'/>
            </button>
        </div>
    </nav>
  )
}

export default Navbar