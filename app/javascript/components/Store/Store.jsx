import React from 'react';
import AllStoreItems from './AllStoreItems';


const Store = ({ productsData }) => {

    //CSS Classes

    //

    return (
        <div className="all-store-items__container">
            <AllStoreItems productsData={productsData}/>
        </div>
    );
}

export default Store;