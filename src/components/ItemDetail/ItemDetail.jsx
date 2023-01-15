import Counter from "../Counter/Counter";
import "./ItemDetail.css";

export default function ItemDetail(product) {
    return(
        <div className="productDetail">
            <div className="productDetailContainer">
                <img className="productDetailImg" src={product.product.urlImg} alt="imagen" />
                <div className="productDetailMenu">
                    <img className="productDetailEscudo" src={product.product.urlEscudo} alt="imagen" />
                    <h3 className="productDetailTitle">{product.product.title}</h3>
                    <p className="productDetailPrice">$ <span>{product.product.price}</span></p>
                    <div>
                    <p className="productDetailTxt">COD. <span>{product.product.id}</span></p>
                        <p className="productDetailTxt">Marca: <span>{product.product.marca}</span></p>
                        <p className="productDetailTxt">Año: <span>{product.product.anio}</span></p>
                    </div>
                    <Counter stock={product.product.stock}/>
                    <button className="productBtn">AGREGAR AL CARRITO</button>
                </div>
            </div>
        </div>
    );
}