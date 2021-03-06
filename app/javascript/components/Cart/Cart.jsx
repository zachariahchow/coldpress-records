import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import CartItem from './CartItem';
import { uid, useUID } from 'react-uid';

const Cart = ({ cartData, removeFromCartHandler, incrementQuantityHandler, decrementQuantityHandler, modalIsShown }) => {

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
            <CartItem key={uid(prod)} item={prod} cartData={cartData} removeFromCartHandler={removeFromCartHandler} quantity={cartData.cartDetails.find(el => el.product_option_id == prod.product_option.id).quantity} incrementQuantityHandler={incrementQuantityHandler} decrementQuantityHandler={decrementQuantityHandler} modalIsShown={modalIsShown}/>
        )
    })

    return (
        <motion.div
            initial={{opacity: 0, transform: 'scale(1.01)'}}
            animate ={{opacity: 1, transform: 'scale(1)'}}
            exit={{ opacity: 0}}
            key={useUID()}
            transition={{duration: 0.6}}
            className="cart__container flex flex-col justify-around items-center w-full md:flex-row md:flex-wrap mb-8">
            {cartProductEls}
        </motion.div>
    );
}

export default Cart;