import "./ItemList.css";
import Item from "../Item/Item";

export default function ItemList(props){
    return(
        <div className="itemList">
            {props.products.map((item)=><Item urlImg={item.urlImg} title={item.title} price={item.price} key={item.id} id={item.id}/>)}
        </div>
    );
}