import React from 'react';

const CartItem = ({ item }) => {

    //CSS Classes

    //

    return (
        <div className="cart-product__container">
            <div className="cart-product-name__container">
                {item.product.name}
            </div>
            <div className="cart-product-image__container">
                <img src={item.product_option.thumbnail_img1} alt=""/>
            </div>

            <div className="cart-product-option-name__container">
                {item.option.name}: {item.option.value}
            </div>
            <div className="cart-product-quantity__container">
                Quantity: {item.quantity}
            </div>
        </div>
    );
}

export default CartItem;