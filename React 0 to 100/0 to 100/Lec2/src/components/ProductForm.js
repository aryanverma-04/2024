import './ProductForm.css'
import InputForm from './InputForm'
const ProductForm = (props) =>{
    function level2Callback(data){
        console.log("Inside Level 2 Callback Function")
        props.callBackFunction(data);
    }
    return(
        <div className='product-form'>
            <InputForm mainFunction = {level2Callback}/>
        </div>
    )
}
export default ProductForm
