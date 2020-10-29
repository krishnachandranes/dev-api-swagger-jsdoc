
var db = require('../../config/db');
const getUsers = (request, response) => {
 db.query('SELECT * FROM flood.users ORDER BY user_id ASC', (error, results) => {
   if (error) {
     throw error
   }
   response.status(200).json(results.rows)
 })
}

const getRoles = (request, response) => {
 db.query('SELECT * FROM flood.role ORDER BY role_id ASC', (error, results) => {
   if (error) {
     throw error
   }
   response.status(200).json(results.rows)
 })
}

module.exports = {
 getUsers,
 getRoles
}