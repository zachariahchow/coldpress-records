import React, { useState, useEffect } from 'react';
import CartItem from './CartItem';

const Cart = ({ cartData, removeFromCartHandler, incrementQuantityHandler, decrementQuantityHandler }) => {

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
            <CartItem key={cartData.cartDetails.length * Math.random()} item={prod} cartData={cartData} removeFromCartHandler={removeFromCartHandler} quantity={cartData.cartDetails.find(el => el.product_option_id == prod.product_option.id).quantity} incrementQuantityHandler={incrementQuantityHandler} decrementQuantityHandler={decrementQuantityHandler}/>
        )
    })

    return (
        <div key={cartData.cartDetails.length + 3} className="cart__container flex flex-col justify-around items-center w-full md:flex-row md:flex-wrap mb-8">
            {cartProductEls}
        </div>
    );
}

export default Cart;