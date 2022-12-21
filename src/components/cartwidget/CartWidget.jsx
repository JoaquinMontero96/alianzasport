import "./CartWidget.css";

export default function CartWidget(){
    return (
        <div className="cart">
            <p>0</p>
            <img className="cartImg" src="/img/cart.png" alt="carrito" />
        </div>
    )
}