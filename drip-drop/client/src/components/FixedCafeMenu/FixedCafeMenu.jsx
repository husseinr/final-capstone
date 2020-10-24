import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addCart} from '../../actions/addAction';
import CartPage from '../CartPage/CartPage';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';

function CafeMenu(props) {
    console.log(props)

    let [menu, setMenu] = useState([]);
    const { city, cafe } = useParams();
    // let [cart, setCart] = useState([]);
    let [alert, setAlert] = useState('Added multiple');
    let [cartTotal, setCartTotal] = useState(0);


    let getMenu = () => {

        axios
        .get('/menu')
        .then(res => {
            setMenu(res.data)
   
        })
        .catch(err => console.log(err))
    }

    useEffect (() => {
        getMenu()
    }, [], 

     );

    //  useEffect(() => {
    //     total();
    //   }, [cart]);

    //  const addToCart = (item) => {
    //     setCart([...cart, item]);
    // }
    // console.log(cart)

    // const removeFromCart = (item) => {
    //     let copy = [...cart]
    //     copy = copy.filter((cartItem) => cartItem.id !== item.id)
    //     setCart(copy)
    // }

    //  const menuItems = menu.map((item) => (
    //      <div key={item.id}>
    //         <div>
    //              {`${item.item} : $${item.price}`}
    //              <input type="submit" value="add" onClick={() => addToCart(item)} />
    //         </div>
    //      </div>
    //  ));

    // const cartItems = cart.map((item) => (
    //     <div key={item.id}>
    //       {`${item.item}: $${item.price}`}
    //       <input type="submit" value="remove" onClick={() => removeFromCart(item)} />
    //     </div>
    //   ));

    //   updates below

    // let [basketQty, setBasketQty] = useState (0);

    // const addToBasket = () => {
    //     setBasketQty(basketQty + 1)
    // }

      const menuItems = menu.map((item) => (
        <div key={item.id}>
           <div>
                {`${item.item} : $${item.price}`}
                {/* <input type="submit" value="add" onClick={() => addToCart(item)} /> */}
                <input type="submit" value="add" onClick={() => props.addCart(item.item)} />
           </div>
        </div>
    ));

//    const cartItems = basketQty.map((item) => (
//        <div key={item.id}>
//          {`${item.item}: $${item.price}`}
         {/* <input type="submit" value="remove" onClick={() => removeFromCart(item)} /> */}
       {/* </div>
     )); */}

  

    //  const totalPrice = () => {
    //      let addTotal = (accumulator, currentValue) => accumulator + currentValue;
    //      let total = cart.addTotal;
    //      setCartTotal(addTotal)

    //  }

    // const total = () => {
    //     let totalVal = 0;
    //     for (let i = 0; i < cart.length; i++) {
    //       totalVal += cart[i].price;
    //     }
    //     setCartTotal(totalVal);
    //   };



    //   updates below




 


     
    return (
        <div>
            <div>
                <div>{menuItems}</div>
                <div>Items in Cart</div>
                {/* <div>{cartItems}</div> */}
                <div>Total</div>
                {/* <p>$ {cartTotal}</p> */}
            </div>
        </div>
    )
}

export default connect(null, {addCart})(CafeMenu)