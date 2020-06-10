import React from 'react';

const StoreItem = ({ productData }) => {

    //CSS Classes

    //

    return (
        <div className="store-item__container">
            <div className="store-item__header flex justify-center items-center w-full">
                <h2 className="store-item__header-text uppercase tracking-widest text-2xl py-2">
                    {productData.product_name}
                </h2>
            </div>
        </div>
    );
}

export default StoreItem;