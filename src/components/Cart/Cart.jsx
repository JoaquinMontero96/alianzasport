import React, { useContext } from 'react';
import { cartContext } from '../../storage/cartContext';
import './Cart.css';

function Cart() {
  const { cart, getTotalPrice } = useContext(cartContext);

  return (
    <div className='cartContainer'>
      <div className="cartHeader">
        <p className='cartHeaderDesc'>Descripción</p>
        <p>Precio</p>
        <p>Cantidad</p>
        <p>Subtotal</p>
      </div>
      {cart.map(item =>
        <div className='cartProduct' key={item.id}>
          <img className='checkoutImg' src={item.urlImg} alt="" />
          <h2 className='checkoutTitle'>{item.title}</h2>
          <p className='checkoutPrice'>$ {item.price}</p>
          <p className='checkoutPrice'>{item.count}</p>
          <p className='checkoutSubtotal'>$ {item.price * item.count}</p>
          <button>X</button>
        </div>
      )}
      <p>Total: $ {getTotalPrice()}</p>
    </div>
  )
}

export default Cart
