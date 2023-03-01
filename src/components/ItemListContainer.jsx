import React from 'react'
import ItemList from "./ItemList"
import clothes from "../data.json"
import { useParams } from 'react-router-dom'

function ItemListContainer() {
  const {category} = useParams();
  

 /* const getDatos = () => {
  return new Promise((resolve, reject) => {
    if(clothes.length === 0) {
      reject(new error("no hay datos"))
    } 
        setTimeout(()=> {
        resolve(clothes);
      }, 2000)

    

  })
 }

 async function fetchingData () {
  try{
    const datosFetched = await getDatos();
  } catch(err) {
    console.log(err)
  }
 }


 fetchingData(); */

 const catFilter = clothes.filter((clothe) => clothe.category === category);
 
  return (
    <>
     {category ? <ItemList clothes={catFilter}/> : <ItemList clothes={clothes}/>}

    </>
  
  );
};

export default ItemListContainer;