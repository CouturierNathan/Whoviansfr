import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Butt from '../common/Butt'
import Form from 'react-bootstrap/Form';
import '../../styles/Form.css';

function MyForm() {
  const [formData, setFormData] = useState({
    lname: '',
    fname: '',
    email: '',
    message: '',
    key: generateRandomHexKey(16),
  });

  const handleChange = (e) => {
      setFormData({
        ...formData,
        [e.target.className.split(' ')[0]]: e.target.value,
      });
  };

  const sendval = async (e) => {
    e.preventDefault();
    const apiUrl = process.env.REACT_APP_API_URL;
    
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
  };

  if (validated) {
    return(
      <div className='Validated'>
        <h1>Merci {formData.fname} de vous être inscrit !</h1>
        <p>Vous allez recevoir un mail avec votre billet pour la journée !</p>
        <p>Ne perdez pas vôtre billet, il vous le sera demandé pour certaines activités.</p>
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

export default MyForm;