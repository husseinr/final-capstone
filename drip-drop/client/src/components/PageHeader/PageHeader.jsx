import React from 'react';
import './pageHeader.scss';

function Pageheader(props) {
    const {logoutHandler} = props;
    return (

        <nav className="nav">

            <div className="nav__header">
                <h2 className="nav__header-logo">Logo</h2>
            </div>

            <div className="nav__option">
                <button className="nav__option-button" onClick={logoutHandler}>Log Out</button>
            </div>
  
        </nav>
    )
}

export default Pageheader
