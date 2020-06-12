import React from 'react';

const CheckoutPage = ({ customerFieldChangeHandler, customerFields }) => {

    //CSS Classes

    //

    return (
        <div className="checkout-page__container w-full flex flex-col justify-center items-center">
            <div className="checkout-page-header__container flex justify-center items-center w-full">
                <h2 className="checkout-page-header uppercase tracking-widest text-2xl py-2">
                    Checkout
                </h2>
            </div>
            <div className="checkout-form__container w-full flex flex-col justify-center items-center">
                <input type="text" name="email" id="email" placeholder="Email" defaultValue={customerFields.email} onChange={(e) => customerFieldChangeHandler(e, "email")}/>
                <input type="text" name="fullName" id="fullName" placeholder="Full Name" defaultValue={customerFields.fullName} onChange={(e) => customerFieldChangeHandler(e, "fullName")}/>
                <input type="text" name="billingAddress" id="billingAddress" placeholder="Billing Address" defaultValue={customerFields.billingAddress} onChange={(e) => customerFieldChangeHandler(e, "billingAddress")}/>
                <input type="text" name="shippingAddress" id="shippingAddress" placeholder="Shipping Address" defaultValue={customerFields.shippingAddress} onChange={(e) => customerFieldChangeHandler(e, "shippingAddress")}/>
                <input type="text" name="country" id="country" placeholder="Country" defaultValue={customerFields.country} onChange={(e) => customerFieldChangeHandler(e, "country")}/>
                <input type="text" name="phone" id="phone" placeholder="Phone Number" defaultValue={customerFields.phone} onChange={(e) => customerFieldChangeHandler(e, "phone")}/>
            </div>
            <div className="checkout-form-confirm__btn-container">
                <button className="checkout-form-confirm__btn btn-primary btn-primary bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                    Confirm Order
                </button>
            </div>
        </div>
    );
}

export default CheckoutPage;