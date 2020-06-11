import React, { useState, useEffect } from 'react';
import AllStoreItems from './AllStoreItems';

const Store = ({ productsData }) => {

    const [cartData, setCartData] = useState([]);

    const getCartData = () => {

        fetch('/cart.json', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(resData => {
            console.log(resData);
            setCartData(resData);
        })
    }

    useEffect(() => {
        getCartData();
    }, []);

    useEffect(() => {
        console.log(`Cart Data:`);
        console.log(cartData);
    }, [cartData]);

    const addToCartHandler = (ev) => {

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        console.log(cartData);
        console.log(ev.target.dataset.productOptionId);

        fetch('/add-to-cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
            body: JSON.stringify({
                cart_id: cartData.cart.id,
                product_option_id: parseInt(ev.target.dataset.productOptionId)
            })
        }).then(res => {
            return res.json()
        }).then(resData => {
            console.log(resData);
        }).catch(e => {
            console.log(e);
        })
    }

    //CSS Classes

    //

    return (
        <div className="all-store-items__container">
            <AllStoreItems productsData={productsData} addToCartHandler={addToCartHandler}/>
        </div>
    );
}

export default Store;