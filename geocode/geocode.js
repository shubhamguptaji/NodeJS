const request = require('request');

var geocodeAddress = (address, callback) => {
    
var encodeAddress  = encodeURIComponent(address);

request(
  {
    url:
      `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeAddress}`,
    json: true

  },
  (error, response, body) => {
    // console.log(JSON.stringify(body, undefined, 2));
    if(error) {
      callback('Unable to fetch data');
    } else if(body.status === 'ZERO_RESULTS') {
      callback('Invalid Address');
    }
    else if(body.status === 'OK') {
        callback(undefined, {
            address: body.results[0].formatted_address,
            latitude: body.results[0].geometry.location.lat,
            longitude: body.results[0].geometry.location.lng
        });

    }
  }
);

}


module.exports.geocodeAddress = geocodeAddress;

// 59b2b182cfdf139d19c3cd51106589b3