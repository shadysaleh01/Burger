const orm = require("../config/orm")


const burger = {
   selectAll: function (cb) {
      orm.selectAll("burger", function (res) {
         cb(res)
      })
   },



}