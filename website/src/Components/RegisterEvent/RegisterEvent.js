import React from "react";
import MyForm from "./Form";

import "../../styles/RegisterEvent.css";

function RegisterEvent() {
    return (
        <div>
        <div className='banner'>
            <h5>Vous pouvez vous inscrire gratuitement à l'évènement.</h5>
            <h6>Votre billet vous sera demandé à l'acceuil de l'évènement pour accéder à la convention.</h6>
        </div>

        <MyForm />
        </div>
    );
}

export default RegisterEvent;