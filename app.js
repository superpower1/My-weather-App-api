const express = require('express');
const app = express();
const apiController = require('./controllers/apiController');
const homeController = require('./controllers/homeController');
const greetingController = require('./controllers/greetingController');
const cors = require('cors');

const PORT = process.env.PORT || 3001;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));

app.get('/', homeController);
app.get('/api/greetings', apiController.showGreetings);
app.get('/api/weather/:location', apiController.showWeather);
app.get('/api/wash/:location', apiController.showWash);

app.post('/greeting', greetingController.create);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
