import React, { useState, useEffect } from 'react';
import AllStoreItems from './AllStoreItems';
import AddedOrRemovedCartModal from './AddedOrRemovedCartModal';
import { AnimatePresence, motion } from 'framer-motion';
import { useUID } from 'react-uid';

const Store = ({ productsData, addToCartHandler, cartData, modalIsShown, setModalIsShown }) => {


    //CSS Classes

    //

    return (
        <motion.div
            key={useUID()}
            className="all-store-items__container"
            initial={{opacity: 0 }}
            animate ={{opacity: 1 }}
            exit={{ opacity: 0}}
            transition={{duration: 0.6}}
        >
            {modalIsShown.open ? <AddedOrRemovedCartModal modalIsShown={modalIsShown} setModalIsShown={setModalIsShown}/> : null}
            <AllStoreItems productsData={productsData} addToCartHandler={addToCartHandler} cartData={cartData} />
        </motion.div>
    );
}

export default Store;