import React from 'react';
// import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo_solo.svg';

import '../../styles/Navbar.css';

const MyNavbar = () => {
  // return (
  //   <Navbar bg="light" expand="lg">
  //     <Container>
  //       <Navbar.Brand href="#home"><img src={logo} /></Navbar.Brand>
  //       <Navbar.Brand href="#home">Whovians</Navbar.Brand>
  //       <Navbar.Toggle aria-controls="basic-navbar-nav" />
  //       <Navbar.Collapse id="basic-navbar-nav">
  //         <Nav className="me-auto">
  //           <Nav.Link href="#home">Accueil</Nav.Link>
  //           <Nav.Link href="#link">Lien</Nav.Link>
  //           <Nav.Link href="#features">Fonctionnalités</Nav.Link>
  //           <Nav.Link href="#pricing">Tarifs</Nav.Link>
  //         </Nav>
  //       </Navbar.Collapse>
  //     </Container>
  //   </Navbar>
  // );

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
            {/* <li>
              <Link to="/workingon" className='menu__link'>Autre</Link>
            </li> */}
        </div>
    </nav>
  );
};

export default MyNavbar;
