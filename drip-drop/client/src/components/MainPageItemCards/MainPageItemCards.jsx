import React from 'react';
import './mainPageItemCards.scss';
import {Link} from 'react-router-dom'

function MainPageItemCards(props) {
    const {city, image,} = props
    return (
            <Link to={`/cafes/${city}`}>
                <div className='card'>
                    <p className='card__name'>{city}</p>
                    <img className='card__image' src={image} alt="item-image"></img>
                </div>
            </Link>
    )
}

export default MainPageItemCards
