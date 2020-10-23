import React, {useState, useEffect, } from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import PlacesNearMe from "../PlacesNearMe/PlacesNearMe"

function Home() {
    return (
        <main>
            <div>
                <h1>Drip-Drop Coffee Delivery!</h1>
            </div>
            <div>
                <input type="text" action={setLocationStatus} placeholder="enter your location"></input>
            </div>
            <PlacesNearMe/>
            
        </main>
    )
}

export default Home
