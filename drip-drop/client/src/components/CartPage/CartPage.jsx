import React, {useState, useEffect, } from 'react';
import {connect} from 'react-redux';
import axios from 'axios';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import {itemQuantity, deleteItem} from '../../actions/itemQuantity';


function CartPage({cartProps, itemQuantity, deleteItem}) {

    console.log(cartProps)
    let itemsInCart = [];

    Object.keys(cartProps.products).forEach( function(item) {
        console.log(item)
        console.log(cartProps.products[item].inCart);
        if(cartProps.products[item].inCart) {
            itemsInCart.push(cartProps.products[item])
        }

        console.log(itemsInCart)
    })

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
                {/* <ion-icon name="arrow-forward-ci"></ion-icon> */}
               </div>

           </div>
        )
    })

    return (
        <div>
            <h1>Cart Page</h1>

            <div>
                {itemsInCart}
                <p>{cartProps.cartCost}</p>
            </div>

            
        </div>
    )
}

const mapStateToProps = state => ({
    cartProps: state.cartState
});

export default connect(mapStateToProps, {itemQuantity, deleteItem})(CartPage)
