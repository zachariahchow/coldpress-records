import React from 'react';
import { Link } from 'react-router-dom';

const Tally = ({ cartData }) => {

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
        <div className="product-tally-info__container w-2/3 sm:w-1/3 flex flex-col justify-around items-center mx-2 sm:flex-row sm:flex-wrap mt-6">
            <div className="product-tally-info-image__container w:1/4 mr-4 flex-grow-0 mb-2">
                <img className="object-contain" src={prod.optionImage} alt=""/>
            </div>
            <div className="product-tally-info-text__container flex flex-col justify-around items-center text-xs flex-grow-1">
                <div className="product-tally-info-name">
                    {prod.productName}
                </div>
                <div className="product-tally-info-product-option">
                    {prod.productOption}
                </div>
                <div className="quantity-subtotal__container flex justify-around items-center mt-2">
                    <div className="product-tally-info-quantity mr-4">
                        <span className="font-bold">Quantity:</span> {prod.quantity}
                    </div>
                    <div className="product-tally-info-subtotal">
                        <span className="font-bold">Subtotal:</span> ${prod.productSubtotal.toFixed(2)}
                    </div>
                </div>
            </div>
        </div>
    )

    return (
        <div className="tally__container w-11/12 flex flex-col justify-around items-center pt-4 border-t-4 mb-6">
            <div className="tally__heade w-full flex flex-col justify-center items-center">
                <p className="tally__header-text text-xl text-center mb-4">Summary</p>
            </div>
            <div className="tally-products__container flex flex-col justify-around items-center sm:flex-row sm:flex-wrap">
                {tallyInfoEls}
            </div>

            <div className="tally-total__container flex flex-col justify-around items-center my-6 w-1/4 sm:text-xl">
                <h3 className="tally-gst__text text-gray-700 w-full flex justify-between">
                    <span className="tracking-wider font-bold ">GST (7%):</span> <span>${(totalAmount * 0.07).toFixed(2)}</span>
                </h3>
                <h2 className="tally-total__text text-gray-800 w-full flex justify-between">
                    <span className="tracking-wider font-bold">Total:</span> <span>${(totalAmount * 1.07).toFixed(2)}</span>
                </h2>
            </div>

            <div className="tally-checkout__btn-container mb-6">
            <Link to='checkout'>
                <button className="tally-checkout__btn btn-primary btn-primary bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded">
                    Checkout
                </button>
            </Link>
            </div>
        </div>
    );
}

export default Tally;