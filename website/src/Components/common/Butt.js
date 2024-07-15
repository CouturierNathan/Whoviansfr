import {Link} from 'react-router-dom';
import React from 'react';

import '../../styles/Butt.css';

const Butt = (props) => {
    return (
        <Link className='button' to={props.link}>
            <span className='top-key'></span>
            <span className='text'>{props.text}</span>
            <span className='bottom-key-1'></span>
            <span className='bottom-key-2'></span>
        </Link>
    );
}

export default Butt;