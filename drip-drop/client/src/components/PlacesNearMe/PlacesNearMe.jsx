import React, {useState, useEffect, } from 'react';
import axios from 'axios';
import {connect} from 'react-redux';
import {getCoordinates} from '../../actions/getCoordinates';
import {getCafe} from '../../actions/getCafe';
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

     let filteredCafes = cafes.filter(place => place.name !== "Tim Hortons" && place.name !=="Starbucks" && place.name !== "McDonald's")

    return (

        <section className="location-section">
                <div className="location-section__search">
                    <div className="location-section__search-message">
                        <p className="location-section__search-message-slogan">Find Your Perfect Cup</p>
                        <p className="location-section__search-message-action">Search for a Cafe Near You</p>
                    </div>

                     <PlacesAutoComplete value={address} onChange={setAddress} onSelect={handleSelect}>
                         {({getInputProps, suggestions, getSuggestionItemProps, loading}) => (
                        <div className="location-section__search-input">
                            <div className="location-section__search-input-field">
                                <input className="location-section__search-input-field-bar" {...getInputProps({placeholder: "what's your address"})}/>
                            </div>

                            <div className="location-section__search-input-suggestions">
                                {loading ? <p className="location-section__search-input-suggestions-loading">... loading cafes</p> : null}

                                {suggestions.map((suggestion) => {
                                   return <p className="location-section__search-input-suggestions-results" {...getSuggestionItemProps (suggestion)}>{suggestion.description}</p> 
                                })}
                            </div>
                        </div>
                         )}

                     </PlacesAutoComplete>
                </div>

                <div className="location-section__cards">
                    {filteredCafes && filteredCafes.map(cafe => {
                        return   <CafeCards
                        name={cafe.name}
                        address={cafe.vicinity}
                        key={cafe.id}
                        image={cafe.icon}
                        lat2={cafe.geometry.location.lat}
                        lng2={cafe.geometry.location.lng}
                        yourCoordinates={coordinates}
                        rating={cafe.rating}
                        photoRef={cafe.photos && cafe.photos[0].photo_reference}
                        getCoord={props.getCoordinates}
                        getCafe={props.getCafe}/>
                    })}
                </div>
        </section>
    )
}

const mapStateToProps = state => ({
    coordinateProps: state.coordinateState
});

export default connect(mapStateToProps, {getCoordinates, getCafe} )(PlacesNearMe)