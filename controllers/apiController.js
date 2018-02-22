const fs = require('fs');
const _ = require('lodash');

const showPlaces = (req, res) => {
  fs.readFile('database.txt', (err,buffer)=>{
    const places = buffer.toString().split('\n');
    const randomPlace = _.sample(places);
    res.json(randomPlace);
  });
}

module.exports = {
  showPlaces
};
