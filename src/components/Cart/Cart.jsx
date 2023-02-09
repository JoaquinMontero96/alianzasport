import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { createBuyOrder, exportData } from '../../services/db';
import { cartContext } from '../../storage/cartContext';
import './Cart.css';

function Cart() {
  const { cart, getTotalPrice, clearCart, removeItem } = useContext(cartContext);

  async function finalizarCompra(e) {
    const order = {
      buyer: {
        name: "Joaquin",
        email: "joaquingmontero1996@gmail.com",
        phone: 2645736450
      },
      items: cart.map( ( product ) => ({id: product.id, title: product.title, price: product.price, count: product.count})),
      date: new Date(),
      total: getTotalPrice()
    }

    let id = await createBuyOrder(order);

    alert(`Orden de compra N° ${id} cargada correctamente.`);

    clearCart();
  }

  return (
    <div className='cartContainer'>
        {cart.length === 0 ?
          <div>
            <p>Tu carrito está vacío 😥</p>
            <p>Hacé click <Link to='/'>acá</Link> para agregar productos a tu carrito.</p>
            <button onClick={exportData}>Export Data</button>
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
            <button onClick={finalizarCompra}>Finalizar compra</button>
          </div>
        }
    </div>
  )
}

export default Cart
