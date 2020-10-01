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

}

module.exports = orm