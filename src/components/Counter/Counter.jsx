import { useState } from "react";
import "./Counter.css";

function Counter({stock}){
    const [count, setCount] = useState(1);
    const subtract = () => {count > 1 && setCount(count - 1)};
    const add = () => {count < stock && setCount(count + 1)};

    return(
        <div className="counter">
            <button className="counterBtn" onClick={subtract}>-</button>
            <p className="counterTxt">{count}</p>
            <button className="counterBtn" onClick={add}>+</button>
        </div>
    )
};

export default Counter;