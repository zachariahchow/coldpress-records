import React from 'react';

const Tally = ({ cartData }) => {

    const { cartDetails, cartProducts } = cartData

    //CSS Classes

    //

    const el = <div>{cartDetails[0].product_option_id}</div>
    const el2 = <div>{cartProducts[0].product_option.id}</div>

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
        </div>
    );
}

export default Tally;