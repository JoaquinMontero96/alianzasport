import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import obtenerProductos, { obtenerProductosPorDivision } from "../../services/mockAsyncService";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const [bannerImg, setBannerImg] = useState("./img/banners/banner.jpg");
    let { divisionid } = useParams();

    useEffect(() => {
        if(divisionid){
            obtenerProductosPorDivision(divisionid).then((respuesta) => {setProducts(respuesta)});
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
            obtenerProductos().then((respuesta) => {setProducts(respuesta)})
            setTitle(`TODOS LOS PRODUCTOS`);
            setBannerImg("./img/banners/banner.jpg");
        }
    }, [divisionid]);
    console.log(bannerImg)

    return (
        <div className="itemListContainer">
            <Banner url={bannerImg}/>
            <h2 className="itemListContainerTitle">{title}</h2>
            <ItemList products={products} />
        </div>
    )
}