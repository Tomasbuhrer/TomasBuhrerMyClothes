import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';

function ItemDetail({clothes}) {
  const {id} = useParams();

  const clothesFilter = clothes.filter((clothe)=> clothe.id == id)
    //renderizador
  return (
    <>
    {clothesFilter.map((clothe)=> {
        <div key={clothe.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{clothe.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>            
            <Button variant="primary">Buy</Button>
        </Card.Body>
        </Card>
    </div>

    })}
    </>
  );
};

export default ItemDetail