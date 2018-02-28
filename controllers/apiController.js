const fs = require('fs');
const rp = require('request-promise');
const request = require('request');
const owmAPI = process.env.OPEN_WEATHER_MAP_KEY;
const dataProcessor = require('../lib/dataProcessor');

const pgp = require('pg-promise')();


// const showGreetings = (req, res) => {
//   fs.readFile('database.txt', (err,data) => {
//     const greetings = data.toString().split('\n');
//     res.json(greetings);
//   });
// }

const showGreetings = (req, res) => {
  const cn = {
      url: 'http://localhost:5432',
      database: 'postgresql-cubed-33063'
  };
  const db = pgp(process.env.DATABASE_URL || cn);
  const today = new Date();

  db.any(`SELECT body FROM greetings WHERE day = ${today.getDay()}`)
    .then(greeting=>{
      res.json(greeting);
    })
    .catch(error => {
        console.log('ERROR:', error); // print error;
    });

}

const showWeather = (req, res) => {
  const location = req.params.location;
  console.log(location);

  // This is the callback way request(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${owmAPI}`, function (error, response, body) {
  //   const processedData = dataProcessor.processWeatherData(JSON.parse(body));
  //   request(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${owmAPI}`, function (error, response, body) {
  //     processedData.forecast = dataProcessor.processForecastData(JSON.parse(body));
  //     res.json(processedData);
  //   });
  // });

  rp(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${owmAPI}`)
  .then(rawWeather=>{
    return dataProcessor.processWeatherData(JSON.parse(rawWeather));
  })
  .then(processedData => {
    rp(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${owmAPI}`)
    .then(rawForcast=>{
      processedData.forecast = dataProcessor.processForecastData(JSON.parse(rawForcast));
      res.json(processedData);
    })
  })
}

module.exports = {
  showGreetings,
  showWeather
};
