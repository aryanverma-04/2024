import Card from './Card';
import './ProductItem.css';

function ProductItem(props) {
    const classes = "margin "+ props.className;
    return (
            <div className={classes}>
                <h2 className='heading-bg-change'>{props.name}</h2>
                <div>{props.desc}</div>
                <div>{props.price}</div>
                <div>{props.date}</div>
            </div>
    );
}

export default ProductItem;
