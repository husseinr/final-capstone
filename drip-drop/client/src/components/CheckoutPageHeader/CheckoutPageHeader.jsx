import React from 'react';
import {Link} from 'react-router-dom';
import PageLogo from '../../assets/logos/drip-logo.png'
import './checkoutPageHeader.scss';

export default function CheckoutPageHeader() {

    return (
        <header className="cart-header">
            <nav className="cart-header__nav">
                <div className="cart-header__nav-logo">
                    <img className="cart-header__nav-logo-image" src={PageLogo}/>
                </div>

                <div className="cart-header__nav-option" >
                    <Link to="/profile"><button className="cart-header__nav-option-button" type="submit">Return Home</button></Link>
                </div>
            </nav>
        </header>

    )
}
