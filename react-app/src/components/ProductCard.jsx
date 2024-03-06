/* eslint-disable no-unused-vars */
import React from "react";


function ProductCard(props) {
    let stockStatus = ""
    function stockCheck(){
        if (props.stock > 0){
            stockStatus = "In Stock!"
        } else if(props.stock <= 0){
            stockStatus = "Out Of Stock!"
        }
    }
    stockCheck()

    return (
        <div className="product-card">
            <img src={props.imgsrc} alt={props.name} />
            <h3>{props.name}</h3>
            <p>{props.info}</p>
            <p>{props.price}</p>
            <p>Currently in {props.inusercarts} carts. </p>
            <p>{stockStatus}</p>

            
        </div>
    );
}

export default ProductCard;