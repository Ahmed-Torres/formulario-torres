import './App.css';
import Formulario from './components/Formulario'
import React, {useState} from 'react'
import {Container, Col, Row} from 'react-bootstrap'

function App() {

  const [clients, setClients] = useState([]);

  const addClient = (client)=>{
    setClients([...clients, client])
  };

  return (
      <Container>
        <Row>
          <Col>
            <Formulario addClient={addClient} />
          </Col>
        </Row>
      </Container>
  );
}

export default App;
