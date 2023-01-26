import { useState } from "react";
import { Link } from "react-router-dom";
import "./Counter.css";

function Counter({stock, onAdd}){
    const [count, setCount] = useState(1);
    const subtract = () => {count > 1 && setCount(count - 1)};
    const add = () => {count < stock && setCount(count + 1)};

    return(
        <div className="counterContainer">
            <div className="counter">
                <button className="counterBtn" onClick={subtract}>-</button>
                <p className="counterTxt">{count}</p>
                <button className="counterBtn" onClick={add}>+</button>
            </div>
            <div style={{display: 'flex', gap: '10px'}}>
                <button className="productBtn" onClick={() => onAdd(count)}>AGREGAR AL CARRITO</button>
                <Link to={'/cart'}><button className="productBtn">TERMINAR MI COMPRA</button></Link>
            </div>
        </div>
    )
};

export default Counter;