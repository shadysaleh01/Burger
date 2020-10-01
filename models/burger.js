const orm = require("../config/orm")


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
   updateOne: function (column, condition, value, cb) {
      orm.updateOne("burger", column, condition, value, function (res) {
         cb(res)
      })
   }
}

module.exports = burger