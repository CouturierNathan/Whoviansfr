import React, { useState } from 'react'; // Correction ici
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import '../../styles/Form.css';

function MyForm() {
  const [formData, setFormData] = useState({
    lastname: '',
    name: '',
    email: '',
    cosplay: false,
    ecriture: false,
    diffusion: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
    console.log(e.target.className.split(' ')[0]);
    console.log(e.target.value);
  };

  const sendval = (e) => { // Correction ici pour inclure e
    e.preventDefault();
    console.log('sendval');
    console.log(formData);

    fetch('http://localhost:3001/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div className='myForm'>
      <Form onSubmit={sendval}>
        <div className='myTitle'>
          <h1>Je m'inscris</h1>
        </div>
        <div className='mySubTitle'>
          <Form.Text className="text-muted">
            Aucune de vos informations ne sera partagée.
          </Form.Text>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control className='fname' type="lastname" placeholder="Nom" onChange={handleChange}/>
          <Form.Label>Prénom</Form.Label>
          <Form.Control className='lname' type="name" placeholder="Prénom" onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control className='email' type="email" placeholder="Email" onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check className='cosplay' type="checkbox" label="Je souhaites participe au concour de Cosplay (inscription obligatoire pour participation)" onChange={handleChange}/>
          <Form.Check className='Gallifreyan' type="checkbox" label="Je souhaites participe à l'atelier d'écriture Gallifreyen" onChange={handleChange}/>
          <Form.Check className='diffusion' type="checkbox" label="Je souhaites participe à la diffusion d'épisodes" onChange={handleChange}/>
        </Form.Group>
        <div className='myButton'>
          <Button variant="primary" type="submit">
            Valider
          </Button>
        </div>
      </Form>
    </div>
  );
}

export default MyForm;