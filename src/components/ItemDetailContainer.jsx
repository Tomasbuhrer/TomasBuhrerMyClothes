import React from 'react'
import clothes from "../data.json"
import ItemDetail from "./ItemDetail"


function ItemDetailContainer() {
    //logica contenedora quien renderiza 
    const getData = () =>{
        return new Promise((resolve,reject)=> {
            if(clothes.length === 0) {
                reject(new error("no existen datos"))
            }
            setTimeout(()=> {
                resolve(clothes);
            }, 2000)
        })
    }

    async function DataFetching () {
        try{
            const datosfetch = await getData();
            
        }catch {
            console.log(error)

        }
    }

    DataFetching();

  return (
    <>
   <ItemDetail clothes={clothes}/>
    </>
  )
}

export default ItemDetailContainer