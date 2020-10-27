import React from 'react';
import {Link} from 'react-router-dom';
import LoginPageHeader from '../LoginPageHeader/LoginPageHeader'
import './home.scss';
import PlacesNearMe from '../PlacesNearMe/PlacesNearMe';

function UpdatedHomePage() {
    return (
        <div>
            <LoginPageHeader/>
            <main>
                <div className="hero">
                    <div className="hero__description">
                        <h1 className="hero__description-header">Drip Drop</h1>
                        <p className="hero__description-explained">Coffee to go from Cafes near you! Simply select a nearby cafe, place your order and then pick-up.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UpdatedHomePage
