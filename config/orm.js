const connection = require("./connection")
const orm = require("/connection.js")


var orm = {
   selecAll: function (tableName, cb) {
      const query = "SELECT * FROM" + tableName + ";"
      connection.query(query, (err, result) => {
         if (err) throw err
         cb(result)
      })
   },
   insertOne: function (burgers_name, devoured, cb) {
      const query = "INSERT INTO burgers (burgers_name, devoured) VALUES " + (burgers_name, devoured)
      connection.query(query, (err, result) => {
         if (err) throw err
         cb(result)
      })
   },
   updateOne: function (tableName, column, condition, value, cb) {
      const query = `UPDATE ${tableName} SET ${column} = ${condition} WHERE id=${value}`
      connection.query(query, (err, result) => {
         if (err) throw err
         cb(result)
      })
   }
}

module.exports = orm