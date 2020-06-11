import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartData, removeFromCartHandler, incrementQuantityHandler }) => {

    //CSS Classes

    //

    // const cartDataArr = cartData.cartProducts.reduce((acc, curProd) => {
    //     if (!acc.find(el => el.option.id == curProd.option.id)) {
    //         acc.push(curProd);
    //     } else {
    //         acc.find(el => el.product.id == curProd.product.id).quantity++;
    //     }

    //     return acc
    // }, []);

    const cartProductEls = cartData.cartProducts.map(prod => {
        return (
            <CartItem key={cartData.cartDetails.length * Math.random()} item={prod} cartData={cartData} removeFromCartHandler={removeFromCartHandler} quantity={cartData.cartDetails.find(el => el.product_option_id == prod.product_option.id).quantity} incrementQuantityHandler={incrementQuantityHandler}/>
        )
    })

    return (
        <div key={cartData.cartDetails.length + 3} className="cart__container">
            {cartProductEls}
        </div>
    );
}

export default Cart;