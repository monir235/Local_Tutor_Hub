const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

app.use(bodyParser.json());

// Database connection parameters
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '#sirajum@1234',
  database: 'siraj'
});

// Connect to MySQL
db.connect((err) => {
  if (err) {
    throw err;
  }
  console.log('MySQL Connected...');
});

// Create database (Run this once then you can comment it out or remove it)
app.get('/createdb', (req, res) => {
  let sql = 'CREATE DATABASE siraj2';
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send('Database created');
  });
});

// Create table
app.get('/createSignInTable', (req, res) => {
  let sql = 'CREATE TABLE signInMembers(id int AUTO_INCREMENT, email VARCHAR(255), password VARCHAR(255), PRIMARY KEY(id))';
  db.query(sql, (err) => {
    if (err) {
      throw err;
    }
    res.send('Sign in members table created');
  });
});

// Insert member
app.post('/register', (req, res) => {
  let member = {email: req.body.email, password: req.body.password};
  let sql = 'INSERT INTO signInMembers SET ?';
  let query = db.query(sql, member, (err) => {
    if (err) {
      throw err;
    }
    res.send('Member added');
  });
});

app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
