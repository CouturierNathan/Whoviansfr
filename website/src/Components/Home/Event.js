import React from 'react';
import Butt from '../common/Butt';


import MyCaroussel from "./MyCaroussel";
import '../../styles/Event.css';


const Event = () => {
    return (
        <div className='Event'>
          <h2>Événements à venir</h2>
          <div className='container'>
            <div className='images'>
              <MyCaroussel />
            </div>
            <div className='description'>
                <h1>Convention Doctor Who France</h1>
                <p>Nous organisons la première Édition de la convention Doctor Who France. Pour réunir cette belle communauté que sont les whovians autour d'activités tirés de notre univers préféré !</p>
                <h2>Au Programme :</h2>
                <ul>
                  <li>Concours de cosplay</li>
                  <li>Ateliers écriture Gallifreyen</li>
                  <li>Concours d'Illustrations</li>
                  <li>Ventes de merch</li>
                  <li>...</li>
                </ul>
                <Butt text="S'inscrire" link="/RegisterEvent/"/>
            </div>
          </div>
          <div className='details'>
            <h2>11 Novembre 2024</h2>
            <h5> <a href = "https://www.google.com/maps/place/Ecole+informatique+Moulins+-+Epitech/@46.5425055,3.338948,16z/data=!3m1!4b1!4m6!3m5!1s0x47f11d415baa7817:0x8dde37e9942f8126!8m2!3d46.5425055!4d3.3415229!16s%2Fg%2F11qmmfytc4?entry=ttu" target='blank'>9 rue de Bad Vilbel, 03000 Moulins</a></h5>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5488.523828652232!2d3.338947977195865!3d46.542505471112094!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47f11d415baa7817%3A0x8dde37e9942f8126!2sEcole%20informatique%20Moulins%20-%20Epitech!5e0!3m2!1sfr!2sfr!4v1719482534651!5m2!1sfr!2sfr" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade" title='map'></iframe>
          </div>
        </div>
    );
}

export default Event;