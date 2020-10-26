import React, {useState, useEffect, } from 'react';
import {connect} from 'react-redux';
import {getCoordinates} from '../../actions/getCoordinates';
import { GoogleMap, LoadScript, useLoadScript, Marker, InfoWindow } from '@react-google-maps/api';
import mapStyle from'./mapStyle';
import './map.scss'

function Map({props, coordinateProps, getCoordinates}) {
const libraries = ['places'];
const mapContainerStyle = {
    width: '100%',
    height:'300px',
}

const center = {
    lat: coordinateProps.lat,
    lng: coordinateProps.lng,
  };

  const options = {
      styles: mapStyle,
  }

const {isLoaded, loadError} = useLoadScript({
    googleMapsApiKey: "AIzaSyAoxLHGoMhAIczJRhM0jRRQwhGR4FVSBzE",
    libraries,
})

    if (loadError) return "Error Loading Map";
    if (!isLoaded) return "Loading Map"
    return (
        <div className="map">
            <h2>Drip Drop</h2>
            <GoogleMap 
            mapContainerStyle={mapContainerStyle} 
            zoom={15} 
            center={center} 
            options={options}>
            <Marker position={center}/>
            </GoogleMap>
        </div>
        )
}

const mapStateToProps = state => ({
    coordinateProps: state.coordinateState
});

export default connect(mapStateToProps, {getCoordinates})(Map)
