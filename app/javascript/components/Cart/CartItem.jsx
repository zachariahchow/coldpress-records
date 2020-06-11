import React, { useState } from 'react';

const CartItem = ({ cartData, item, removeFromCartHandler, quantity, incrementQuantityHandler }) => {

    //CSS Classes

    //

    return (
        <div key={cartData.cartDetails.length + 7} className="cart-product__container">
            <div className="cart-product-name__container">
                {item.product.name}
            </div>
            <div className="cart-product-image__container">
                <img src={item.product_option.thumbnail_img1} alt=""/>
            </div>

        <div className = "cart-product-option-name__container"> { item.option.name }: { item.option.value }
        </div>
        <div className = "cart-product-quantity__container">
            <div className="num-block skin-6">
              <div className="num-in">
                <span onClick={() => console.log('-')} className="minus dis">-</span>
                    <div className="quantity-display">Quantity: {quantity}</div>
                <span onClick={incrementQuantityHandler} className="plus" data-cart-id={cartData.cart.id} data-product-option-id={item.product_option.id}>+</span>
              </div>
            </div>
        </div>
        <button onClick={removeFromCartHandler} className="remove-from-cart__btn btn-primary btn-primary bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" data-cart-id={cartData.cart.id} data-product-option-id={item.product_option.id}>Remove From Cart
            </button>
        </div>
    );
}

export default CartItem;