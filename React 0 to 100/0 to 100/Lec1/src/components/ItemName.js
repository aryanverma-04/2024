import './ItemName.css'

function ItemName(props){
    const name = props.name;
    return(<div><h1>{name}</h1></div>)
}
export default ItemName