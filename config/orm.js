const connection = require("../config/connection.js")

var orm = {
   selectAll: function (tableName, cb) {
      const query = `SELECT * FROM ${tableName}`
      connection.query(query, (err, result) => {
         if (err) throw err
         cb(result)
      })
   },
   insertOne: function (tableName, column, value, cb) {
      const query = `INSERT INTO ${tableName} (${column}) VALUES ("${value}")`
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
   },
   delete: function (table, condition, cb) {
      const query = `DELETE FROM ${table} WHERE ${condition}`

      connection.query(query, function (err, result) {
         if (err) throw err

         cb(result);
      });
   }
}

module.exports = orm
A