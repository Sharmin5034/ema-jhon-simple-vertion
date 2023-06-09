import React from 'react';
import './Product.css'

const Product = (props) => {
    console.log(props.product)
  const {img, name, price, seller, ratings}=props.product;
    return (
        <div className='product'>
         <img src={img} alt="" /> 
         <div className='product-description'>
         <h5 className='product-name'>{name}</h5>
         <p> Price: ${price}</p>
         <p>Manufacturer: {seller}</p>
         <p>Rating: {ratings} star</p>
         </div>
        <button className='btn-info'>Add to Cart</button>
        </div>
    );
};

export default Product;