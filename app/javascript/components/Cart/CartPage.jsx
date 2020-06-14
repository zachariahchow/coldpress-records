import React from 'react';
import Cart from './Cart';
import Tally from './Tally';

const CartPage = ({ cartData, removeFromCartHandler, incrementQuantityHandler, decrementQuantityHandler }) => {

    //CSS Classes

    //

    return (
        <div key={cartData.cartDetails.length + 2} className="cart-page__container w-full flex flex-col justify-center items-center">
            <h2 className="cart-page__header atest-releases__header w-full text-xl tracking-wider text-center mb-6 py-6">
            <p className="latest-releases__header-text text-center text-2xl uppercase tracking-widest mb-2 text-black font-bold">Cart</p>

            </h2>
            <Cart cartData={cartData} removeFromCartHandler={removeFromCartHandler} incrementQuantityHandler={incrementQuantityHandler} decrementQuantityHandler={decrementQuantityHandler}/>
            <Tally key={Math.random * Math.random * 10} cartData={cartData}/>
        </div>
    );
}

export default CartPage;