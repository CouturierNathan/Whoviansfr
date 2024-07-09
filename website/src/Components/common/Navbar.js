import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_solo.svg';

import '../../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
        <Link to="/"><img src = {logo} alt="Logo-Whovians"/></Link>
        <h1>Whovians</h1>
        <div className='links'>
            <li>
              <Link to="/" className='menu__link'>Acceuil</Link>
            </li>
            <li>
              <Link to="/Convention" className='menu__link'>Convention</Link>
            </li>
            <li>
              <Link to="/workingon" className='menu__link'>Autre</Link>
            </li>
        </div>
    </nav>
  );
};

export default Navbar;
