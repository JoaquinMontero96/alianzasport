import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import "./CartWidget.css";

export default function CartWidget(){
    const { getTotalItems, getTotalPrice } = useContext(cartContext);

    return (
        <div className="cart">
            <p>{getTotalItems()}</p>
            <img className="cartImg" src="/img/cart.png" alt="carrito" />
            <button onClick={getTotalPrice}>Total</button>
        </div>
    )
}