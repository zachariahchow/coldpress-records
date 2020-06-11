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
        <div className="product-tally-info__container">
            <div className="product-tally-info-name">
                {prod.productName}
            </div>
            <div className="product-tally-info-image__container">
                <img src={prod.optionImage} alt=""/>
            </div>
            <div className="product-tally-info-product-option">
                {prod.productOption}
            </div>
            <div className="product-tally-info-quantity">
                Quantity: {prod.quantity}
            </div>
            <div className="product-tally-info-subtotal">
                Subtotal: {prod.productSubtotal}
            </div>
        </div>
    )

    return (
        <div className="tally__container w-full flex flex-col justify-center items-center">
            {tallyInfoEls}
            <div className="tally-total__container">
                <h2 className="tally-total__text">
                    Total: {totalAmount}
                </h2>
            </div>

            <div className="tally-checkout__btn-container">
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