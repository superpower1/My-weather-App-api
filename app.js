const express = require('express');
const app = express();
const apiController = require('./controllers/apiController');
const placesController = require('./controllers/placesController');
const bodyParser = require('body-parser');

const PORT = 3001;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.use(bodyParser.json());       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
}));
app.use(express.json());       // to support JSON-encoded bodies
app.use(express.urlencoded()); // to support URL-encoded bodies 

app.get('/', (req, res) => res.render('index'));
app.get('/api/places', apiController.showPlaces);

app.post('/places', placesController.create);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
