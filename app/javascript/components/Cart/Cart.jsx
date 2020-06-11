import React from 'react';
import CartItem from './CartItem';

const Cart = ({ cartData }) => {

    //CSS Classes

    //

    const cartDataArr = cartData.cartProducts.reduce((acc, curProd) => {
        if (!acc.find(el => el.option.id == curProd.option.id)) {
            curProd["quantity"] = 1;
            acc.push(curProd);
        } else {
            acc.find(el => el.product.id == curProd.product.id).quantity++;
        }

        return acc
    }, []);

    const cartProductEls = cartDataArr.map(prod => {
        return (
            <CartItem item={prod}/>
        )
    })

    return (
        <div className="cart__container">
            {cartProductEls}
        </div>
    );
}

export default Cart;