import React, {useState, useEffect, } from 'react';
import {stripeProvide, Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {connect} from 'react-redux';
import axios from 'axios';
import {itemQuantity, deleteItem} from '../../actions/itemQuantity';
import {getCoordinates} from '../../actions/getCoordinates';
import PageHeader from '../../components/PageHeader/PageHeader';
import Map from '../Map/Map';
import CheckoutPageHeader from '../../components/CheckoutPageHeader/CheckoutPageHeader';
import './cartPage.scss';


function CartPage({cartProps, coordinateProps, getCoordinates, selectedCafeProps, itemQuantity, deleteItem}) {
    const stripePromise = loadStripe("pk_test_51Hfv8NExWXMrozUbXJA8P6T4RvVqoWKEol2mEsigT2bFSWANUA4Grtx7HG2ybOIi2bjqslmS1IAG2CwJApJ0NLhw000m3PsCk8")

    console.log(cartProps)
    let itemsInCart = [];
    const [paymentStatus, setPaymentStatus] = useState('')

    let center = {
        lat: coordinateProps[0],
        lng: coordinateProps[1],
      };


    Object.keys(cartProps.products).forEach( function(item) {
        console.log(item)
        console.log(cartProps.products[item].inCart);
        if(cartProps.products[item].inCart) {
            itemsInCart.push(cartProps.products[item])
        }

        console.log(itemsInCart)
    });

    const Checkout = ({paymentReceived}) => {

        const stripe = useStripe();
        const elements = useElements();

        const submitHandler = async (e) => {
            e.preventDefault();
            const {error, paymentMethod} = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)
        })

        if(!error) {
            const {id} = paymentMethod;

            try {
                const {data} = await axios.post('/stripePayment', {id, amount: cartProps.cartCost.toFixed(2)*100});
                console.log(data)
                paymentReceived();
            }
            catch (error) {
                console.log(error)
            }
            }
        }
        return (
            <form className="cart-form" onSubmit={submitHandler}>
                <h2 className="cart-form__header">Enter Card Details</h2>
                <CardElement className="cart-form__element"/>
                <button className="cart-form__button" type="submit" disabled={!stripe}>Pay Now</button>
            </form>
        )
 
    }



    itemsInCart = itemsInCart.map( (item, index) => {
        return (
           <div  key={item.id} className="cart-item">
                <p className="cart-item__item cart-item__text">{item.displayedItem}</p>
                <p className="cart-item__price cart-item__text">${item.price}</p>
                <p className="cart-item__qty cart-item__text">{item.qty}</p>
                <div className="cart-item__arrow-icons">
                    <ion-icon onClick={() => itemQuantity('increase', item.item)} name="chevron-up-circle-outline"></ion-icon>
                    <ion-icon onClick={() => itemQuantity('decrease', item.item)} name="chevron-down-circle-outline"></ion-icon>
                </div>
                <div className="cart-item__trash-icon">
                    <ion-icon onClick={() => deleteItem('delete', item.item)} name="trash-outline"></ion-icon>
                </div>
               
           </div>
        )
    })

    if (paymentStatus === "Payment Received") {
        return (
            <>
                <CheckoutPageHeader />
                <div className="checkout-message">
                        <h2 className="checkout-message__header">Order placed, enjoy your drip!</h2>
                        <p className="checkout-message__location">Ready to be picked up at <span className="checkout-message__span">{selectedCafeProps.cafe}, {selectedCafeProps.address}</span></p>
                </div>
                <section className="checkout-section">
                    <Map className="checkout-section__map"
                     center={center}
                    lat={coordinateProps.lat}
                    lng={coordinateProps.lng}/>
                </section>
            </>
        )
    }

    return (

        <Elements stripe={stripePromise}>
            <PageHeader/>
            <section className="cart-section">
                <div className="cart-section__header">
                    <h1 className="cart-section__header-text">Your Coffee Cart</h1>
                </div>
             
               <div className="cart-section__items">
                    {itemsInCart}
                    <p className="cart-section__items-total">Total: ${cartProps.cartCost.toFixed(2)}</p>
                </div>

                <Checkout paymentReceived={() => {setPaymentStatus('Payment Received')}}/>

                
            </section>
        </Elements>
 
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState,
    coordinateProps: state.coordinateState,
    selectedCafeProps: state.usersCafeState,

});

export default connect(mapStateToProps, {itemQuantity, deleteItem, getCoordinates})(CartPage)
