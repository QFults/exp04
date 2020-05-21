const mysql = require('mysql2')

const db = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  user: 'root',
  password: '<your_password>',
  database: '<your_database>'
})

// Read data
// db.query('SELECT * FROM users', (err, data) => {
//   if (err) { console.log(err) }
//   console.log(data)
// })

// Create data
// db.query('INSERT INTO users SET ?', {
//   name: 'Jane Doe',
//   isBool: true,
//   age: 23
// }, (err, info) => {
//   if (err) { console.log(err) }
//   console.log(info)
// })

// Update data
// db.query('UPDATE users SET ? WHERE ?', [{ name: 'Hotdog' }, { age: 23 }], (err, info) => {
//   if (err) { console.log(err) }
//   console.log(info)
// })

// Delete data
// db.query('DELETE FROM users WHERE ?', { name: 'Hotdog' }, (err, info) => {
//   if (err) { console.log(err) }
//   console.log(info)
// })
