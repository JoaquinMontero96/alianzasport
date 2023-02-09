import ItemList from "../ItemList/ItemList";
import { useEffect, useState } from "react";
import { obtenerProductos, obtenerProductosPorMarca } from "../../services/db";
import "./ItemListContainer.css";
import { useParams } from "react-router-dom";
import Banner from "../Banner/Banner";
import Loader from "../Loader/Loader";

export default function ItemListContainer(){
    const [products, setProducts] = useState([]);
    const [title, setTitle] = useState("");
    const [bannerImg, setBannerImg] = useState("./img/banners/banner.jpg");
    const [isLoading, setIsLoading] = useState(true);
    let { marcaid } = useParams();

    useEffect(() => {
        if(marcaid){
            obtenerProductosPorMarca(marcaid).then((respuesta) => {setProducts(respuesta); setIsLoading(false)});
            switch(marcaid){
                case "adidas":
                    setTitle(`ADIDAS`);
                    break;
                case "nike":
                    setTitle(`NIKE`);
                    break;
                case "kappa":
                    setTitle(`KAPPA`);
                    break;
                case "retiel":
                    setTitle(`RETIEL`);
                    break;
                case "lyon":
                    setTitle(`LYON`);
                    break;
                case "umbro":
                    setTitle(`UMBRO`);
                    break;
                case "ilossso":
                    setTitle(`IL OSSSO`);
                    break;
                case "givova":
                    setTitle(`GIVOVA`);
                    break;
                case "adhoc":
                    setTitle(`ADHOC`);
                    break;
                case "hummel":
                    setTitle(`HUMMEL`);
                    break;
                case "mitre":
                    setTitle(`MITRE`);
                    break;
                case "fiume":
                    setTitle(`FIUME`);
                    break;
                case "kdy":
                    setTitle(`KDY`);
                    break;
                case "tbs":
                    setTitle(`TBS`);
                    break;
                case "puma":
                    setTitle(`PUMA`);
                    break;
                case "errea":
                    setTitle(`ERREA`);
                    break;
                case "cmd":
                    setTitle(`CMD`);
                    break;
                case "reusch":
                    setTitle(`REUSCH`);
                    break;
                case "sport2000":
                    setTitle(`SPORT 2000`);
                    break;
                case "ruge":
                    setTitle(`RUGE`);
                    break;
            }
            setBannerImg("");
        } else {
            obtenerProductos().then((respuesta) => {
                setProducts(respuesta);
                setIsLoading(false);
            });
            setTitle(`TODOS LOS PRODUCTOS`);
            setBannerImg("./img/banners/banner.jpg");
        }
    }, [marcaid]);

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
