import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { cartContext } from '../../storage/cartContext';
import './Cart.css';

function Cart() {
  const { cart, getTotalPrice, clearCart, removeItem } = useContext(cartContext);

  return (
    <div className='cartContainer'>
        {cart.length === 0 ?
          <div>
            <p>Tu carrito está vacío 😥</p>
            <p>Hacé click <Link to='/'>acá</Link> para agregar productos a tu carrito.</p>
          </div>
          :
          <div>
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
              <button onClick={() => removeItem(item.id)}>X</button>
            </div>
            )}
            <p>Total: $ {getTotalPrice()}</p>
            <button onClick={clearCart}>Vaciar carrito</button>
          </div>
        }
    </div>
  )
}

export default Cart
