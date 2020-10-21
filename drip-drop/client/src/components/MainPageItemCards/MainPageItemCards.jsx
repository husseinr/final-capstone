import React from 'react';
import './mainPageItemCards.scss';
import {Link} from 'react-router-dom'

function MainPageItemCards(props) {
    const {name, image,} = props
    return (
            <Link>
                <div className='card'>
                    <p className='card__name'>{name}</p>
                    <img className='card__image' src={image} alt="item-image"></img>
                </div>
            </Link>
    )
}

export default MainPageItemCards
