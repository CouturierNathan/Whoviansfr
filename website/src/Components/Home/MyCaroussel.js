import Carousel from 'react-bootstrap/Carousel';

import React from 'react';
import { Link } from 'react-router-dom';

import first from '../../assets/Affiche_off.png';
import second from '../../assets/free.png';
import third from '../../assets/Illustration.png';

const MyCaroussel = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={first}
          alt="Affiche officielle"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={second}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>Une convention GRATUITE</h3>
          <p>Nous voulons rassembler un maximum de fans, d'où la gratuité de l'évènement !</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <Link to="/Convention">
        <img
          className="d-block w-100"
          src={third}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Des Activités</h3>
          <p>Clique moi pour découvrir les activités.</p>
        </Carousel.Caption>
        </Link>
      </Carousel.Item>
    </Carousel>
  );
}

export default MyCaroussel;
