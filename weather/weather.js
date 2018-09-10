const request = require("request");

var getWeather = (lat, lng, callback) => {
  request(
    {
      url: `https://api.darksky.net/forecast/59b2b182cfdf139d19c3cd51106589b3/${lat},${lng}`,
      json: true
    },
    (error, response, body) => {
      if (!error && response.statusCode === 200) {
        callback(undefined, {
          temperature: body.currently.temperature
        });
      } else {
        callback("Unable to fetch data from forecast.io");
      }
    }
  );
};

module.exports.getWeather = getWeather;
