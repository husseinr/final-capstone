import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';

function StoreList() {
    let [cafes, setCafes] = useState([]);

    const { city, cafe } = useParams();

    let getCafeList = () => {

        axios
        .get(`/cafes/${city}`)
        .then(res => {
            setCafes(res.data.selected)
            console.log(res.data.selected)
        })
        .catch(err => console.log(err))
    }

    useEffect (() => {
        getCafeList()
    }, [], 

     );

    return (
        <section>

            <div>
            <div className="storeList"> 
                    {cafes.map(cafe => (
                        <div key={cafe.id}> 
                            <div> <p>Logo</p> </div>
                            <h2> {cafe.cafeName}</h2>
                            <p> {cafe.address}</p>
                            <Link to={`/cafes/${cafe.city}/${cafe.cafeName}`}>
                                <p>See Menu</p>
                            </Link>
                        </div>
                    ))}
           </div>

            </div>
            
        </section>
    )
}

export default StoreList
