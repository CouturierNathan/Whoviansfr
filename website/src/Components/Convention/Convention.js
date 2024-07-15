import React from 'react';

import Participants from './Participants';

import "../../styles/Convention.css";


const lst = [
    {
        title: 'Concours de Cosplay',
        desc: "Venez assister à un concours de cosplay sur l'univers de Doctor Who. Docteur, compagnion, antagoniste,... TOUT est permis !",
        img: 'https://i0.wp.com/www.fteam.org/EDLB/wp-content/uploads/image.axd3_.jpg',
        imgclass: "ActivityImg",
        alt: "cosplay_img"
    },
    {
        title: 'Écriture Gallifreyan',
        desc: 'Venez apprendre à écrire en Gallifreyan, la langue originelle du docteur ! Une langue aussi géométrique que technique...',
        img: 'https://vonguru.fr/wp-content/uploads/2017/03/vonguru_images_chronique_langue_fictive_gallifreyan_extrait-853x500.png',
        imgclass: "ActivityImg ActivityImgAll",
        alt: "gallifreyan_img"
    },
    {
        title: 'Visionnage',
        desc: "Venez visionner des épisodes de Doctor Who, en compagnie d'autres fans de la série. Un moment de partage et de (re)découverte !",
        img: 'https://media.gqmagazine.fr/photos/603e6a8da9360b0585bcbc6a/16:9/w_2560%2Cc_limit/108387402',
        imgclass: "ActivityImg ActivityImgAll",
        alt: "visionnage_img"
    },
    {
        title: 'Jeux de rôles',
        desc: 'Venez jouer à des jeux de rôle sur le thème de Doctor Who. De la stratégie, de la chance, de la coopération,... Il y en aura pour tous les goûts !',
        img: 'https://i0.wp.com/gusandco.net/wp-content/uploads/2023/05/Dice.png?resize=1140%2C639&ssl=1',
        imgclass: "ActivityImg ActivityImgAll",
        alt: "jeux_img"
    },
    {
        title: 'Quizz',
        desc: 'Venez tester vos connaissances sur Doctor Who lors d\'un quizz. De la saison 1 à la saison 13, en passant par les spin-offs,...',
        img: 'https://www.tomsguide.fr/content/uploads/sites/2/2020/10/meilleurs-jeux-quiz-android-et-iphone-1024x576.jpg',
        imgclass: "ActivityImg ActivityImgAll",
        alt: "quizz_img"
    }
    
];

const Convention = () => {
    return (
        <div>
            <div className='Topic Activities'>
                <h2>À cette convention, nous prévoyons plusieurs activités qui pourraient vous plaire:</h2>
                <div className='ActivitiesLst'>
                    {lst.map(p => {
                      return(
                        <div className='ActivityCard'>
                            <div className={p.imgclass}>
                                <img src={p.img} alt={p.alt} />
                            </div>
                            <h4>{p.title}</h4>
                            <p>{p.desc}</p>
                        </div>
                      )
                    })}
                </div>
            </div>
            <div className='Topic Infos'>
                <h2>Informations pratiques:</h2>
                <p>La Whovian France Convention est <strong>LA</strong> convention pour les fans de Doctor Who !</p>
                <p>Elle se déroule le 11 Novembre 2024 à Moulins, le centre de la France, au campus d'Epitech !</p>
                <p>Ce projet porté par des étudiants fans de la série et leurs directeur pédagogique, tous sont fan de l'univers du Docteur et souhaitaient partager leur passions avec tout les whovians. Grâce à des partenairs, que nous remercions, cet évènement est possible et ils nous permettent de vous proposer la meilleure expérience possible.</p>
            </div>
            <Participants />
        </div>
    );
}

export default Convention;