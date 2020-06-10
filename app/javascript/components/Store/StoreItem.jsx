import React from 'react';

const StoreItem = ({ productData, productOptions, artist }) => {

    //CSS Classes

    //

    const productOptionsArr = productOptions
        .reduce((acc, curOpt) => {
            if (!Object.keys(acc).includes(curOpt.option_name)) {
                acc.push({ optionName: curOpt.option_name, values: [] });
            }

            acc.find(opt => opt.optionName == curOpt.option_name).values.push(curOpt.value);

            return acc;
        }, [])

    const productOptionEls = productOptionsArr.map(opt => {
        const options = opt.values.map(value =>
            <option value={value}>{value}</option>
        )

        return (
            <select name={opt.optionName} id={opt.optionName}>
                {options}
            </select>
        )
    })


    return (
        <div className="store-item__container">
            <div className="store-item__header flex flex-col justify-center items-center w-full">
                <h2 className="store-item__header-text uppercase tracking-widest text-2xl py-2">
                    {productData.name}
                </h2>
                <h2 className="store-item-artist__header-text uppercase tracking-widest text-2xl py-2">{artist.name}</h2>
            </div>
            <div className="store-item-options__container">
                {productOptionEls}
            </div>
        </div>
    );
}

export default StoreItem;