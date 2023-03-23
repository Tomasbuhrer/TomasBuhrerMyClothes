import React, { useEffect, useState } from 'react'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import ItemList from "./ItemList"
import { useParams } from 'react-router-dom'

function ItemListContainer() {
  const {category} = useParams();
  const [products, setProducts] = useState([]);
 

  useEffect(() => {
    const db = getFirestore();
    const clothesCollection= collection(db, "prendas");
    getDocs(clothesCollection).then((res) => {
      const clothes = res.docs.map((doc) => ({
        ...doc.data(),
        id: doc.id,
      }))
      if(category){
        setProducts(products.filter((clothe) => clothe.category === category))
      } else {
        setProducts(clothes);

      }
    });
  }, []);
 
  return (
    <>
    
     {category ? <ItemList clothes={Filter}/> : <ItemList clothes={products}/>}

    </>
  
  );
};

export default ItemListContainer;