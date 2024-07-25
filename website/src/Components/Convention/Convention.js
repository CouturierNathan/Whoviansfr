import React from 'react';

import Act from './Act';
import Participants from './Participants';
import Butt from '../common/Butt'

import "../../styles/Convention.css";


// const lst = [
//     {
//         title: 'Concours de Cosplay',
//         desc: "Venez assister à un concours de cosplay sur l'univers de Doctor Who. Docteur, compagnion, antagoniste,... TOUT est permis !",
//         img: 'https://i0.wp.com/www.fteam.org/EDLB/wp-content/uploads/image.axd3_.jpg',
//         imgclass: "ActivityImg",
//         alt: "cosplay_img"
//     },
//     {
//         title: 'Écriture Gallifreyan',
//         desc: 'Venez apprendre à écrire en Gallifreyan, la langue originelle du docteur ! Une langue aussi géométrique que technique...',
//         img: 'https://vonguru.fr/wp-content/uploads/2017/03/vonguru_images_chronique_langue_fictive_gallifreyan_extrait-853x500.png',
//         imgclass: "ActivityImg ActivityImgAll",
//         alt: "gallifreyan_img"
//     },
//     {
//         title: 'Concours d\'Illustrations',
//         desc: 'Venez participer à un concours d\'illustrations sur le thème de Doctor Who. Dessin, peinture, sculpture,...',
//         img: 'https://img-c.udemycdn.com/course/750x422/2022460_8546.jpg',
//         imgclass: "ActivityImg ActivityImgAll",
//         alt: "illustration_img"
//     },
//     {
//         title: 'Quizz',
//         desc: 'Venez tester vos connaissances sur Doctor Who lors d\'un quizz. De la saison 1 à la saison 13, en passant par les spin-offs,...',
//         img: 'https://www.tomsguide.fr/content/uploads/sites/2/2020/10/meilleurs-jeux-quiz-android-et-iphone-1024x576.jpg',
//         imgclass: "ActivityImg ActivityImgAll",
//         alt: "quizz_img"
//     }
    
// ];

const Convention = () => {
    return (
        <div>
            <div className='Topic Activities'>
                <h2>Activites qui pourraient vous plaire :</h2>
                <div className='ActivitiesLst'>
                    <Act />
                </div>
            </div>
            <div className='Topic Infos'>
                <h2>Informations pratiques:</h2>
                <p>La Whovian France Convention est <strong>LA</strong> convention pour les fans de Doctor Who !</p>
                <p>Elle se déroule le 11 Novembre 2024 à Moulins, le centre de la France, au campus d'Epitech !</p>
                <p>Ce projet porté par des étudiants fans de la série et leurs directeur pédagogique, tous sont fan de l'univers du Docteur et souhaitaient partager leur passions avec tout les whovians. Grâce à des partenairs, que nous remercions, cet évènement est possible et ils nous permettent de vous proposer la meilleure expérience possible.</p>
                <Butt text="Je m'inscris" link="/RegisterEvent/" />
            </div>
            <div className='Topic'>
                <h2>Participants:</h2>
                <Participants />
            </div>
        </div>
    );
}

export default Convention;