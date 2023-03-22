import React from 'react'
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import clothe from "../assets/img/deportiva.jpg"



function Item({id, name, stock, category, description, price}) {

  return (
    <>
    <div>
        <div key={id}>
            <Row  className='g-4'>
              <Col>  
                 <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={clothe}/>
                   <Card.Body>
                   <Card.Title>{name}</Card.Title>
                  <Card.Text>{description}</Card.Text>
                  <Card.Text>
                   Stock: {stock}
                  </Card.Text>
                  <Card.Text>Price: {price}</Card.Text>
                  <Card.Text>
                    Category: {category}
                  </Card.Text>
                  <Link to={`/item/${id}`}>
                   <Button variant="primary">
                     Details
                   </Button>
                  </Link>
              </Card.Body>
                 </Card>
              </Col>
            </Row>
        </div>
    </div>
    
    </>
  )
}

export default Item;