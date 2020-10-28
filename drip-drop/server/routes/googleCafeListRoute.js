const express = require("express");
const router = express.Router();
const bodyParser = require('body-parser')
const fs = require('fs');
router.use(bodyParser.json());
const axios = require('axios');


router.get("/", (req, res) => { 
const places = [];
const radius = 5 * 1000;

    const url =
  'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=' +
    req.query.lat+
  ',' +
    req.query.lng +
  '&radius=' +
    radius +
 '&type=' +
    'cafe' +
  '&key=' +
  'AIzaSyAoxLHGoMhAIczJRhM0jRRQwhGR4FVSBzE';
    
    axios.
    get(url)

  .then(response => {
    for (let googlePlace of response.data.results) {
      var place = {};
      var myLat = googlePlace.geometry.location.lat;
      var myLong = googlePlace.geometry.location.lng;
      var coordinate = {
        latitude: myLat,
        longitude: myLong,
      };
      place['placeTypes'] = googlePlace.types;
      place['coordinate'] = coordinate;
      place['placeId'] = googlePlace.place_id;
      place['placeName'] = googlePlace.name;
    }


    places.push(place);
    res.send(response.data.results)
  })
  .catch(error => { 
    console.log(error);
  });

});


module.exports = router; 