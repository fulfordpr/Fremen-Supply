/* eslint-disable no-unused-vars */
import React from 'react';
import ProductCard from './ProductCard';
import {createClient} from "@supabase/supabase-js"

//Using enviroment variables to store url and key for supabase
const supabase = createClient(import.meta.env.VITE_SUPA_URL, import.meta.env.VITE_SUPA_KEY)

let products = []
async function getData(){
  const result =  await supabase.from("products").select()
  const data = (result.data)
  products = data
}
getData()
function createProduct(product){
  return <ProductCard 
    key={product.id} 
    name={product.name}
    imgsrc={product.imgsrc}
    info={product.info}
    price={product.price}
    inusercarts={product.inusercarts}
    stock={product.stock}/>
}
function ProductList(props) {
    return (
        <div className="product-list">
            {products.map(createProduct)}
        </div>
    );
}

export default ProductList;