import React, { useState, useEffect } from 'react'; // Import useEffect
import MerchCard from './MerchCard';
import "../../styles/Participants.css";

require('dotenv').config();

function Participants() {
    const [lst, setLst] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        fetch(`${apiUrl}/exhibs`)
          .then(response => response.json())
          .then(data => {
            setLst(data);
          })
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
      <div>
          <div className='ProductList'>
          {lst.map(p => (
                <MerchCard key={p.id} Owner={p.name} link={p.img} desc={p.description} />
          ))}
          </div>
      </div>
    );
}

export default Participants;