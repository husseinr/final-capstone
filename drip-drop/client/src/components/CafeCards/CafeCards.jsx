import React, {useState, useEffect, } from 'react';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import './cafeCards.scss';


function CafeCards(props) {
    return (
        <Link to='/menu'>
        <section className="content">
            <div className="content__card" key={props.key}>
                <p className="content__card-name">{props.name}</p>
                <img className="content__card-image" src={props.image} alt="cafe-image"></img>
            </div>
        </section>
        </Link>

    )
}

export default CafeCards
