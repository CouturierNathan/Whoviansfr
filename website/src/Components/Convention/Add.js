import React from "react";
require('dotenv').config()

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:3000' ;

const newExhib = {
    name: 'test name',
    desc: 'test desc',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrL0q1GCq4yqgXZR63GG1LHTuKSIIbjVqVQg&s'
}

const test = () => {
  console.log('ENV:', process.env);
  console.log('API URL used:', apiUrl);
  fetch(`${apiUrl}/api/exhibs`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newExhib)
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok ' + response.statusText);
      }
      return response.json();
    })
    .then(data => {
      console.log('Success:', data);
    })
    .catch(error => {
      console.error('There has been a problem with your fetch operation:', error);  
    });
}

const Add = () => {
    return (
        <div>
            <h3>Add Merch:</h3>
            <button onClick={() => test()}>Add Merch</button>
        </div>
    );
}

export default Add;
