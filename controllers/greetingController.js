const fs = require('fs');

const create = (req, res) => {
  const day = req.body.day;
  const greeting = req.body.greeting;

  fs.readFile('database.txt', (err, data) => {
    if (err) throw err;

    const greetings = data.toString().split('\n');
    greetings[day] = greeting;

    const newContent = greetings.join('\n');

    fs.writeFile('database.txt', newContent, function (err) {
      if (err) throw err;
      console.log('Updated!');
      res.redirect('/');
    });
  });
}

module.exports = {
  create
};
