import React from 'react';

const StoreItem = ({ productData, productOptions, artist }) => {

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
                .values.push(curOpt.value);

            return acc;

        }, [])

    const productOptionEls = productOptionsArr.map(opt => {
        const options = opt.values.map(value =>
            <option value={value} key={opt.values.indexOf(value) + 1}>{value}</option>
        )

        return (
            <select name={opt.optionName} id={opt.optionName} className="block appearance-none w-1/2 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" key={productOptionsArr.indexOf(opt) + 1}>

                {options}
            </select>
        )
    })


    return (
        <div className="store-item__container w-full flex flex-col justify-around items-center sm:w-3/4">
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
        </div>
    );
}

export default StoreItem;