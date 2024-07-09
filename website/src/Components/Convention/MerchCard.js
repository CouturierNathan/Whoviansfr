import React from 'react'


import "../../styles/MerchCard.css"

function MerchCard({Owner, link, desc}) {
    return(
        <div className='MerchCard'>
            <h3 className='Owner'>{Owner}</h3>
            <img src={link} alt="placeholder" />
            <p className='desc'>{desc}</p>
        </div>
    );
}

export default MerchCard;