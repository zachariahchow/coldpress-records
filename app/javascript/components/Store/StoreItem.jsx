import React from 'react';

const StoreItem = ({ productData, productOptions, artist }) => {

    //CSS Classes

    //

    return (
        <div className="store-item__container">
            <div className="store-item__header flex flex-col justify-center items-center w-full">
                <h2 className="store-item__header-text uppercase tracking-widest text-2xl py-2">
                    {productData.name}
                </h2>
                <h2 className="store-item-artist__header-text uppercase tracking-widest text-2xl py-2">{artist.name}</h2>
            </div>
            <div className="store-item-options__container">
                <label htmlFor="item-option">Options</label>
                <select name="item-option" id="item-option">
                </select>
            </div>
        </div>
    );
}

export default StoreItem;