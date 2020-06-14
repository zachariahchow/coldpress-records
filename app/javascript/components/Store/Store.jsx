import React, { useState, useEffect } from 'react';
import AllStoreItems from './AllStoreItems';
import { AnimatePresence, motion } from 'framer-motion';

const Store = ({ productsData, addToCartHandler, cartData }) => {

    //CSS Classes

    //

    return (
        <motion.div
            key={cartData.cartDetails.length + 4} className="all-store-items__container"
            initial={{opacity: 0 }}
            animate ={{opacity: 1 }}
            exit={{ opacity: 0}}
            key={cartData.cartDetails.length + 3}
            transition={{duration: 0.6}}
        >
            <AllStoreItems productsData={productsData} addToCartHandler={addToCartHandler} cartData={cartData}/>
        </motion.div>
    );
}

export default Store;