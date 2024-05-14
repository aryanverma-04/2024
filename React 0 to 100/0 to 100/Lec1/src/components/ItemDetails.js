import './ItemDetails.css'

function ItemDetails(props){
    const itemPrice = props.price;
    const itemDesc = props.desc;
    const itemDate = props.date;

    return(<div className='details'>
        <span>Price: {itemPrice}</span>
        <span>Desc: {itemDesc}</span>
        <span>Date: {itemDate}</span>
    </div>)
}

export default ItemDetails