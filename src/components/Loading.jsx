import React from 'react'
import Spinner from 'react-bootstrap/Spinner';

function Loading() {
  return (
    <div>
        <h1>Cargando Tienda..</h1>
        <Spinner animation="border" variant="info" />
    </div>
  )
}

export default Loading