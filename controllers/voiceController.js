const VoiceRes = require('twilio').twiml.VoiceResponse;
const rp = require('request-promise');
const owmAPI = process.env.OPEN_WEATHER_MAP_KEY;
const dataProcessor = require('../lib/dataProcessor');

const apiController = require('./apiController');

const voiceResponse = (req, res) => {
  const twiml = new VoiceRes();
  const location = "melbourne";
  rp(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&units=metric&appid=${owmAPI}`)
  .then(rawForcast=>{
    const forecast = dataProcessor.processForecastData(JSON.parse(rawForcast));
    const tomorrowWeather = forecast[0].description;
    const tomorrowTemp = forecast[0].temp;
    twiml.say(`Hello, tomorrow's weather will be ${tomorrowWeather}, temprature is ${tomorrowTemp} celsius degree.`);

    res.type('text/xml');
    res.send(twiml.toString());
  })
}

module.exports = {
  voiceResponse
};
