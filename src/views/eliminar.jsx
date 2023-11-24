import React, { useState } from 'react';
import { Card } from 'react-bootstrap';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const Eliminar = () => {
  const [deshabilitarBoton, setDeshabilitarBoton] = useState(false);
  const [errores, setErrores] = useState({}); // Cambiado a setErrores y errores
  const navigate = useNavigate();
  const { id } = useParams();

  const volver = () => {
    navigate("/");
  }

  const eliminar = async () => {
    setErrores({}); // Limpiar errores antes de la nueva solicitud
    setDeshabilitarBoton(true);

    try {
      const url = `http://localhost:3000/usuario`;
      const respuesta = await axios.delete(url,{data : {id:id}});

      if (respuesta.status === 200) {
        return navigate("/");
      } else {
        setErrores({ error: 'Ocurrió un error inesperado' });
      }
    } catch (error) {
      setErrores({ error: 'Ocurrió un error inesperado' });
    }

    setDeshabilitarBoton(false);
  };

  return (
    <Card.Body>
      <Alert variant={"warning"}>
        ¿Está seguro de eliminar el usuario con el ID {id}?
      </Alert>
      {
        errores.error && ( // Cambiado de error a errores.error
          <Alert variant="danger">
            {errores.error}
          </Alert>
        )
      }
      <ButtonGroup>
        <Button variant="primary" onClick={volver} disabled={deshabilitarBoton}>Volver</Button>
        <Button variant="danger" onClick={eliminar} disabled={deshabilitarBoton}>Eliminar</Button>
      </ButtonGroup>
    </Card.Body>
  );
};

export default Eliminar;