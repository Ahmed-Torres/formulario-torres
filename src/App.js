import './App.css';
import Formulario from './components/Formulario'
import React from 'react'
import {Container, Col, Row} from 'react-bootstrap'
//import Header from './components/Header'

function App() {

  return (
    <Container>
      <Row>
        <Col>
          <Formulario />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
