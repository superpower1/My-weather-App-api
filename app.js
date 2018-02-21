const express = require('express');
const app = express();
const apiController = require('./controllers/apiController');

const PORT = 3001;

app.set('views', './views');
app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', (req, res) => res.render('index'));
app.get('/api/places', apiController.showPlaces);

app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
})
