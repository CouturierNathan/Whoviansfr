import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import logo_solo from '../../assets/logo_solo.svg';
import logo_long from '../../assets/logo_landscape.svg';
import '../../styles/Navbar.css';

const MyNavbar = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [menuVisible, setMenuVisible] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    // Cleanup function to remove the event listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  return (
    <nav className='navbar'>
      <Link to="/">
        <img src={windowWidth > 768 ? logo_solo : logo_long} alt="Logo-Whovians" />
      </Link>
      {windowWidth > 768 && <h1>Whovians</h1>}
      {windowWidth <= 768 && (
        <button onClick={toggleMenu} className='menu-toggle'>
          ☰
        </button>
      )}
      <div className={`links ${menuVisible || windowWidth > 768 ? 'visible' : 'hidden'}`}>
        <li>
          <Link to="/" className='menu__link'>Acceuil</Link>
        </li>
        <li>
          <Link to="/Convention" className='menu__link'>Convention</Link>
        </li>
        <li>
          <Link to="/Contact" className='menu__link'>Contact</Link>
        </li>
      </div>
    </nav>
  );
};

export default MyNavbar;
