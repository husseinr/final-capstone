import React, {useState, useEffect, } from 'react';
import {stripeProvide, Elements, CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import {connect} from 'react-redux';
import axios from 'axios';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import {itemQuantity, deleteItem} from '../../actions/itemQuantity';


function CartPage({cartProps, itemQuantity, deleteItem}) {
    const stripePromise = loadStripe("pk_test_51Hfv8NExWXMrozUbXJA8P6T4RvVqoWKEol2mEsigT2bFSWANUA4Grtx7HG2ybOIi2bjqslmS1IAG2CwJApJ0NLhw000m3PsCk8")

    console.log(cartProps)
    let itemsInCart = [];
    const [paymentStatus, setPaymentStatus] = useState('')


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
                const {data} = await axios.post('/stripePayment', {id, amount: 1000});
                console.log(data)
                paymentReceived();
            }
            catch (error) {
                console.log(error)
            }
            }
        }
        return (
            <form onSubmit={submitHandler}>
                <CardElement/>
                <button type="submit" disabled={!stripe}>Pay Now</button>
            </form>
        )
 
    }



    itemsInCart = itemsInCart.map( (item, index) => {
        return (
           <div>
               <div key={item.id}>
                    <p>{item.item}</p>
                    <p>{item.price}</p>
                    <p>{item.qty}</p>
                    <ion-icon onClick={() => itemQuantity('increase', item.item)} name="chevron-up-circle-outline"></ion-icon>
                    <ion-icon onClick={() => itemQuantity('decrease', item.item)} name="chevron-down-circle-outline"></ion-icon>
                    <ion-icon onClick={() => deleteItem('decrease', item.item)} name="trash-outline"></ion-icon>
               </div>

           </div>
        )
    })

    if (paymentStatus === "Payment Received") {
        return <p>Enjoy your Brew!</p>
    }

    return (
        <Elements stripe={stripePromise}>
        <div>
            <h1>Cart Page</h1>

            <div>
                {itemsInCart}
                <p>${cartProps.cartCost.toFixed(2)}</p>
            </div>

            <Checkout paymentReceived={() => {setPaymentStatus('Payment Received')}}/>

            
        </div>
        </Elements>
 
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, {itemQuantity, deleteItem})(CartPage)
