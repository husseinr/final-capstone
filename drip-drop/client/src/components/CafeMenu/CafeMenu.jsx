import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import CartPage from '../CartPage/CartPage';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';

function CafeMenu() {

    let [menu, setMenu] = useState([]);
    const { city, cafe } = useParams();
    let [cart, setCart] = useState([]);
    let [cartTotal, setCartTotal] = useState(0);


    let getMenu = () => {

        axios
        .get(`/cafes/${city}/${cafe}`)
        .then(res => {
            setMenu(res.data.menu)
   
        })
        .catch(err => console.log(err))
    }

    useEffect (() => {
        getMenu()
    }, [], 

     );


     const addToCart = (item) => {
        setCart([...cart, item]);
    }
    console.log(cart)

    const removeFromCart = (item) => {
        let copy = [...cart]
        copy = copy.filter((cartItem) => cartItem.id !== item.id)
        setCart(copy)
    }

     const menuItems = menu.map((item) => (
         <div key={item.id}>
            <div>
                 {`${item.item} : $${item.price}`}
                 <input type="submit" value="add" onClick={() => addToCart(item)} />
            </div>
         </div>
     ));

    const cartItems = cart.map((item) => (
        <div key={item.id}>
          {`${item.item}: $${item.price}`}
          <input type="submit" value="remove" onClick={() => removeFromCart(item)} />
        </div>
      ));
     
    return (
        <div>
            <div>
                <div>{menuItems}</div>
                <div>Items in Cart</div>
                <div>{cartItems}</div>
            </div>
        </div>
    )
}

export default CafeMenu
