const express = require("express");
const router = express.Router();
const itemTypes = require('../data/mainItemTypes.json');
const bodyParser = require('body-parser')
const fs = require('fs');
router.use(bodyParser.json());


router.get("/", (_req, res) => {res.json(itemTypes);});

module.exports = router; 