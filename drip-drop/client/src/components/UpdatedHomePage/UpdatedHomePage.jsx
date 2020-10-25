import React from 'react';
import {Link} from 'react-router-dom';
import HeroImage from '../../assets/images/test-hero-image-3.png';

function UpdatedHomePage() {
    return (
        <div>
            <h1>Hey there!</h1>
            <Link to="/register"><button type="submit"></button></Link>
            <Link to="/dashboard"><button type="submit"></button></Link>
            <Link to="/login"><button type="submit"></button></Link>
            <img src={HeroImage}></img>
            
        </div>
    )
}

export default UpdatedHomePage
