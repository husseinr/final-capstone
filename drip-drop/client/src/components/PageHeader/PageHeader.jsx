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

        <nav className="nav">

            <div className="nav__header">
                <h2 className="nav__header-logo">Logo</h2>
            </div>

            <div className="nav__option">
                <button className="nav__option-button" onClick={logoutHandler}>Log Out</button>
            </div>

            <div>
                <Link to='/cart'><ion-icon name="basket"></ion-icon><button className="nav__option-button">Cart</button><span>{props.cartProps.cartQty}</span></Link>
            </div>
  
        </nav>
    )
}
const mapStateToProps = state => ({
    cartProps: state.cartState
})
export default connect(mapStateToProps, {getQty})(Pageheader)
