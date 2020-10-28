import React from 'react';
import LoginPageHeader from '../LoginPageHeader/LoginPageHeader'
import './home.scss';

function UpdatedHomePage() {
    return (
        <div>
            <LoginPageHeader/>
            <main className="home-main">
                <div className="home-main__hero">
                    <div className="home-main__hero-description">
                        <h1 className="home-main__hero-description-name">Drip Drop</h1>
                        <p className="home-main__hero-description-explained">Coffee to go from Cafes near you! Simply select a nearby cafe, place your order & pick-up your brew.</p>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default UpdatedHomePage
