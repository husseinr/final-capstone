import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {addCart} from '../../actions/addAction';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import PageHeader from '../../components/PageHeader/PageHeader';
import './fixedCafeMenu.scss';

function CafeMenu(props) {
    console.log(props)

    let [menu, setMenu] = useState([]);
    const { city, cafe } = useParams();
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

      const menuItems = menu.map((item) => (
           <div className="menu-card" key={item.id}>
                <img className="menu-card__image" src={item.image} alt="drink-icon" ></img>
                <p className="menu-card__item">{item.displayedItem}</p>
                <p className="menu-card__price">${item.price}</p>
                <div className="menu-card__add-on">
                    <label className="menu-card__add-on-label">Sugar</label>
                    <input className="menu-card__add-on-input" placeholder="0"></input>
                </div>
       
                <div className="menu-card__add-on">
                    <label className="menu-card__add-on-label">Cream</label>
                    <input className="menu-card__add-on-input" placeholder="0"></input>
                </div>

                <div className="menu-card__additionals">
                    <label className="menu-card__additionals-label">Add</label>
                    <select className="menu-card__additionals-select">
                        <option className="menu-card__additionals-select-option">Please Select</option>
                        <option className="menu-card__additionals-select-option" value="oat milk">Splash of Oat Milk</option>
                        <option className="menu-card__additionals-select-option" value="almond milk">Splash of Almond Milk</option>
                        <option className="menu-card__additionals-select-option" value="pumpkin spice">Pumpkin Spice</option>
                    </select>
                </div>
                <button className="menu-card__submit" type="submit" value="add" onClick={() => props.addCart(item.item)}>Add</button>
           </div>
    ));

    return (
        <>
        <PageHeader/>
        <section className="menu-section">
            <div className="menu-section__items">
                <div className="menu-section__items-cards">{menuItems}</div>
            </div>
        </section>
        </>
    )
}

export default connect(null, {addCart})(CafeMenu)