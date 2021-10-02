import React, {Form, Button, Col, Row} from 'react-bootstrap'

const Formulario = () => {

  const handleForm = (e) =>{
    e.preventDefault();
    let [nombreYapellido, numeroDocumento, correo, celular, product, coment] = e.target.elements;
    
    nombreYapellido = nombreYapellido.value.trim()
    numeroDocumento = numeroDocumento.value.trim()
    correo = correo.value.trim()
    celular = celular.value.trim()
    coment = e.target.elements.coment.value

    let radios = document.querySelectorAll(".form-check-input")
    if(nombreYapellido === "" || numeroDocumento === "" || celular === ""){
      return alert("Por favor, llenar campos obligatorios (*)")
    }
    
    radios.forEach(radio=>{
      if(radio.checked){
        product = radio.value
        console.log(nombreYapellido, numeroDocumento, correo, celular, product, coment)
      }
    })
    
    if(nombreYapellido === "" || numeroDocumento === "" || celular === ""){
      return alert("Por favor, llenar campos obligatorios (*)")
    }else if ((
      document.getElementById('prestamos').checked ||
      document.getElementById('inversiones').checked ||
      document.getElementById('finanzasPersonales').checked ||
      document.getElementById('seguros').checked ||
      document.getElementById('loJack').checked ||
      document.getElementById('pyMes').checked ||
      document.getElementById('saludYvida').checked) === false) {
        return alert("Elija un producto/servicio por el que desea consultar")
    }else{
      e.target.reset()
      return alert("Muchas gracias! en el transcurso del día nos comunicaremos con usted")
    }
  }
    return ( 
        <Form className="form" onSubmit={handleForm} >
          <Form.Group>
              <Form.Label className="labelControl">Nombre y Apellido *</Form.Label>
              <Form.Control type="text" name="nombreYapellido" placeholder="Nombre y Apellido" />
          </Form.Group>

          <Form.Group>
              <Form.Label className="labelControl">Número de Documento *</Form.Label>
              <Form.Control type="number" name="numeroDocumento" placeholder="Número de documento" />
          </Form.Group>

          <Form.Group>
              <Form.Label className="labelControl">Correo electrónico</Form.Label>
              <Form.Control type="mail" name="correo" placeholder="Correo electrónico" />
          </Form.Group>

          <Form.Group className="mb-3">
              <Form.Label className="labelControl">Celular *</Form.Label>
              <Form.Control type="number" name="celular" placeholder="celular" />
          </Form.Group>

          <Form.Group as={Row} className="mb-3" >
            <Col sm={10} className="radios">
              <Form.Check
                type="radio"
                label="Préstamos"
                name="product"
                id="prestamos"
                value="prestamos"
              />
              <Form.Check
                type="radio"
                label="Inversiones"
                name="product"
                id="inversiones"
                value="inversiones"
              />
              <Form.Check
                type="radio"
                label="Finanzas Personales"
                name="product"
                id="finanzasPersonales"
                value="finanzasPersonales"
              />
              <Form.Check
                type="radio"
                label="Seguros"
                name="product"
                id="seguros"
                value="seguros"
              />
              <Form.Check
                type="radio"
                label="LoJack"
                name="product"
                id="loJack"
                value="loJack"
              />
              <Form.Check
                type="radio"
                label="Servicios para PyMes"
                name="product"
                id="pyMes"
                value="pyMes"
              />
              <Form.Check
                type="radio"
                label="Salud / Vida"
                name="product"
                id="saludYvida"
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
              name="coment"
              id="coment"/>

          </Form.Group>

          <Button variant="primary" className="mt-3 mb-3 btn-lg" style={{width: "100%"}} type="submit">
              Submit
          </Button>

        </Form>
     );
}

export default Formulario;