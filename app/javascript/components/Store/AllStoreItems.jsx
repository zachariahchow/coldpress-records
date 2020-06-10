import React from 'react';
import StoreItem from './StoreItem';


const AllStoreItems = ({ productsData }) => {

    //CSS Classes

    //

    const storeItemEls = productsData.products.map(prod => {

        const artist = productsData.artists
            .find(artist =>
                prod.artist_id == artist.id)

        return (<StoreItem productData={prod} artist={artist}/>)
    })

    return (
        <div className="all-store-items__container">
            <div className="all-store-items__header flex justify-center items-center w-full">
                <h2 className="all-store-items__header-text uppercase tracking-widest text-2xl py-2">
                    All Items
                </h2>
            </div>
            {storeItemEls}
        </div>
    );
}

export default AllStoreItems;