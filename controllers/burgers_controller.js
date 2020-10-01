const express = require("express")
const router = express.Router()
const burger = require("../models/burger.js")

router.get("/", (req, res) => {
   burger.selectAll((data) => {
      let hbsObject = {
         burger: data
      }
      res.render("index", hbsObject)
   })
})

router.post("/api/burger", (req, res) => {
   burger.insertOne(["burger", "devoured"], [req.body.burger, req.body.devoured], (result) => {
      res.json({ id: result.insertId })
   })
})

router.put("/api/burger/:id", (req, res) => {
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

module.exports = router