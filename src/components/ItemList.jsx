import Item from "./Item"

function ItemList({products}) {
 
 
  return (
    <>
    
    {
        products.map((clothe)=> (
             <Item
            key={clothe.name}
            id={clothe.id}
            name={clothe.name}
            price={clothe.price}
            description={clothe.description}
            stock={clothe.stock}
            category={clothe.category}
            />
        ))
            }
    
    
    </>
  )
}

export default ItemList;