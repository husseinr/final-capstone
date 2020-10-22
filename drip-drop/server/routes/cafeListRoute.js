const express = require("express");
const router = express.Router();
const cafes = require('../data/cafeList.json');
const bodyParser = require('body-parser')
const fs = require('fs');
router.use(bodyParser.json());


router.get("/", (_req, res) => {res.json(cafes);});

router.get('/:city', (req, res) => {
    const selected = cafes.filter(cafe => cafe.city === req.params.city);
    console.log(req)
    res.json({
        selected
    })
  })

  router.get('/:city/:cafe', (req, res) => {
    const selectedMenu = cafes.filter(cafe => cafe.city === req.params.city)
    .filter(cafe => cafe.cafeName === req.params.cafe);
    console.log(selectedMenu.menu)
    res.json({
    menu: selectedMenu[0].menu
    })
  })

module.exports = router; 