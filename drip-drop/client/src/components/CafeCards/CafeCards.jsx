import React, {useState, useEffect, } from 'react';


function CafeCards(props) {
    return (
        <div key={props.key}>
            <p>{props.name}</p>
            <img src={props.image}></img>
        </div>
    )
}

export default CafeCards
