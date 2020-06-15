import React from 'react';
import { Link } from 'react-router-dom';

const CheckoutTally = ({ cartData }) => {

    const { cartDetails, cartProducts } = cartData

    //CSS Classes

    //

    const productOptionsTallyInfo = cartDetails.reduce((acc, curDet) => {

        const prodOption = cartProducts
            .find(prod => {
                return prod.product_option.id == curDet.product_option_id
            });

        const prodOptionSubtotal = parseInt(prodOption.product_option.price) * curDet.quantity;

        acc.push({
            productName: prodOption.product.name,
            productOption: prodOption.option.value,
            quantity: curDet.quantity,
            productSubtotal: prodOptionSubtotal,
            optionImage: prodOption.product_option.thumbnail_img1
        })

        return acc;
    }, [])

    const totalAmount = productOptionsTallyInfo.reduce((acc, curOpt) => {
        return curOpt.productSubtotal + acc
    }, null)

    const tallyInfoEls = productOptionsTallyInfo.map(prod =>
        <div className="product-tally-info__container w-2/3 sm:w-11/12 flex flex-col justify-around items-center mx-2 sm:flex-row sm:flex-wrap mt-6">
            <div className="product-tally-info-image__container w-1/4 sm:w-3/4 mr-4 flex-grow-0 mb-2">
                <img src={prod.optionImage} alt=""/>
            </div>
            <div className="product-tally-info-text__container flex flex-col justify-around items-center text-xs flex-grow-1">
                <div className="product-tally-info-name w-full flex justify-center items-center">
                    <p className="product-tally-info-name__text text-center">{prod.productName}</p>
                </div>
                <div className="product-tally-info-product-option">
                    {prod.productOption}
                </div>
                <div className="quantity-subtotal__container flex justify-around items-center mt-2">
                    <div className="product-tally-info-quantity mr-4">
                        <span className="font-bold">Quantity:</span> {prod.quantity}
                    </div>
                    <div className="product-tally-info-subtotal">
                        <span className="font-bold">Subtotal:</span> {prod.productSubtotal.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="tally__container w-full flex flex-col justify-center items-center sm:w-4/5">
            {tallyInfoEls}
            <div className="tally-total__container flex flex-col justify-around items-center my-6 w-3/4 sm:text-xl">
                <h3 className="tally-gst__text text-gray-700 w-full flex justify-between">
                    <span className="tracking-wider font-bold ">GST (7%):</span> <span>${(totalAmount * 0.07).toFixed(2)}</span>
                </h3>
                <h2 className="tally-total__text text-gray-800 w-full flex justify-between">
                    <span className="tracking-wider font-bold">Total:</span> <span>${(totalAmount * 1.07).toFixed(2)}</span>
                </h2>
            </div>
        </div>
    );
}

export default CheckoutTally;