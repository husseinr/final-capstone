import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import { useDispatch, Provider } from "react-redux";
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import PlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import CafeCards from '../CafeCards/CafeCards';
import './placesNearMe.scss';

function PlacesNearMe(props) {
    const [cafes, setCafes] = useState([]);
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({lat: null, lng: null});

    useEffect(() => {
        const getCafes = async () => {
          let response = await axios.get('/cafeSearch/', {
            params: {lat: coordinates.lat, lng: coordinates.lng},
          });
          setCafes(response.data);
        }
        getCafes();
      }, [coordinates]);




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
                            {/* <p>Latitude: {coordinates.lat}</p>
                            <p>Longitude: {coordinates.lng}</p> */}
                            <div>
                                <input {...getInputProps({placeholder: "what's your address"})}/>
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

                <div className="cafes">
                    {cafes && cafes.map(cafe => {
                        return   <CafeCards
                        name={cafe.name}
                        key={cafe.id}
                        image={cafe.icon}/>
                    })}
                </div>
            </div>
            
        </section>
    )
}

export default PlacesNearMe