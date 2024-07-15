import React from 'react';

const apiUrl = process.env.REACT_APP_API_URL || 'http://localhost:5000';

const newExhib = {
    name: 'test name',
    desc: 'test desc',
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrL0q1GCq4yqgXZR63GG1LHTuKSIIbjVqVQg&s'
};

const test = async () => {
  try {
    console.log('API URL used:', apiUrl);

    const response = await fetch(`${apiUrl}/exhib`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newExhib),
    });

    // if (!response.ok) {
    //   throw new Error('Network response was not ok ' + response.statusText);
    // }
    console.log(response);
    const data = await response.json();
    console.log('Success:', data);
  } catch (error) {
    console.error('newExhib:', JSON.stringify(newExhib));
    console.error('There has been a problem with your fetch operation:', error);
  }
};

const Add = () => {
  return (
    <div>
      <h3>Add Merch:</h3>
      <button onClick={test}>Add Merch</button>
    </div>
  );
};

export default Add;
