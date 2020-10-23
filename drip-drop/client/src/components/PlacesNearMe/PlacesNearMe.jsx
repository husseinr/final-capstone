import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import { useDispatch, Provider } from "react-redux";
import {Route, Switch, Link, useParams, useRouteMatch} from 'react-router-dom';
import PlacesAutoComplete, {geocodeByAddress, getLatLng} from 'react-places-autocomplete';
import { fetchRestaurantsByAddress } from "../../redux/DataActions/actions";

function PlacesNearMe(props) {
    let [cafes, setCafes] = useState([]);
    const [address, setAddress] = useState('');
    const [coordinates, setCoordinates] = useState({lat: null, lng: null});
    const radius = 5 * 1000;

    const { city, cafe } = useParams();

    // let getCafeList = () => {

    //     axios.
    //     get('/cafeSearch/', {
    //         params: {lat: coordinates.lat, lng: coordinates.lng}
    //     })
    //   .then(response => {
    //     places.push(response.data);
    //     console.log(places)
    //     console.log(coordinates.lat, coordinates.lng)
    //   })
    // }

    // useEffect (() => {
    //     getCafeList()
    // }, [], 

    //  );

     const handleSelect = async (value) => {
        const locationResults = await geocodeByAddress(value);
        const latlng = await getLatLng(locationResults[0]);
       setCoordinates(latlng);
       setAddress(value);
     }

    //  new


const places = [];



    axios.
    get('/cafeSearch/', {
        params: {lat: coordinates.lat, lng: coordinates.lng}
    })
  .then(response => {
    places.push(response.data);
    console.log(places[0])
    console.log(coordinates.lat, coordinates.lng)
    console.log(places[0].length)
  })


 

//   useEffect(async () => {
//     axios.
//     get('/cafeSearch/', {
//         params: {lat: coordinates.lat, lng: coordinates.lng}
//     })
//   .then(response => {
//     places.push(response.data);
//     console.log(places[0])
//     console.log(coordinates.lat, coordinates.lng)
//     console.log(places[0].length)
//     setCafes(response.data);
//   })

 

//   });
  


    


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
                    {places[0] && places[0].map((cafe) => (
                        console.log(cafe.name)
                    ))}
           </div>
      

            </div>
            
        </section>
    )
}

export default PlacesNearMe