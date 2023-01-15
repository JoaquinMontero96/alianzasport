import { Link } from "react-router-dom";
import "./Item.css";

export default function Item({urlImg, title, price, id}) {
    return(
        <div className="productCard">
            <img className="productImg" src={urlImg} alt="imagen" />
            <h3 className="productTitle">{title}</h3>
            <p className="productPrice">$ {price}</p>
            <Link to={`/item/${id}`} ><button className="productBtn">VER DETALLES</button></Link>
        </div>
    );
}