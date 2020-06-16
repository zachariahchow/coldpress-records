import React, { useState } from 'react';
import { uid, useUID } from 'react-uid';

const CartItem = ({ cartData, item, removeFromCartHandler, quantity, incrementQuantityHandler, decrementQuantityHandler }) => {

    //CSS Classes

    //

    return (
        <div className="cart-product__container flex flex-col justify-around items-center w-full md:w-1/2 px-4">
            <div className="cart-product-name__container w-full flex justify-center items-center">
                <p className="cart-product-name__text text-center text-xl tracking-wider p-2">{item.product.name}</p>
            </div>
            <div className="cart-product-image__container">
                <img src={item.product_option.thumbnail_img1} className="object-cover" alt=""/>
            </div>

        <div className = "cart-product-option-name__container text-gray-700 text-sm py-2"> <span className="font-bold">{ item.option.name }:</span> { item.option.value }
        </div>
        <div className="cart-product-price__container">
            <p className="cart-product-price">${parseInt(item.product_option.price).toFixed(2)}</p>
        </div>
        <div className = "cart-product-quantity__container">
            <div className="num-block skin-6">
              <div className="num-in flex justify-center items-center my-2">
                <span onClick={decrementQuantityHandler} className="minus dis w-16 h-16 sm:w-12 sm:h-12 p-4 bg-gray-300 flex justify-center items-center cursor-pointer text-2xl hover:text-gray-500" data-cart-id={cartData.cart.id} data-product-option-id={item.product_option.id}><p className="minus-text text-center">-</p></span>
                    <div className="quantity-display bg-white w-16 h-16 sm:w-12 sm:h-12 p-4 bg-white flex justify-center items-center text-xl"><p className="quantity-text text-center">{quantity}</p></div>
                <span onClick={incrementQuantityHandler} className="plus w-16 h-16 sm:w-12 sm:h-12 p-4 bg-gray-200 flex justify-center items-center cursor-pointer text-2xl hover:text-gray-500" data-cart-id={cartData.cart.id} data-product-option-id={item.product_option.id}><p className="plus-text text-center">+</p></span>
              </div>
            </div>
        </div>
        <button onClick={removeFromCartHandler} className="remove-from-cart__btn btn-primary btn-primary bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" data-cart-id={cartData.cart.id} data-product-option-id={item.product_option.id}>Remove From Cart
            </button>
        </div>
    );
}

export default CartItem;