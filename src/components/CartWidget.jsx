import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/ShoppingContext';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import Button from 'react-bootstrap/esm/Button';




function CartWidget() {
  const [cart, setCart] = useContext(CartContext)

  const ItemsCart = cart.reduce((ini, curr) => {
    return ini + curr.Stock;
  }, 0)

  


  return (
    <>
    { cart < 1 ? (
      <Button disabled>
        <AiOutlineShoppingCart/>
          <span>{ItemsCart}</span>
        </Button>
    ) : (
      <Link to="./cart">
      <Button>
        <AiOutlineShoppingCart/>
          <span>{ItemsCart}</span>
        </Button>
      
      </Link>
    )}
    </>
    
  )
}

export default CartWidget;

