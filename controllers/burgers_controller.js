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

