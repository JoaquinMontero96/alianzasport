import products from "../data/products"

export default function obtenerProductos(){
    return new Promise((resolve) =>
        {
            setTimeout(() => {
            resolve(products);
            }, 1);
})};

export function obtenerProductoUnico(itemid){
    let productReq = products.find((product) => {return (product.id === Number(itemid))});
    return new Promise((resolve, reject) =>
        {
            setTimeout(() => {
                if(productReq !== undefined){
                    resolve(productReq);
                } else {
                    reject("Producto no encontrado");
                }
            }, 1);
})};

export function obtenerProductosPorDivision(divisionid){
    let productsReq = products.filter((product) => {return (product.division === divisionid)});
    return new Promise((resolve, reject) =>
        {
            setTimeout(() => {
                if(productsReq !== undefined){
                    resolve(productsReq);
                } else {
                    reject("División no encontrada");
                }
            }, 1);
})};