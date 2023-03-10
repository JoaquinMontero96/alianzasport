import { useContext } from "react";
import { Link } from "react-router-dom";
import { cartContext } from "../../storage/cartContext";
import "./CartWidget.css";

export default function CartWidget(){
    const { cart, getTotalItems } = useContext(cartContext);

    return (
        <div className="cart">
            {cart.length > 0 && <p className="cartAmount">{getTotalItems()}</p>}
            <Link to={'/cart'}><img className="cartImg" src="/img/cart.png" alt="carrito" /></Link>
        </div>
    )
}