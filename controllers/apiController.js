const fs = require('fs');
const request = require('request');
const owmAPI = process.env.OPEN_WEATHER_MAP_KEY;

const showGreetings = (req, res) => {
  fs.readFile('database.txt', (err,data) => {
    const greetings = data.toString().split('\n');
    res.json(greetings);
  });
}

const showWeather = (req, res) => {
  const location = req.params.location;
  console.log(location);
  request(`http://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${owmAPI}`, function (error, response, body) {
    res.json(JSON.parse(body));
  });
}

const showForecast = (req, res) => {
  const location = req.params.location;
  console.log(location);
  request(`http://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${owmAPI}`, function (error, response, body) {
    res.json(JSON.parse(body));
  });
}

module.exports = {
  showGreetings,
  showWeather,
  showForecast
};
