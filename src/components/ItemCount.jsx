import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ItemCount() {

  const [item, setItem] = useState(0);

  const add = ()=> {
    setItem(item + 1)
  }

  const rest = ()=> {
    setItem(item - 1)
  }

  const reset = () => {
    setItem(0)
  }

 

  return (
    
    <>  

        <Card border='secondary' style={{ width: '18rem' }}>
        <Card.Img variant="top"/>
        <Card.Body>
        <Card.Title>Campera De Cuero</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary" onClick={add}>Add</Button>
        <p>{item}</p>
        <Button  variant="primary" onClick={rest}>Rest</Button>
        <Button variant="primary" onClick={reset}>Clear</Button>
      </Card.Body>
    </Card>
    </>
    
    )
}

export default ItemCount
            