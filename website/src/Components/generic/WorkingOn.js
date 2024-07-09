import React from 'react';
import '../../styles/other.css';

import logo from '../../assets/logo.svg';



const WorkingOn = () => {
  return (
    <div className='WorkingOnIt'>
        <h1>Working on it...</h1>
        <h5>This page is under development.</h5>

        <img src={logo} alt='logo' />
    </div>
  );
};

export default WorkingOn;