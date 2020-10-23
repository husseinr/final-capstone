import React, {useState, useEffect, } from 'react';
import PlacesNearMe from '../PlacesNearMe/PlacesNearMe';
import axios from 'axios';
import { useDispatch, Provider } from "react-redux";
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import PlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { fetchRestaurantsByAddress } from "../../redux/DataActions/actions";

function StoreList(props) {
    // let [cafes, setCafes] = useState([]);
    // const [address, setAddress] = useState('');
    // const [coordinates, setCoordinates] = useState({lat: null, lng: null});
    // const [selectedAddress, setSelectedAddress] = useState("");
    // const radius = 5 * 1000;

    // // const { city, cafe } = useParams();

    // let getCafeList = () => {

    //     axios.
    //     get('/cafeSearch/', {
    //         params: {lat: coordinates.lat, lng: coordinates.lng}
    //     })
    //   .then(response => {
    //     setCafes(response.data);
    //     console.log(places)
    //     console.log(coordinates.lat, coordinates.lng)
    //   })
    // }

    // useEffect (() => {
    //     getCafeList()
    // }, [], 

    //  );

    // const places = [];





    //  const handleSelect = async (value) => {
    //     const locationResults = await geocodeByAddress(value);
    //     const latlng = await getLatLng(locationResults[0]);
    //    setCoordinates(latlng);
    //    setAddress(value);
    //  }
    return (
        <section>
            <PlacesNearMe/>

            {/* <div>
            <div>
                     <PlacesAutoComplete value={address} onChange={setAddress} onSelect={handleSelect}>
                         {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                        <div>
                            <p>Latitude: {coordinates.lat}</p>
                            <p>Longitude: {coordinates.lng}</p>
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

            </div> */}

    
            
        </section>
    )
}

export default StoreList
