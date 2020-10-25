import React, {useEffect} from 'react';
import {Link} from 'react-router-dom';
import './pageHeader.scss';
import {getQty} from '../../actions/getAction'
import {connect} from 'react-redux';
import PageLogo from '../../assets/logos/drip-logo.png'

function Pageheader(props) {
    const {logoutHandler} = props;
    useEffect(() => {
        getQty();
    }, [])
    return (

        <nav className="nav">

            <div className="nav__header">
               <img className="nav__header-logo" src={PageLogo}/>
            </div>

            <div className="nav__option">
                {/* <button className="nav__option-button" onClick={logoutHandler}>Log Out</button> */}
            </div>

            <div>
                <Link to="/register"><button type="submit">Register</button></Link>
                <Link to="/dashboard"><button type="submit">Profile</button></Link>
                <Link to="/login"><button type="submit">Login</button></Link>
                <Link to='/cart'><button className="nav__option-button"><ion-icon name="basket"></ion-icon>Cart<span>{props.cartProps.cartQty}</span></button></Link>
            </div>
  
        </nav>
    )
}
const mapStateToProps = state => ({
    cartProps: state.cartState
})
export default connect(mapStateToProps, {getQty})(Pageheader)
