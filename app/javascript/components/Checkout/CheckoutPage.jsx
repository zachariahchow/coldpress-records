import React from 'react';
import CheckoutTally from './CheckoutTally';
import AddedOrRemovedCartModal from '../Store/AddedOrRemovedCartModal';
import { AnimatePresence, motion } from 'framer-motion';
import { uid, useUID } from 'react-uid';

const CheckoutPage = ({ customerFieldChangeHandler, customerFields, cartData, confirmOrderHandler, modalIsShown, setModalIsShown }) => {

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
    const inputClasses = ['w-11/12', 'mb-4', 'px-2', 'py-2', 'border-b-2'];
    //


    return (
        <motion.div
                    className="checkout-page__container w-full flex flex-col justify-center items-center mt-6"
                    initial={{opacity: 0}}
                    animate ={{opacity: 1}}
                    exit={{ opacity: 0}}
                    key={useUID()}
                    transition={{duration: 0.6}}
                    >
                {modalIsShown.open ? <AddedOrRemovedCartModal modalIsShown={modalIsShown} setModalIsShown={setModalIsShown}/> : null}
                <div className="checkout-page-header__container flex justify-center items-center w-full">
                    <h2 className="checkout-page-header text text-center text-2xl uppercase tracking-widest mb-2 text-black font-bold">
                        Checkout
                    </h2>
                </div>
                <div className="checkout-form-tally__wrapper w-full flex flex-col justify-center items-center sm:flex-row sm:justify-center sm:items-start sm:mt-8 sm:px-12">
                    {cartData.cartProducts.length ? <div className="checkout-form__container w-full flex flex-col justify-center items-center sm:w-1/2">
                        <input
                            className={`checkout__input ${inputClasses.join(' ')}`}
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email"
                            defaultValue={customerFields.email}
                            onChange={(e) => customerFieldChangeHandler(e, "email")}
                        />
                        <input
                            className={`checkout__input ${inputClasses.join(' ')}`}
                            type="text"
                            name="fullName"
                            id="fullName"
                            placeholder="Full Name"
                            defaultValue={customerFields.fullName}
                            onChange={(e) => customerFieldChangeHandler(e, "fullName")}
                        />
                        <input
                            className={`checkout__input ${inputClasses.join(' ')}`}
                            type="text"
                            name="billingAddress"
                            id="billingAddress"
                            placeholder="Billing Address"
                            defaultValue={customerFields.billingAddress}
                            onChange={(e) => customerFieldChangeHandler(e, "billingAddress")}
                        />
                        <input
                            className={`checkout__input ${inputClasses.join(' ')}`}
                            type="text"
                            name="shippingAddress"
                            id="shippingAddress"
                            placeholder="Shipping Address"
                            defaultValue={customerFields.shippingAddress}
                            onChange={(e) => customerFieldChangeHandler(e, "shippingAddress")}
                        />
                        <input
                            className={`checkout__input ${inputClasses.join(' ')}`}
                            type="text"
                            name="country"
                            id="country"
                            placeholder="Country"
                            defaultValue={customerFields.country}
                            onChange={(e) => customerFieldChangeHandler(e, "country")}
                        />
                        <input
                            className={`checkout__input ${inputClasses.join(' ')}`}
                            type="text"
                            name="phone"
                            id="phone"
                            placeholder="Phone Number"
                            defaultValue={customerFields.phone}
                            onChange={(e) => customerFieldChangeHandler(e, "phone")}
                        />
                        {cartData.cartProducts.length ? <div className="checkout-form-confirm__btn-container">
                            <button onClick={(e) => confirmOrderHandler(e, productOptionsTallyInfo, totalAmount)}className="checkout-form-confirm__btn btn-primary btn-primary bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                                Confirm Order
                            </button>
                        </div> : null}
                    </div> : null}


                    <div className="checkout-tally__wrapper w-full sm:w-1/2 flex flex-col justify-around items-center">
                        { cartData.cartProducts.length ? <CheckoutTally key={useUID()} cartData={cartData}/> : <div className="no-items__header w-full flex flex-col justify-center items-center">
                            <p className="no-items__text text-center text-xl">
                                There are no items in your Cart.
                            </p>
                        </div> }
                    </div>
                 </div>
        </motion.div>
    );
}

export default CheckoutPage;