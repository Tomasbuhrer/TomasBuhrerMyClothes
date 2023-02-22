import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link, useParams } from 'react-router-dom';


function Item({id,name, stock}) {
  return (
    <>
    <div>
        <div key={id}>

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
                </Card.Text>
                  <Card.Text>
                   Stock: {stock}
                  </Card.Text>
                  <Link to={`/item/${id}`}><Button variant="primary">Detail</Button></Link>
            </Card.Body>
            </Card>
        </div>
    </div>
    
    </>
  )
}

export default Item;