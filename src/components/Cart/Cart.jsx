import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { createBuyOrder, exportData } from '../../services/db';
import { cartContext } from '../../storage/cartContext';
import Button from '../Button/Button';
import './Cart.css';

function Cart() {
  const { cart, getTotalPrice, clearCart, removeItem } = useContext(cartContext);
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  function onInputChange(e){
    const field = e.target.name;
    const value = e.target.value;
    const newUserData = {...userData};
    newUserData[field] = value;
    setUserData(newUserData);
  }

  async function finalizarCompra(e) {
    e.preventDefault();
    const order = {
      buyer: userData,
      items: cart.map( ( product ) => ({id: product.id, title: product.title, price: product.price, count: product.count})),
      date: new Date(),
      total: getTotalPrice()
    }

    let id = await createBuyOrder(order);
    alert(`Orden de compra N° ${id} cargada correctamente.`);
    clearCart();
  }

  function ingresarDatos(e){
    e.preventDefault();
    alert('Debe completar los campos');
  }

  return (
    <div className='cartContainer'>
        <h1 className='cartTitle'>TU CARRITO</h1>
        {cart.length === 0 ?
          <div className='emptyCartContainer'>
            <img style={{height: "200px", margin: "12px"}} src="../img/empty-cart.png" alt="" />
            <p>Tu carrito está vacío 😥</p>
            <p>Hacé click <Link to='/'>acá</Link> para agregar productos a tu carrito.</p>
            {/* <button onClick={exportData}>Export Data</button> */}
          </div>
          :
          <div>
            {cart.map(item =>
              <div className='cartProduct' key={item.id}>
                <img className='checkoutImg' src={item.urlImg} alt="" />
                <h2 className='checkoutTitle'>{item.title}</h2>
                <p className='checkoutPrice'>$ {item.price}</p>
                <p className='checkoutPrice'>{item.count}</p>
                <p className='checkoutSubtotal'>$ {item.price * item.count}</p>
                <Button className={"removeItemBtn"} value={"X"} onClick={() => removeItem(item.id)}></Button>
              </div>
            )}
            <p className='totalPrice'>Total: $ {getTotalPrice()}</p>
            <form className='buyerForm' onSubmit={(userData.name !== "" && userData.email !== ""  && userData.phone !== "") ? finalizarCompra : ingresarDatos}>
              <label htmlFor="name">NOMBRE</label>
              <input value={userData.name} name='name' type="text" onChange={onInputChange}></input>
              <label htmlFor="email">EMAIL</label>
              <input value={userData.email} name='email' type="email" onChange={onInputChange}></input>
              <label htmlFor="phone">TELÉFONO</label>
              <input value={userData.phone} name='phone' type="number" onChange={onInputChange}></input>
              <div className='buttonDisplay'>
                <Button value={"VACIAR CARRITO"} onClick={clearCart}></Button>
                <Button value={"FINALIZAR COMPRA"} onSubmit={(userData.name !== "" && userData.email !== ""  && userData.phone !== "") ? finalizarCompra : ingresarDatos}></Button>
              </div>
            </form>
          </div>
        }
    </div>
  )
}

export default Cart
