import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { obtenerProductos, obtenerProductosPorDivision } from "../../services/db";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Loader from "../Loader/Loader";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const [bannerImg, setBannerImg] = useState("./img/banners/banner.jpg");
    const [isLoading, setIsLoading] = useState(true);
    let { divisionid } = useParams();

    useEffect(() => {
        if(divisionid){
            obtenerProductosPorDivision(divisionid).then((respuesta) => {setProducts(respuesta); setIsLoading(false)});
            switch(divisionid){
                case "a":
                    setTitle(`CAMISETAS DE PRIMERA DIVISIÓN`);
                    break;
                case "b":
                    setTitle(`CAMISETAS DE PRIMERA B NACIONAL`);
                    break;
            }
            setBannerImg("../img/banners/banner02.jpg");
        } else {
            obtenerProductos().then((respuesta) => {
                setProducts(respuesta);
                setIsLoading(false);
            });
            setTitle(`TODOS LOS PRODUCTOS`);
            setBannerImg("./img/banners/banner.jpg");
        }
    }, [divisionid]);

    return (
        <div className="itemListContainer">
            <Banner url={bannerImg}/>
            {isLoading ? <Loader/> :
            <>
                <h2 className="itemListContainerTitle">{title}</h2>
                <ItemList products={products} />
            </>
            }
        </div>
    )
}
