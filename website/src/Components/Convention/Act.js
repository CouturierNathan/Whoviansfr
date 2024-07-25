import React, { useState, useEffect } from 'react'; // Import useEffect

import "../../styles/Convention.css";

require('dotenv').config();

function Act() {
    const [lst, setLst] = useState([]);

    useEffect(() => {
        const apiUrl = process.env.REACT_APP_API_URL;
        fetch(`${apiUrl}/acts`)
          .then(response => response.json())
          .then(data => {
            if (Array.isArray(data)) {
                setLst(data);
            } else {
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
          {lst.map(p => (
                <div className='ActivityCard' key={p.id}>
                  <div className={p.imgclass}>
                      <img src={p.img} alt={p.alt} />
                  </div>
                  <h4>{p.title}</h4>
                  <p>{p.desc}</p>
                </div>
            ))}
      </div>
    );
}

export default Act;