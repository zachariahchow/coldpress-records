import React from 'react';
import StoreItem from './StoreItem';
import { AnimatePresence, motion } from 'framer-motion';

const AllStoreItems = ({ productsData, addToCartHandler, cartData }) => {

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

        return (<StoreItem
            productData={prod}
            productOptions={productOptions}
            artist={artist}
            addToCartHandler={addToCartHandler}
            cartData={cartData}
            key={productsData.products.indexOf(prod) + 1}
            />)
    })

    return (
        <div
            key={cartData.cartDetails.length + 5}
            className="all-store-items__container flex flex-col justify-around items-center mt-6"
        >
            <div className="all-store-items__header flex justify-center items-center w-full">
                <h2 className="all-store-items__header-text text text-center text-2xl uppercase tracking-widest mb-2 text-black font-bold">
                    All Items
                </h2>
            </div>
            {storeItemEls}
        </div>
    );
}

export default AllStoreItems;