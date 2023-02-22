import React from 'react'
import Item from "./Item"

function ItemList({clothes}) {
  return (
    <>
    
    {
        clothes.map((clothe)=> {
            return (<Item
            key={clothe.id}
            id={clothe.id}
            name={clothe.name}
            stock={clothe.stock}
            category={clothe.category}
            />)
        })
    }
    
    </>
  )
}

export default ItemList;