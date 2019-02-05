const express = require('express');
const mysql = require('mysql');
const app = express();

const port = 5000;

const connection = mysql.createConnection({
  host:'localhost',
  user:'root',
  password:'',
  database:'bd'
})
// POST to add data in form
// INSERT INTO `registration_info` (`id`, `first_name`, `last_name`, `birthday_date`, `email`, `password`) 
// VALUES (NULL, 'Кирилл', 'Черкалов', '12/04/1998', 'kirill@mail.ru', 'kirill');

connection.connect((err) => {
  if (err) {
      throw err;
  }
  console.log('Connected to database');
});
global.connection = connection;

app.set('port', process.env.port || port);

app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.get('/register/:id', (req,res) => {
  console.log(`Fetching with id: ${req.params.id}`)
  const id = req.params.id
  const queryStr = "SELECT * FROM registration_info WHERE id = ?"
  connection.query(queryStr,[id], (err, rows, fields) => {
    console.log(`I think we  fetched successfully`)
    res.json(rows)
  })
})
app.get('/', (req,res) => {
  res.send('Hello')
})