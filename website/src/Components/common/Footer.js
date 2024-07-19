import React from 'react';

import logoInsta from "../../assets/instagram.svg"
import logoFb from "../../assets/Facebook.svg"

import '../../styles/Footer.css';

const Footer = () => {
    return (
        <div className='Footer'>
            <div className='container'>
                <div className='contact'>
                    <h5>Mail: </h5>
                    <a href='mailto:contact@whovians.fr'> contact@whovians.fr </a>
                </div>
                <div className='separator' />
                <div className='contact'>
                    <h5>Adresse: </h5>
                    <a href="https://www.google.com/maps/place/Ecole+informatique+Moulins+-+Epitech/@46.5425055,3.338948,16z/data=!3m1!4b1!4m6!3m5!1s0x47f11d415baa7817:0x8dde37e9942f8126!8m2!3d46.5425055!4d3.3415229!16s%2Fg%2F11qmmfytc4?entry=ttu" target="blank">9 rue de Bad Vilbel, 03000 Moulins</a>
                </div>
                <div className='separator' />
                <div className='contact'>
                    <h5>Réseaux sociaux: </h5>
                    <div className='socialmedia'>
                        <div className='social'>
                            <a href='https://www.instagram.com/whovians.fr/' target='blank'> <img src={ logoInsta } alt='instagram' /> </a>
                        </div>
                        <div className='social'>
                            <a href='https://www.facebook.com/profile.php?id=61561717794230' target='blank'> <img src={ logoFb } alt='facebook' /> </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Footer;
