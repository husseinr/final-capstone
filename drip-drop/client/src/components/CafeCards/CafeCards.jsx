import React, {useState, useEffect, } from 'react';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import {connect} from 'react-redux';
import './cafeCards.scss';


function CafeCards(props) {

        // cafe distance calculator from user address in KM
        let lat1 = props.yourCoordinates.lat;
        let lng1 = props.yourCoordinates.lng;
        let lat2 = props.lat2;
        let lng2 = props.lng2;

        let cartMapCoord = [
            lat2,
            lng2
        ]

        const R = 6371e3;
        const φ1 = lat1 * Math.PI/180; 
        const φ2 = lat2 * Math.PI/180;
        const Δφ = (lat2-lat1) * Math.PI/180;
        const Δλ = (lng2-lng1) * Math.PI/180;
    
        const a = Math.sin(Δφ/2) * Math.sin(Δφ/2) +
                Math.cos(φ1) * Math.cos(φ2) *
                Math.sin(Δλ/2) * Math.sin(Δλ/2);
        const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
    
        const distance = (R * c)/1000;

        const imageURL = 'https://maps.googleapis.com/maps/api/place/photo?maxwidth=960&photoreference=';
        const key = '&key=AIzaSyAoxLHGoMhAIczJRhM0jRRQwhGR4FVSBzE';

        let setCafeMapCoord = props.getCoord;
    return (
        <Link to='/menu'>
        <section className="content">
            <div className="content__card" key={props.key} onClick={() => setCafeMapCoord(cartMapCoord,'update')}>
                <p className="content__card-name">{props.name}</p>
                {/* <img className="content__card-image" src={props.image} alt="cafe-image"></img> */}
                <p>{props.rating}</p>
                <p>distance: {distance.toFixed(2)} km </p>
                <img className="content__card-image" src={imageURL + props.photoRef + key}/>
            </div>
        </section>
        </Link>

    )
}

const mapStateToProps = state => ({
    coordinateProps: state.coordinateState
});

export default connect(mapStateToProps)(CafeCards)
