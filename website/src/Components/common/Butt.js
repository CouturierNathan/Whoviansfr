import {Link} from 'react-router-dom';
import React from 'react';

import '../../styles/Butt.css';

const Butt = (props) => {
    return (
        <Link className='button' to={props.link}>
            <span class="top-key"></span>
            <span class="text">{props.text}</span>
            <span class="bottom-key-1"></span>
            <span class="bottom-key-2"></span>
        </Link>
    );
}

export default Butt;