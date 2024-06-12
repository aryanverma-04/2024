import './InputForm.css'
import {useState} from 'react';
const InputForm = (props) =>{
    console.log(props.className)

    const [newName, nameUpdater] = useState('')
    const [newDate, dateUpdater] = useState('')
    const [newdesc, descUpdater] = useState('')
    const [newPrice, priceUpdater] = useState('')

    function nameChanged(event){
        nameUpdater(event.target.value)
    }
    function descChanged(event){
        descUpdater(event.target.value)
    }
    function priceChanged(event){
        priceUpdater(event.target.value)
    }
    function dateChanged(event){
        dateUpdater(event.target.value)
    }
    function submitHandler(event){
        event.preventDefault();
        const productData = {
            name: newName,
            desc: newdesc,
            date: newDate,
            price: newPrice
        }
        // console.log(productData)
        nameUpdater('');
        dateUpdater('');
        descUpdater('');
        priceUpdater('');
        props.mainFunction(productData);
    }
    return(
        <form onSubmit={submitHandler} className="input-form-css">
            <label htmlFor="name">Name: </label>
            <input value = {newName} type="text" name="name" id="name" onChange={nameChanged} />

            <label htmlFor="desc">Desc: </label>
            <input value = {newdesc} type="text" name="desc" id="desc" onChange={descChanged}/>

            <label htmlFor="price">Price: </label>
            <input value = {newPrice}  type="text" name="price" id="price" onChange={priceChanged}/>

            <label htmlFor="date">Date: </label>
            <input value = {newDate} type="text" name="date" id="date" onChange={dateChanged}/>

            <button className="input-button" type="submit">Submit Details</button>
        </form>
    )
}

export default InputForm;