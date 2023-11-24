
import { Card } from 'react-bootstrap';
import axios from 'axios';
import TablaDeDatos from '../component/TablaDeDatos.jsx';
import { useEffect, useState } from 'react';

const inicio =() => {
  const [lista,setLista] =useState([]);

  const cargarLista = async () =>{
    const url= 'http://localhost:3000/usuarios'
   
    let respuesta = await fetch (url);

    if (respuesta.status === 200){
      respuesta= await respuesta.json();
      setLista(respuesta);
    }
  }
 

 useEffect(() =>{
  cargarLista();
 },[])

  return (
      <Card.Body>
        <TablaDeDatos lista ={lista}/>
      </Card.Body>    
  );
 }
export default inicio;
