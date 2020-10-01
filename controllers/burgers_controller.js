const express = require("express")
const router = express.Router()
const burger = require("../models/burger")

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