import React from 'react';
import Cart from './Cart';

const CartPage = ({ cartData, removeFromCartHandler }) => {

    //CSS Classes

    //

    return (
        <div key={cartData.cartDetails.length + 2} className="cart-page__container w-full flex flex-col justify-center items-center">
            <Cart cartData={cartData} removeFromCartHandler={removeFromCartHandler}/>
        </div>
    );
}

export default CartPage;