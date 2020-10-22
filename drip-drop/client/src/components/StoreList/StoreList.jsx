import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import PlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';

function StoreList() {
    let [cafes, setCafes] = useState([]);
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({lat: null, lng: null});

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

     const handleSelect = async (value) => {
        const locationResults = await geocodeByAddress(value);
        const latlng = await getLatLng(locationResults[0]);
       setCoordinates(latlng);
       setAddress(value);
     }


    return (
        <section>

            <div>
            <div>
                     <PlacesAutoComplete value={address} onChange={setAddress} onSelect={handleSelect}>
                         {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                        <div>
                            <p>Latitude: {coordinates.lat}</p>
                            <p>Longitude: {coordinates.lng}</p>
                            <div>
                                <input {...getInputProps({placeholder: "what's your location"})}/>
                            </div>
                            <div>
                                {loading ? <p>... loading places</p> : null}

                                {suggestions.map((suggestion) => {
                                    let style = {backgroundColor: suggestion.active ? "grey" : "white"}
                                   return <p {...getSuggestionItemProps (suggestion, {style} )}>{suggestion.description}</p> 
                                })}
                            </div>
                         </div>
                         )}

                     </PlacesAutoComplete>
                 </div>
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
