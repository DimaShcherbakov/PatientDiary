const express = require("express");
const jwt = require("jsonwebtoken")
const mysql = require("mysql");
const bodyParser = require("body-parser");
const multer = require("multer");
// const path = require("path")

const app = express();
const port = 5000;

// const storage = multer.diskStorage({
//   destination: './public/uploads/',
//   filename: function(req, file, cb){
//     cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
//   }
// });

const upload = multer({
  dest: 'uploads/'
})

// const upload = multer({
//   storage: storage
// }).single('avatar');

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "bd"
});
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(multer().array())
// app.set('view image', 'ejs')
// POST to add data in form
// INSERT INTO `registration_info` (`id`, `first_name`, `last_name`, `birthday_date`, `email`, `password`)
// VALUES (NULL, 'Кирилл', 'Черкалов', '12/04/1998', 'kirill@mail.ru', 'kirill');
connection.connect(err => {
  if (err) {
    throw err;
  }
  console.log("Connected to database");
});
global.connection = connection;
app.set("port", process.env.port || port);
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});

app.post("/api/posts", verifyToken, (req, res) => {
  jwt.verify(req.token, 'secretkey', (err, authData) => {
    if (err) {
      res.sendStatus(403)
    } else {
      res.json({
        success: true,
        authData
    })
    }
  })
})
function verifyToken (req, res, next){
  const bearerHeader = req.headers['authorization']
  if (typeof bearerHeader !== 'undefined') {
    const bearer = bearerHeader.split(" ");
    const bearerToken = bearer[1];
    req.token = bearerToken;
    next()
  } else {
    res.sendStatus(403)
  }
}
app.post("/login", (req, res) => { 
  const user = {
    email: req.body.email,
    pas: req.body.password
  }
  const query = `SELECT email, password FROM registration_info WHERE email = ? `;
  connection.query(query, [user.email], (err, rows, fields) => {
    if (user.email === rows[0].email) {
      if (user.pas === rows[0].password) {
        jwt.sign({user}, 'secretkey', { expiresIn: '20h' }, (err, token) => {
          res.json({
            token
          })
        });
      }
    } else {
        res.status(400)
    }
  });
});
app.post("/register", (req, res) => {
  const firstName = req.body.firstName;
  const lastName = req.body.lastName;
  const thirdName = req.body.thirdName;
  const brthDay = req.body.brthDay;
  const position = req.body.position;
  const telephone = req.body.telephone;
  const email = req.body.email;
  const pas = req.body.pas;
  const query = `SELECT email FROM registration_info WHERE email = ?`
  connection.query(query,[email],(err, rows, fields) => {
    if (rows[0].email !== email) {
      const query2 = `INSERT INTO registration_info (id, first_name, last_name,third_name,birthday_date,position,telephone, email, password)
                        VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?)`
      connection.query(query2,[firstName, lastName, thirdName, brthDay,telephone, position, email, pas]), (err, rows, fields) => {
        res.json(rows)
      }
    } else {
      res.status(400).json({message: 'Пользователь уже есть'})
    }
  })
})
app.post("/upload", (req, res) => {
  console.log(req.body)
  res.json({
    success: "OK"
  })
  // upload(req, res, (err) => {
  //   if (err) {
  //     res.json({
  //       msg: "Error"
  //     })
  //   } else {
  //     console.log(req.file)
  //   }
  // }) 
})
