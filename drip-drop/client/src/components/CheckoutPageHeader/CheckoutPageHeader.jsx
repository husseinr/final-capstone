import React from 'react';
import {Link} from 'react-router-dom';
import PageLogo from '../../assets/logos/drip-logo.png'
import './checkoutPageHeader.scss';

export default function CheckoutPageHeader() {

    return (
        <header className="cart-header">
            <nav className="cart-header__nav">
                <div className="cart-header__nav-logo">
                    <Link to="/profile"><h2 className="cart-header__nav-logo-text">Drip Drop</h2></Link>
                </div>

                <div className="cart-header__nav-option" >
                    <Link to="/profile"><button className="cart-header__nav-option-button" type="submit" >Home</button></Link>
                </div>
            </nav>
        </header>

    )
}
