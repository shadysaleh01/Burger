const orm = require("../config/orm")


const burger = {
   selectAll: function (cb) {
      orm.selectAll("burger", function (res) {
         cb(res)
      })
   },
   insertOne: function (column, value, cb) {
      orm.insertOne("burger", column, value, cb, function (res) {
         cb(res)
      })
   }


}