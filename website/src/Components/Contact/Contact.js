import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Butt from '../common/Butt'
import Form from 'react-bootstrap/Form';
import '../../styles/Form.css';

function Contact() {
  const [validated, setValidated] = useState(false);
  const [formData, setFormData] = useState({
    lname: '',
    fname: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.className.split(' ')[0]]: e.target.value,
      });
  };

  const sendval = async (e) => {
    e.preventDefault();
    
    try {
      setValidated(true);
  
      const smtpUrl = process.env.REACT_APP_SMTP_URL;
      
      const smtpResponse = await fetch(`${smtpUrl}/send-email`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: formData.email, name: formData.fname, lname: formData.lname, key: formData.key }),
      });
  
      const smtpData = await smtpResponse.json();
      console.log('SMTP Success:', smtpData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  if (validated) {
    return(
      <div className='Validated'>
        <h1>Merci {formData.fname}.</h1>
        <p>Vôtre message a bien été envoyé !</p>
        <p>Nous allons le traiter d'ici peux.</p>
        <Butt text="Retour à l'acceuil" link="/"></Butt>
      </div>
    );
  }

  return (
    <div className='myForm'>
      <Form onSubmit={sendval}>
        <div className='myTitle'>
          <h1>Nous Contacter</h1>
        </div>
        <div className='mySubTitle'>
          <Form.Text className="text-muted">
            Aucune de vos informations ne sera partagée.
          </Form.Text>
        </div>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Nom</Form.Label>
          <Form.Control className='lname' type="lname" placeholder="Nom" value={formData.lname} onChange={handleChange}/>
          <Form.Label>Prénom</Form.Label>
          <Form.Control className='fname' type="fname" placeholder="Prénom" value={formData.fname} onChange={handleChange}/>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control className='email' type="email" placeholder="Email" value={formData.email} onChange={handleChange}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Message</Form.Label>
            <Form.Control className='message' type="message" as="textarea" rows={3} />
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

export default Contact;