import  { useContext, useState, useRef } from 'react'
import { CartContext } from '../context/ShoppingContext';
import {TfiPlus, AiOutlineMinus} from "react-icons/all"
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';

const ItemCount = ({stock, id, price ,name}) => {
  
  const [count, setCount] = useState(0);
  const [cart,setCart] = useContext(CartContext)
  console.log(cart)

  const addQty = ()=> {
    setCount(count + 1)
  }

  const removeQty = ()=> {
    setCount(count - 1)
  }
  const addCart = () => {
    setCart((item) => {
      const ItemFound = item.find((item) => item.id === id);
      if(ItemFound) {
        return item.map((item) => {
          if(item.id === id) {
            return {...item, quantity:item.stock + count}
          } else {
            return item;
          }
        });
      } else {
        return [...item, {id, stock: count, price, name}]
      }
    })
  }
 

  return (
    
    <>
      <ButtonGroup>
      {count < 1 ? (
        <Button fixed="top" variant="primary" size="sm" disabled>
        <AiOutlineMinus/>
      </Button>
      ): (
        <Button fixed="top" size='sm' onClick={removeQty}><AiOutlineMinus/></Button>
      )}
      <label>{count}</label>
      {count < stock ? (
        <Button fixed="top" size='sm' onClick={addQty}><TfiPlus/></Button>
      ): (
        <Button fixed="top" variant="primary" size="sm" disabled>
        <TfiPlus/>
      </Button>
      
      )}

      <Button onClick={addCart}> Add to Cart</Button>
      </ButtonGroup>
    </>
    
    )
}

export default ItemCount
            