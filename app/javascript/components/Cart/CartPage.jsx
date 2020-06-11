import React from 'react';
import Cart from './Cart';

const CartPage = ({ cartData, removeFromCartHandler, incrementQuantityHandler }) => {

    //CSS Classes

    //

    return (
        <div key={cartData.cartDetails.length + 2} className="cart-page__container w-full flex flex-col justify-center items-center">
            <h2 className="cart-page__header atest-releases__header w-1/2 text-xl tracking-wider text-center">
            <p className="latest-releases__header-text text-center text-2xl uppercase tracking-widest py-4 mb-2">Cart</p>

            </h2>
            <Cart cartData={cartData} removeFromCartHandler={removeFromCartHandler} incrementQuantityHandler={incrementQuantityHandler}/>
        </div>
    );
}

export default CartPage;