import React from 'react';
import Cart from './Cart';
import Tally from './Tally';
import AddedOrRemovedCartModal from '../Store/AddedOrRemovedCartModal';

const CartPage = ({ cartData, removeFromCartHandler, incrementQuantityHandler, decrementQuantityHandler, modalIsShown, setModalIsShown }) => {

    //CSS Classes

    //

    return (
        <div className="cart-page__container w-full flex flex-col justify-center items-center">
            <h2 className="cart-page__header latest-releases__header w-full text-xl tracking-wider text-center mb-6 py-6">
            <p className="latest-releases__header-text text-center text-2xl uppercase tracking-widest mb-2 text-black font-bold">Cart</p>

            </h2>
            <Cart cartData={cartData} removeFromCartHandler={removeFromCartHandler} incrementQuantityHandler={incrementQuantityHandler} decrementQuantityHandler={decrementQuantityHandler}/>
            <Tally cartData={cartData}/>
            {modalIsShown.open ? <AddedOrRemovedCartModal modalIsShown={modalIsShown} setModalIsShown={setModalIsShown}/> : null}
        </div>
    );
}

export default CartPage;