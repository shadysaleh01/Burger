const express = require("express")
const router = express.Router()
const burger = require("../models/burger.js")

router.get("/", (req, res) => {
   burger.selectAll((data) => {
      let hbsObject = {
         burgers: data
      }
      console.log(hbsObject)
      res.render("index", hbsObject)
   })
})

router.post("/api/burgers", (req, res) => {
   const burgerName = req.body.burger_name
   console.log(burgerName)
   burger.insertOne("burger_name", burgerName, (result) => {
      res.json({ id: result.insertId })
   })
})

router.put("/api/burgers/:id", (req, res) => {
   let id = req.params.id
   burger.updateOne(id, (result) => {
      if (result.changedRows == 0) {
         // If no rows were changed, then the ID must not exist, so 404
         return res.status(404).end();
      } else {
         res.status(200).end();
      }
   })
})
router.delete("/api/burgers/:id", function (req, res) {
   var condition = "id = " + req.params.id;

   cat.delete(condition, function (result) {
      if (result.affectedRows == 0) {
         // If no rows were changed, then the ID must not exist, so 404
         return res.status(404).end();
      } else {
         res.status(200).end();
      }
   });
})

module.exports = router