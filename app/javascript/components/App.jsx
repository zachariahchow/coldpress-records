import React, { useState, useEffect, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';

import Header from './Layout/Header';
import LandingBanner from './LandingPage/LandingBanner';
import LandingPage from './LandingPage/LandingPage';
import AllArtists from './Artists/AllArtists';
import ArtistBio from './Artists/ArtistBio';
import Store from './Store/Store';
import CartPage from './Cart/CartPage';
import CheckoutPage from './Checkout/CheckoutPage';
import AboutPage from './About/AboutPage';
import ScrollToTop from './Utilities/ScrollToTop';

const App = () => {

    //Reducers

    const httpReducer = (httpState, action) => {
        switch (action.type) {
            case 'SEND':
                return { loading: true, error: null };
            case 'RESPONSE':
                return { ...httpState, loading: false };
            case 'ERROR':
                return { ...httpState, error: action.errorMessage };
            case 'CLEAR':
                return { ...httpState, error: null };
            default:
                throw new Error('Bad!');
        }
    }

    //UI States

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenuHandler = () => {
        setIsMenuOpen(!isMenuOpen);
    }

    useEffect(() => {
        console.log('Menu State');
        console.log(isMenuOpen);
    }, [isMenuOpen])

    //States

    const [httpState, dispatchHttp] = useReducer(httpReducer, {
        loading: false,
        error: null
    })

    const [allArtists, setAllArtists] = useState([]);

    const getAllArtists = () => {
        fetch('/artists.json', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(resData => {
            setAllArtists(resData);
        })
    }

    useEffect(() => {
        getAllArtists();
    }, []);

    useEffect(() => {
        console.log(`All Artists: ${allArtists}`);
    }, [allArtists]);

    //

    const [allProducts, setAllProducts] = useState([]);

    const getAllProducts = () => {
        fetch('/products.json', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(resData => {
            setAllProducts(resData);
        })
    }

    useEffect(() => {
        getAllProducts();
    }, []);

    useEffect(() => {
        console.log(`All Products:`);
        console.log(allProducts);
    }, [allProducts]);

    //

    const [cartData, setCartData] = useState([]);

    const getCartData = () => {

        fetch('/cart.json', {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' }
        }).then(res => {
            return res.json()
        }).then(resData => {
            console.log(resData);
            setCartData(resData);
        })
    }

    useEffect(() => {
        getCartData();
    }, []);

    useEffect(() => {
        console.log(`Cart Data:`);
        console.log(cartData);
    }, [cartData]);



    const addToCartHandler = (ev) => {

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        fetch('/add-to-cart', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
            body: JSON.stringify({
                cart_id: cartData.cart.id,
                product_option_id: parseInt(ev.target.dataset.productOptionId)
            })
        }).then(res => {
            getCartData();
            return res.json();
        }).then(resData => {
            console.log(resData);
        }).catch(e => {
            console.log(e);
        })

    }

    const removeFromCartHandler = (ev) => {

        console.log('Remove from Cart!');

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const cartId = parseInt(ev.target.dataset.cartId);
        const productOptionId = parseInt(ev.target.dataset.productOptionId);

        fetch(`/remove-from-cart/${cartId}/${productOptionId}`, {
            method: 'DELETE',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken }
        }).then(res => {
            getCartData();
            return res
        }).then(resData => {
            console.log(resData);
        }).catch(e => {
            console.log(e);
        })
    }

    const incrementQuantityHandler = (ev) => {

        console.log('Increment!');

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const cartId = parseInt(ev.target.dataset.cartId);
        const productOptionId = parseInt(ev.target.dataset.productOptionId);
        const updatedCartData = { ...cartData }

        let productOptionQty;

        updatedCartData.cartDetails.forEach(det => {
            if (det.product_option_id == productOptionId) {
                det.quantity++;
                productOptionQty = det.quantity;
            }
        });

        setCartData(updatedCartData);

        fetch(`/edit-quantity/${cartId}/${productOptionId}/${productOptionQty}`, {
            method: 'PATCH',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken }
        }).then(res => {
            getCartData();
            return res.json();
        }).then(resData => {
            console.log(resData);
        }).catch(e => {
            console.log(e);
        })
    }

    const decrementQuantityHandler = (ev) => {

        console.log('Decrement!');

        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        const cartId = parseInt(ev.target.dataset.cartId);
        const productOptionId = parseInt(ev.target.dataset.productOptionId);
        const updatedCartData = { ...cartData }

        let productOptionQty;

        updatedCartData.cartDetails.forEach(det => {
            if (det.product_option_id == productOptionId) {
                if (det.quantity > 1) {
                    det.quantity--;
                    productOptionQty = det.quantity;

                    setCartData(updatedCartData);

                    fetch(`/edit-quantity/${cartId}/${productOptionId}/${productOptionQty}`, {
                        method: 'PATCH',
                        headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken }
                    }).then(res => {
                        getCartData();
                        return res.json();
                    }).then(resData => {
                        console.log(resData);
                    }).catch(e => {
                        console.log(e);
                    })
                }
            }
        });

    }

    //
    //#Customer Checkout Fields
    const [customerFields, setCustomerFields] = useState({
        email: null,
        fullName: null,
        billingAddress: null,
        shippingAddress: null,
        country: null,
        phone: null,
        status: 0,
        deliveryMethod: null
    });

    const customerFieldChangeHandler = (ev, field) => {
        const updatedCustomerFields = { ...customerFields }
        updatedCustomerFields[field] = ev.target.value;
        setCustomerFields(updatedCustomerFields)
    }

    useEffect(() => {
        console.log(customerFields);
    }, [customerFields])

    //##Confirm Order / Cart Checkout
    const confirmOrderHandler = (ev, orderData, totalPrice) => {
        const csrfToken = document.querySelector('meta[name="csrf-token"]').getAttribute('content');

        fetch('/confirm-order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json', 'X-CSRF-Token': csrfToken },
            body: JSON.stringify({ customer: customerFields, order: orderData, total_price: totalPrice })
        }).then(res => {
            getCartData([]);
            return res.json();
        }).then(resData => {
            console.log(resData);
        }).catch(e => {
            console.log(e);
        })
    }


    //CSS classes
    const mainClasses = ['min-h-screen', 'w-full', 'flex', 'flex-col', 'justify-start', 'items-center'];

    return (
        <main className={mainClasses.join(' ')}>
            <BrowserRouter >
                <ScrollToTop>
                <Switch>
                    <Route path="/" exact render={(props) => <LandingPage {...props} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenuHandler={toggleMenuHandler} />} />
                    <Route path="/" render={(props) => <Header {...props} isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} toggleMenuHandler={toggleMenuHandler} />}/>
                </Switch>
                <Switch>
                    <Route path="/artists" exact render={(props) => <AllArtists {...props} allArtistsData={allArtists}/>} />
                    <Route path="/artists/:id" exact render={(props) => <ArtistBio {...props} artistData={allArtists.find(artist => artist.id == props.match.params.id)}/>} />
                    <Route path="/store" exact render={(props) => <Store {...props} productsData={allProducts} cartData={cartData} addToCartHandler={addToCartHandler}/>} />
                    <Route path="/cart" exact render={(props) => <CartPage {...props} cartData={cartData} removeFromCartHandler={removeFromCartHandler} incrementQuantityHandler={incrementQuantityHandler} decrementQuantityHandler={decrementQuantityHandler}/>} />
                    <Route path="/checkout" exact render={(props) => <CheckoutPage {...props} customerFieldChangeHandler={customerFieldChangeHandler} customerFields={customerFields} cartData={cartData} confirmOrderHandler={confirmOrderHandler}/>} />
                    <Route path="/about" exact render={(props) => <AboutPage {...props}/>} />
                </Switch>
                </ScrollToTop>
            </BrowserRouter>
        </main>
    );
}

export default App;