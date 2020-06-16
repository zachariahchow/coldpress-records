import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { uid, useUID } from 'react-uid';

const StoreItem = ({ productData, productOptions, artist, addToCartHandler, cartData }) => {

    const [productOptionData, setProductOptionData] = useState(productOptions);

    const [selectData, setSelectData] = useState({
        productId: productData.id,
        productOptionId: null,
        optionName: null,
        optionValue: null,
        quantity: null
    });

    const optionSelectChangeHandler = (ev) => {

        const updatedSelectData = { ...selectData };

        updatedSelectData.productOptionId = parseInt(ev.target.value);

        const selectedOption = productOptionData.find(opt =>
            opt.option_id == ev.target.value
        )

        updatedSelectData.optionName = selectedOption.name;
        updatedSelectData.optionValue = selectedOption.value;

        console.log(updatedSelectData);

        setSelectData(updatedSelectData);

    }

    useEffect(() => {
        console.log("SELECT DATA");
        console.log(selectData);
    }, [selectData])


    //CSS Classes

    //

    const productOptionsArr = productOptions
        .reduce((acc, curOpt) => {

            if (!Object.keys(acc).includes(curOpt.option_name)) {
                acc.push({
                    optionName: curOpt.option_name,
                    values: []
                });
            }

            acc.find(opt => opt.optionName == curOpt.option_name)
                .values.push({ productOptionId: curOpt.id, optionValue: curOpt.value, optionPrice: curOpt.price });

            return acc;

        }, [])

    const productOptionEls = productOptionsArr.map(opt => {
        const options = opt.values.map(value =>
            <option value={value.productOptionId} data-product-option-id={value.productOptionId} key={uid(opt)}>{`${value.optionValue} ($${parseInt(value.optionPrice).toFixed(2)})`}</option>
        )

        return (
            <div className="select__container flex flex-col justify-around items-center w-full">
                <h2 className="select__header mb-2">Select {opt.optionName}</h2>
                <select name={opt.optionName} id={opt.optionName} data-product-id={productData.id} onChange={optionSelectChangeHandler} className="product-select block appearance-none w-1/2 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500">
                <option value={null} data-option-id={null}> </option>
                    {options}
                </select>
            </div>
        )
    })


    return (
        <motion.div
            className="store-item__container w-full flex flex-col justify-around items-center sm:w-3/4 mb-6"
            initial={{opacity: 0, transform: 'scale(1.01)'}}
            animate ={{opacity: 1, transform: 'scale(1)'}}
            exit={{ opacity: 0}}
            key={useUID()}
            transition={{duration: 0.6}}
        >
            <div className="store-item__header flex flex-col justify-center items-center w-full">
                <h2 className="store-item__header-text uppercase tracking-widest text-xl py-2">
                    {productData.name}
                </h2>
                <h2 className="store-item-artist__header-text uppercase tracking-widest text-xl italic py-2">{artist.name}</h2>
            </div>

            <div className="store-item-img__container w-full flex flex-col justify-center items-center">
                <img src={productOptions[0].thumbnail_img1} alt="" className="object-contain"/>
            </div>

            <div className="store-item-options__container display flex justify-center items-center w-full py-4">
                {productOptionEls}
            </div>
            <button className="store-item-add__btn btn-primary bg-transparent hover:bg-gray-500 text-gray-500 font-semibold hover:text-white py-2 px-4 border border-gray-500 hover:border-transparent rounded" onClick={addToCartHandler} data-product-option-id={selectData.productOptionId}>Add to Cart</button>
        </motion.div>
    );
}

export default StoreItem;