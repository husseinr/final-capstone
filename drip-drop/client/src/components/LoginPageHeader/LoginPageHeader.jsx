import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './loginPageHeader.scss';
import PageLogo from '../../assets/logos/drip-logo.png'

function LoginPageHeader(props) {

    return (
        <header className='login-header'>
            <nav className="login-header__nav">
                <div className="login-header__nav-header">
                <img className="login-header__nav-logo" src={PageLogo}/>
                </div>

                <div className="login-header__nav-buttons">
                    <Link to="/register"><button className="login-header__nav-buttons-register" type="submit">Sign Up</button></Link>
                    <Link to="/login"><button className="login-header__nav-buttons-login" type="submit">Sign In</button></Link>
                </div>
            </nav>
        </header>
    )
}

export default (LoginPageHeader)