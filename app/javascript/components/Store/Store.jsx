import React from 'react';
import AllStoreItems from './AllStoreItems';


const Store = ({ productsData }) => {

    //CSS Classes

    //

    return (
        <div className="all-store-items__container">
            <div className="all-store-items__header flex justify-center items-center w-full">
                <h2 className="all-store-items__header-text uppercase tracking-widest text-2xl py-2">
                    Store
                </h2>
            </div>
            <AllStoreItems productsData={productsData}/>
        </div>
    );
}

export default Store;