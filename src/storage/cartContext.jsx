const { createContext, useState } = require("react");

export const cartContext = createContext();

export function CartContextProvider(props){
    let [cart, setCart] = useState([]);

    function addItem(item) {
        let newCart = [...cart];
        if(cart.some( (element) => element.id === item.id)){
            alert('El producto ya está en el carrito');
        } else {
            newCart.push(item);
            setCart(newCart);
        }
    }

    function removeItem(item){
        /* */
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

    let value = {cart, addItem, getTotalItems, getTotalPrice}

    return(
        <cartContext.Provider value={value}>
            {props.children}
        </cartContext.Provider>
    )
}