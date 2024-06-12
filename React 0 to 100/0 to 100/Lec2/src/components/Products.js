// Products.js
import React from 'react';
import ProductItem from './ProductItem.js'
import './Products.css'

const Products = (props) =>{
    return(
        <div className="flexing">
            <ProductItem
                name = {props.data[0].name}
                price = {props.data[0].price}
                desc = {props.data[0].desc}
                date = {props.data[0].date}
            />
            <ProductItem
                name = {props.data[1].name}
                price = {props.data[1].price}
                desc = {props.data[1].desc}
                date = {props.data[1].date}
            />
            <ProductItem
                name = {props.data[2].name}
                price = {props.data[2].price}
                desc = {props.data[2].desc}
                date = {props.data[2].date}
            />
            <ProductItem
                name = {props.data[3].name}
                price = {props.data[3].price}
                desc = {props.data[3].desc}
                date = {props.data[3].date}
            />
        </div>
    )
}
export default Products;
