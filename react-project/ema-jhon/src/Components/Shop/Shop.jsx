import React, { useEffect, useState } from 'react';
import Product from './Products/Product';
import './Shop.css';

const Shop = () => {
    const [productList, setProductList] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect( () =>{
        fetch('fakeData/products.json')
        .then(res => res.json())
        .then(data => setProductList(data));
    } , []);

    const productAdd = (product) =>{
        const newCart = [...cart, product];
        setCart(newCart);
    }

    return (
        <div className="shop-contain">
            <div className="shop-body">
                {
                    productList.map((products) => <Product 
                    pd={products} 
                    key={products.id}
                    productAdd = {productAdd}
                    ></Product>)
                }
            </div>

            <div className="shop-sidebar">
                <p>products: {cart.length}</p>
            </div>
        </div>
    );
};

export default Shop;