const orm = require("../config/orm.js")


const burger = {
   selectAll: function (cb) {
      orm.selectAll("burger", function (res) {
         cb(res)
      })
   },
   insertOne: function (column, value, cb) {
      orm.insertOne("burger", column, value, function (res) {
         cb(res)
      })
   },
   updateOne: function (id, cb) {
      orm.updateOne("burger", "devoured", true, id, function (res) {
         cb(res)
      })
   }
}

module.exports = burger