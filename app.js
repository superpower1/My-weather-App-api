const express = require('express');
const app = express();
const apiController = require('./controllers/apiController');
const homeController = require('./controllers/homeController');
const greetingController = require('./controllers/greetingController');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3001;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(cors());

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies

app.get('/', homeController);
app.get('/api/greetings', apiController.showGreetings);
app.get('/api/weather/:location', apiController.showWeather);

app.post('/greeting', greetingController.create);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
