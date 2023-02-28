import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';



function Item({id,name, stock, category}) {

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
                  <Card.Text>
                    Category: {category}
                  </Card.Text>
                  <Button variant="primary">
                  <Link to={`/item/${id}`}>Details</Link>
                  </Button>
            </Card.Body>
            </Card>
        </div>
    </div>
    
    </>
  )
}

export default Item;