import React from 'react'
import { useContext } from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Button from 'react-bootstrap/esm/Button';
import Container from 'react-bootstrap/esm/Container';
import { CartContext } from '../context/ShoppingContext'
function Cart() {
  const [cart, setCart] = useContext(CartContext);
  
  
  return (
    <>
     {cart ?.map((item)=> {
      return(
      <Container key={item.id}>
       <CardGroup>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{item.name}</Card.Title>
        </Card.Body>
        <Card.Footer>
          {item.price}
        </Card.Footer>
        <Button variant='danger' size='sm'>Delete</Button>
      </Card>
        </CardGroup>
      </Container>
      )

     })}
    </>
  )
}

export default Cart