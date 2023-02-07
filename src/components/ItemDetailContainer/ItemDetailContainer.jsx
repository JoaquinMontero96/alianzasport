import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { obtenerProductoUnico } from "../../services/db";
import ItemDetail from "../ItemDetail/ItemDetail";
import Loader from "../Loader/Loader";

export default function ItemDetailContainer(){
    const [product, setProduct] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { itemid } = useParams();
    useEffect(() => {
        window.scroll(0,0);
        obtenerProductoUnico(itemid)
        .then((respuesta) => {setProduct(respuesta); setIsLoading(false)})
        .catch((error) => {alert(`Error: ${error}`)})
    }, []);

    return (
        <>
            {isLoading ? <Loader/> : <ItemDetail product={product}/>}
        </>
    )
}
