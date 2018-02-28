const fs = require('fs');
const pgp = require('pg-promise')();
const DBURL = process.env.DATABASE_URL || 'http://localhost:5432';

// const create = (req, res) => {
//   const day = req.body.day;
//   const greeting = req.body.greeting;
//
//   fs.readFile('database.txt', (err, data) => {
//     if (err) throw err;
//
//     const greetings = data.toString().split('\n');
//     greetings[day] = greeting;
//
//     const newContent = greetings.join('\n');
//
//     fs.writeFile('database.txt', newContent, function (err) {
//       if (err) throw err;
//       console.log('Updated!');
//       res.redirect('/');
//     });
//   });
// }

const create = (req, res) => {
  const day = req.body.day;
  const greeting = req.body.greeting;

  const cn = {
      url: DBURL,
      database: 'postgresql-cubed-33063'
  };
  const db = pgp(cn);

  db.none(`INSERT INTO greetings(day, body) VALUES(${day}, '${greeting}')`)
    .then(() => {
        console.log('Success');
        res.redirect('/');
    })
    .catch(error => {
        console.log('ERROR:', error);
    });

}

module.exports = {
  create
};
