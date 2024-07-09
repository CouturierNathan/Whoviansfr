import React from 'react';
import '../../styles/Home.css';

import Event from './Event';
import Topic from './Topic';



const Home = () => {
  return (
    <div className='Home'>
      <div className='banner'>
        <h1 className='title'>Home Page</h1>
        <div className='presentation'>
          Bienvenue sur Whovians, le site ultime dédié aux fans de Doctor Who !
          Que vous soyez un nouveau venu dans l'univers fascinant des Seigneurs du Temps ou un passionné de longue date, notre site est conçu pour vous offrir une expérience immersive et enrichissante.
          Plongez dans les aventures du Docteur, explorez les mystères du TARDIS, et connectez-vous avec une communauté mondiale de Whovians partageant votre amour pour cette série emblématique.
          <div className='quote'>
            <p className='citation'>"Wibbly wobbly, timey wimey"</p>
            <p className='author'>- Le Docteur</p>
          </div>
        </div>
      </div>

      <Event />

      <Topic />
    </div>
  );
};

export default Home;