import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Item.css";

export default function Item({urlImg, title, price, id}) {
    return(
        <div className="productCard">
            <img className="productImg" src={urlImg} alt="imagen" />
            <h3 className="productTitle">{title}</h3>
            <p className="productPrice">$ {price}</p>
            <Link to={`/item/${id}`} ><Button value={"VER DETALLES"}></Button></Link>
        </div>
    );
}