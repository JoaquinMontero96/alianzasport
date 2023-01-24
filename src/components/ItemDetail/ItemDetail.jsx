import { useContext } from "react";
import { cartContext } from "../../storage/cartContext";
import Counter from "../Counter/Counter";
import "./ItemDetail.css";

export default function ItemDetail({product}) {
    const { addItem } = useContext(cartContext);

    function handleAddToCart(count) {
        alert(`Agregaste ${count} ${product.title} al carrito`);
        product.count = count;
        addItem(product);
    }

    return(
        <div className="productDetail">
            <div className="productDetailContainer">
                <img className="productDetailImg" src={product.urlImg} alt="imagen" />
                <div className="productDetailMenu">
                    <img className="productDetailEscudo" src={product.urlEscudo} alt="imagen" />
                    <h3 className="productDetailTitle">{product.title}</h3>
                    <p className="productDetailPrice">$ <span>{product.price}</span></p>
                    <div>
                    <p className="productDetailTxt">COD. <span>{product.id}</span></p>
                        <p className="productDetailTxt">Marca: <span>{product.marca}</span></p>
                        <p className="productDetailTxt">Año: <span>{product.anio}</span></p>
                    </div>
                    <Counter stock={product.stock} onAdd={handleAddToCart}/>
                </div>
            </div>
        </div>
    );
}