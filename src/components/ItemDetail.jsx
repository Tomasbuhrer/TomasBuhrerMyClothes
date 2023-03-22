import React from 'react'
import Card from 'react-bootstrap/Card';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from "react";
import { doc, getDoc, getFirestore } from "firebase/firestore";
import ItemCount from './ItemCount';

function ItemDetail({clothes}) {
  console.log(clothes)
  
  const {id} = useParams();

  const [product, setProduct] = useState([])

  useEffect(()=> {
    const db = getFirestore();
    const clothe = doc(db, "prendas", `${id}`)

    getDoc(clothe).then((res)=> {
      if(res.exists()) {
        setProduct(res.data());
      } else {
        console.log("no hay producto")
      }
    })
  }, [])

  const clothesFilter = product.filter((product)=> product.id == id)
  
    //renderizador
  return (
    <>
    {clothesFilter.map((clothe)=> (
        <div key={clothe.id}>
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
            <Card.Title>{clothe.name}</Card.Title>
            <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
            </Card.Text>
            <Card.Text>
              Description:{clothe.description}
              </Card.Text>
              <Card.Text>
                Category: {clothe.category}
                </Card.Text>     
              <Card.Text>
                Stock:{clothe.stock}
              </Card.Text>
              <Card.Text>
                Price:{clothe.price}
              </Card.Text>

              <Card.Footer>
                <ItemCount 
                  stock={clothe.stock}
                  id={clothe.id}
                  price={clothe.price}
                  name={clothe.name}
                />
              </Card.Footer>
            
        </Card.Body>
        </Card>
    </div>

    ))}
    </>
  );
};

export default ItemDetail