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

    //CSS Classes

    //

    return (
        <div className="all-store-items__container">
            <AllStoreItems productsData={productsData}/>
        </div>
    );
}

export default Store;