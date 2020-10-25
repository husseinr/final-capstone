import React from 'react';
import {Link} from 'react-router-dom';
import HeroImage from '../../assets/images/test-hero-image-3.png';
import './home.scss';

function UpdatedHomePage() {
    return (
        <div>
            <main>
            {/* <Link to="/register"><button type="submit">Register</button></Link>
            <Link to="/dashboard"><button type="submit">Profile</button></Link>
            <Link to="/login"><button type="submit">Login</button></Link> */}
            <div>
    
            </div>
            <div className="hero">
            <div>
                <h2>Drip Drop</h2>
                <p>Coffee to go from Cafes near you!</p>
            </div>
    
     
            {/* <img className="hero__image" src={HeroImage}></img> */}
            </div>
        

            </main>
            {/* <h1>Drip Drop</h1> */}
  

        </div>
    )
}

export default UpdatedHomePage
