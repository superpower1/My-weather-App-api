const fs = require('fs');

const create = (req, res) => {
  const newPlace = req.body.place;
  fs.appendFile('database.txt', `\n${newPlace}`, function (err) {
    if (err) throw err;
    console.log('Saved!');
    res.redirect('/');
  });
}

module.exports = {
  create
};
