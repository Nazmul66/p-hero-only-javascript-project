import React, { useState } from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingBasket } from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const {img, name, price, ratings, seller} = props.pd;
    const productAdd = props.productAdd; 

    return (
        <div className='card-section'>
             <img src={img} alt="" />
             <div className="contents">
                <h3>{name}</h3>
                <h4>Price: ${price}</h4>
                <p>Manufacturer: {seller}</p>
                <p>Ratings: {ratings} Star</p>
             </div>
             <button onClick={() => productAdd(props.pd)} 
             class="add-btn" >Add to Cart <FontAwesomeIcon icon={faShoppingBasket} /></button>
        </div>
    );
};

export default Product;