// database.js
require('dotenv').config();
 // Memuat variabel dari file .env
const mysql = require('mysql2');

// Membuat koneksi ke database MySQL
const connection = mysql.createConnection({
  host: process.env.DB_HOST, 
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
});

// Menghubungkan ke database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    return;
  }
  console.log('Connected to the database as id ' + connection.threadId);
});

module.exports = connection;