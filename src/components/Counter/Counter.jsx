import { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../Button/Button";
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
                <Button className={stock < 1 && 'sinStockBtn'} value={stock < 1 ? "SIN STOCK" : "AGREGAR AL CARRITO"} onClick={() => stock > 0 && onAdd(count)}></Button>
                <Link to={'/cart'}><Button value={"IR AL CARRITO"}></Button></Link>
            </div>
        </div>
    )
};

export default Counter;