const request = require("request");
const yargs = require("yargs");

const weather = require('./weather/weather')
const geocode = require('./geocode/geocode')

const argv = yargs
  .options({
    a: {
      demand: true,
      alias: 'address',
      describe: 'Address to fetch weather for',
      string: true
    }
  })
  .help()
  .alias('help', 'h')
  .argv;

geocode.geocodeAddress(argv.a, (errorMessage, results) => {
  if(errorMessage) {
    console.log(errorMessage);
  } else {
    // console.log(JSON.stringify(results, undefined, 2));
    weather.getWeather(results.latitude, results.longitude, (errorMessage, result) => {
      if(errorMessage) {
        console.log(errorMessage);
      } else {
        console.log(result.temperature);
      }
    });

  }
});

