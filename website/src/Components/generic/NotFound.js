import React from 'react';
import '../../styles/other.css';
import logo from '../../assets/logo.svg';

const NotFound = () => {
  return (
    <div className='NotFound'>
      <h1>404 - Page Not Found</h1>
      <h5>Sorry, the page you are looking for does not exist.</h5>

      <img src={logo} alt="Doctor Who Logo"/>
    </div>
  );
};

export default NotFound;