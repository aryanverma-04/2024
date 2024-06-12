import './ProductItem.css';
import {useState} from "react";
function ProductItem(props) {
    const classes = "margin "+ props.className;
    const [price, setPrice] = useState(props.price)
    function clickHandler(){
        // price = "out of Stock";
        setPrice("Out of Stock");
        console.log("Button Clicked")
    }
    return  (
            <div className={classes}>
                <h2 className='heading-bg-change'>{props.name}</h2>
                <div>{props.desc}</div>
                <div>{price}</div>
                <div>{props.date}</div>
                <button onClick={clickHandler}>Add to cart</button>
            </div>
    );
}

export default ProductItem;
