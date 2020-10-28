import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './pageHeader.scss';
import {getQty} from '../../actions/getAction'
import {connect} from 'react-redux';

function Pageheader(props) {
    const {logoutHandler} = props;
    useEffect(() => {
        getQty();
    }, [])
    return (
        <header className="main-header">
            <nav className="main-header__nav">

                <div className="main-header__nav-logo">
                    <Link to="/profile"><h2 className="main-header__nav-logo-text">Drip Drop</h2></Link>
                </div>

                <div className="main-header__nav-options">
                    <Link to="/profile"><button className="main-header__nav-options-button" type="submit">Home</button></Link>
                    <Link to='/cart'><button className="main-header__nav-options-button"><ion-icon name="basket"></ion-icon>Coffee Cart<span> {props.cartProps.cartQty}</span></button></Link>
                    <button className="main-header__nav-options-button" onClick={props.logout}>Log Out</button>
                </div>
            </nav>
        </header>
    )
}
const mapStateToProps = state => ({
    cartProps: state.cartState
})
export default connect(mapStateToProps, {getQty})(Pageheader)
