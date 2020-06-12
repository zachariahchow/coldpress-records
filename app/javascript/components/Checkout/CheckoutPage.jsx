import React from 'react';
import CheckoutTally from './CheckoutTally';

const CheckoutPage = ({ customerFieldChangeHandler, customerFields, cartData, confirmOrderHandler }) => {

        let productOptionsTallyInfo;
        let totalAmount;

        if (cartData) {

            const { cartDetails, cartProducts } = cartData

            productOptionsTallyInfo = cartDetails.reduce((acc, curDet) => {

                const prodOption = cartProducts
                    .find(prod => {
                        return prod.product_option.id == curDet.product_option_id
                    });

                const prodOptionSubtotal = parseInt(prodOption.product_option.price) * curDet.quantity;

                acc.push({
                    product_name: prodOption.product.name,
                    product_option_id: prodOption.product_option.id,
                    product_option: prodOption.option.value,
                    price: prodOption.product_option.price,
                    quantity: curDet.quantity,
                    product_subtotal: prodOptionSubtotal,
                    option_image: prodOption.product_option.thumbnail_img1
                })

                return acc;
            }, [])

            totalAmount = productOptionsTallyInfo.reduce((acc, curOpt) => {
                return curOpt.product_subtotal + acc
            }, null)

        }

        //CSS Classes

        //


        return (
                <div className="checkout-page__container w-full flex flex-col justify-center items-center">
                <div className="checkout-page-header__container flex justify-center items-center w-full">
                    <h2 className="checkout-page-header uppercase tracking-widest text-2xl py-2">
                        Checkout
                    </h2>
                </div>
                {cartData.cartProducts.length ? <div className="checkout-form__container w-full flex flex-col justify-center items-center">
                    <input type="text" name="email" id="email" placeholder="Email" defaultValue={customerFields.email} onChange={(e) => customerFieldChangeHandler(e, "email")}/>
                    <input type="text" name="fullName" id="fullName" placeholder="Full Name" defaultValue={customerFields.fullName} onChange={(e) => customerFieldChangeHandler(e, "fullName")}/>
                    <input type="text" name="billingAddress" id="billingAddress" placeholder="Billing Address" defaultValue={customerFields.billingAddress} onChange={(e) => customerFieldChangeHandler(e, "billingAddress")}/>
                    <input type="text" name="shippingAddress" id="shippingAddress" placeholder="Shipping Address" defaultValue={customerFields.shippingAddress} onChange={(e) => customerFieldChangeHandler(e, "shippingAddress")}/>
                    <input type="text" name="country" id="country" placeholder="Country" defaultValue={customerFields.country} onChange={(e) => customerFieldChangeHandler(e, "country")}/>
                    <input type="text" name="phone" id="phone" placeholder="Phone Number" defaultValue={customerFields.phone} onChange={(e) => customerFieldChangeHandler(e, "phone")}/>
                </div> : null}
                {cartData.cartProducts.length ? <div className="checkout-form-confirm__btn-container">
                    <button onClick={(e) => confirmOrderHandler(e, productOptionsTallyInfo, totalAmount)}className="checkout-form-confirm__btn btn-primary btn-primary bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                        Confirm Order
                    </button>
                </div> : null}
                {cartData.cartProducts.length ? <CheckoutTally key={Math.random * 99} cartData={cartData}/> : <div className="no-items__header w-full flex flex-col justify-center items-center">
                    <p className="no-items__text text-center text-xl">
                        There are no items in your Cart.
                    </p>
                </div>}

            </div>
    );
}

export default CheckoutPage;