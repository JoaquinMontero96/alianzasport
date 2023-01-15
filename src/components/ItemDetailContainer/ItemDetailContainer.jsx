import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoUnico } from "../../services/mockAsyncService";
import ItemDetail from "../ItemDetail/ItemDetail";

export default function ItemDetailContainer(){
    const [product, setProduct] = useState([]);
    let { itemid } = useParams();
    useEffect(() => {
        obtenerProductoUnico(itemid)
        .then((respuesta) => {setProduct(respuesta)})
        .catch((error) => {alert(`Error: ${error}`)})
    }, []);

    return (
        <>
            <ItemDetail product={product}/>
        </>
    )
}