import React from 'react';
import Cart from './Cart';

const CartPage = ({ cartData }) => {

    //CSS Classes

    //

    return (
        <div className="cart-page__container w-full flex flex-col justify-center items-center">
            <Cart cartData={cartData}/>
        </div>
    );
}

export default CartPage;