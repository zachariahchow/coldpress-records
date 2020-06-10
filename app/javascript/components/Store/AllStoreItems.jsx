import React from 'react';
import StoreItem from './StoreItem';


const AllStoreItems = ({ productsData }) => {

    //CSS Classes

    //

    const storeItemEls = productsData.products.map(prod => {

        const productOptions = productsData.product_options
            .filter(option =>
                option.artist_id == prod.artist_id
            )

        const artist = productsData.artists
            .find(artist =>
                prod.artist_id == artist.id)

        return (<StoreItem productData={prod} productOptions={productOptions} artist={artist} key={productsData.products.indexOf(prod) + 1}/>)
    })

    return (
        <div className="all-store-items__container flex flex-col justify-around items-center">
            <div className="all-store-items__header flex justify-center items-center w-full">
                <h2 className="all-store-items__header-text bold tracking-widest text-2xl py-4">
                    All Items
                </h2>
            </div>
            {storeItemEls}
        </div>
    );
}

export default AllStoreItems;