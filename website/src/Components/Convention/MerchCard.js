import React from 'react'


import "../../styles/MerchCard.css"

function MerchCard({Owner, link, desc}) {
    return(
        <div className='MerchCard'>
            <div className='MerchImg'>
                <img src={link} alt="placeholder" />
            </div>
            <h4 className='Owner'>{Owner}</h4>
            <p className='desc'>{desc}</p>
        </div>
    );
}

export default MerchCard;