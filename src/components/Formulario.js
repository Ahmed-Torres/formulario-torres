import {Form, Button, Col, Row} from 'react-bootstrap'
import React from 'react';
import PropTypes from 'prop-types';

const Formulario = ({addClient}) => {

  const handleSubmit = (e) =>{
    e.preventDefault();
    let [nombreYapellido, numeroDocumento, correo, celular, product]= e.target.elements
    const radios = document.querySelectorAll(".form-check-input")
    
    radios.forEach(radio=>{
      if(radio.checked){
        product = radio.value;
      }
    })
    
    if(nombreYapellido.value.trim() === "" || numeroDocumento.value.trim() === "" || celular.value.trim() === ""){
      return alert("Por favor, llene los campos requeridos (*)")
    }
    if (product.checked === false){
      return alert("Elija un producto/servicio por el que desea consultar")
    }else{
      addClient({
        nombreYapellido : nombreYapellido.value.trim(),
        numeroDocumento : numeroDocumento.value.trim(),
        correo : correo.value.trim(),
        celular : celular.value.trim(),
        product: product,
        coment : e.target.elements.coment.value
      })
      e.target.reset()
      return alert("Muchas gracias! en el transcurso del día nos comunicaremos con usted")
    }
  }

  return (
    <Form className="form" onSubmit={handleSubmit} >
      <Form.Group>
        <Form.Label className="labelControl">Nombre y Apellido *</Form.Label>
        <Form.Control type="text" id="nombreYapellido"name="nombreYapellido" placeholder="Nombre y Apellido"/>
      </Form.Group>

      <Form.Group>
        <Form.Label className="labelControl">Número de Documento *</Form.Label>
        <Form.Control type="number" id="numeroDocumento" name="numeroDocumento" placeholder="Número de documento"/>
      </Form.Group>

      <Form.Group>
        <Form.Label className="labelControl">Correo electrónico</Form.Label>
        <Form.Control type="mail" id="correo" name="correo" placeholder="Correo electrónico" />
      </Form.Group>

      <Form.Group className="mb-3">
        <Form.Label className="labelControl">Celular *</Form.Label>
        <Form.Control type="number" id="celular" name="celular" placeholder="celular"/>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" >
        <Col sm={10} className="radios">
          <Form.Check
            type="radio"
            label="Préstamos"
            name="product"
            value="prestamos"
          />
          <Form.Check
            type="radio"
            label="Inversiones"
            name="product"
            value="inversiones"
          />
          <Form.Check
            type="radio"
            label="Finanzas Personales"
            name="product"
            value="finanzasPersonales"
          />
          <Form.Check
            type="radio"
            label="Seguros"
            name="product"
            value="seguros"
          />
          <Form.Check
            type="radio"
            label="LoJack"
            name="product"
            value="loJack"
          />
          <Form.Check
            type="radio"
            label="Servicios para PyMes"
            name="product"
            value="pyMes"
          />
          <Form.Check
            type="radio"
            label="Salud / Vida"
            name="product"
            value="saludYvida"
          />
        </Col>
      </Form.Group>

      <Form.Group>
        <Form.Label className="coment">Comentario</Form.Label>
        <Form.Control 
          type="textarea" 
          rows={3}
          placeholder="Quiero recibir información acerca de ..."
          name="coment"/>
      </Form.Group>

      <Button  
        className="mt-3 mb-3 btn-lg" 
        style={{width: "100%"}} 
        type="submit">
          Submit
      </Button>
    </Form>
    );

}
Formulario.propTypes = {
  addClient: PropTypes.func.isRequired
}

export default Formulario;