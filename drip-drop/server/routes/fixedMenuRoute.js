const express = require("express");
const router = express.Router();
const menu = require('../data/fixedCafeMenu.json');
const bodyParser = require('body-parser')
const fs = require('fs');
router.use(bodyParser.json());


router.get("/", (_req, res) => {res.json(menu);});

module.exports = router; 