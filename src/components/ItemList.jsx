import React from 'react'
import Item from "./Item"

function ItemList({clothes}) {
  return (
    <>
    
    {
        clothes.map((clothe)=> (
             (<Item
            key={clothe.id}
            id={clothe.id}
            name={clothe.name}
            price={clothe.price}
            description={clothe.description}
            stock={clothe.stock}
            category={clothe.category}
            />)
        ))
            }
    
    
    </>
  )
}

export default ItemList;