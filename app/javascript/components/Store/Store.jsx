import React, { useState, useEffect } from 'react';
import AllStoreItems from './AllStoreItems';

const Store = ({ productsData, addToCartHandler, cartData }) => {

    //CSS Classes

    //

    return (
        <div key={cartData.cartDetails.length + 4} className="all-store-items__container">
            <AllStoreItems productsData={productsData} addToCartHandler={addToCartHandler} cartData={cartData}/>
        </div>
    );
}

export default Store;