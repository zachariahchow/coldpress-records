import React from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const AddedToCartModal = ({ modalIsShown }) => {

    return (
        <AnimatePresence exitBeforeEnter>
            <motion.div
                className={`added-to-cart-modal__container w-full fixed top-0 left-0 bg-gray-200 opacity-75 h-16 flex justify-center items-center z-50`}
                initial={{y: '-200%' }}
                animate ={{y: '0' }}
                exit={{ y: '-200%'}}
                transition={{duration: 1}}
            >
                <h2  className={`added-to-cart-modal__header text-center text-xl uppercase font-black tracking-widest`}>Item added to cart!</h2>
            </motion.div>
        </AnimatePresence>
    );
}

export default AddedToCartModal;