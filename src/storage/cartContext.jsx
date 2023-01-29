const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props){
    let [cart, setCart] = useState([]);

    function addItem(item) {
        let newCart = [...cart];
        let itemRepetido = cart.find(element => element.id === item.id);
        if(itemRepetido){
            itemRepetido.count += item.count;
        } else {
            newCart.push(item);
        }
        setCart(newCart);
    }

    function removeItem(itemToRemove){
        let carrito = cart.filter(item => item.id !== itemToRemove);
        setCart(carrito);
    }

    function clearCart(){
        setCart([]);
    }

    function getTotalItems(){
        let total = 0;
        cart.forEach( (item) => {total += item.count} );
        return total;
    }

    function getTotalPrice(){
        let total = 0;
        cart.forEach( (item) => {total += item.count * item.price});
        return total;
    }

    let value = {cart, addItem, getTotalItems, getTotalPrice, clearCart, removeItem}

    return(
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    )
}