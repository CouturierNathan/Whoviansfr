import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

import '../../styles/Form.css';

function MyForm() {
  return (
    <div className='myForm'>
      <Form>
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
          <Form.Control type="lastname" placeholder="Nom" />
          <Form.Label>Prénom</Form.Label>
          <Form.Control type="name" placeholder="Prénom" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Password" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Je souhaites participe au concour de Cosplay (inscription obligatoire pour participation)" />
          <Form.Check type="checkbox" label="Je souhaites participe à l'atelier d'écriture Gallifreyen" />
          <Form.Check type="checkbox" label="Je souhaites participe à la diffusion d'épisodes" />
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