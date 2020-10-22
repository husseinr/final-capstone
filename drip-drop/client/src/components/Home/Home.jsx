import React, {useState, useEffect, } from 'react';
import { useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

function Home() {
    return (
        <main>
            <div>
                <h1>Drip-Drop Coffee Delivery!</h1>
            </div>
            <div>
                <input type="text" action={setLocationStatus} placeholder="enter your location"></input>
            </div>
            
        </main>
    )
}

export default Home
