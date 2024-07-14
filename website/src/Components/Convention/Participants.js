import React from 'react'
import MerchCard from './MerchCard'
import "../../styles/Participants.css"

require('dotenv').config();


let lst = [];

const apiUrl = process.env.API_URL || 'http://localhost:4000'; // Fallback pour le développement local
fetch(`${apiUrl}/api/exhibs`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
    lst = data;
}); 

function Participants() {
    return (
      <div>
          <h3>Participants:</h3>
          <div class="ProductList">
              {lst.map(p => {
                return(
                  <MerchCard Owner={p.Owner} link = {p.img} desc={p.desc} />
                )
              })}
          </div>
      </div>
    );
}

export default Participants;