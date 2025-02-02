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
            if (Array.isArray(data)) {
                setLst(data);
            } else {
                console.error('Data is not an array:', data);
                setLst([]); // Set to an empty array if data is not an array
            }
          })
          .catch(error => console.error('Error fetching data:', error));
    }, []);

    if (lst.length === 0) {
      return <p>Loading...</p>;
    }

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