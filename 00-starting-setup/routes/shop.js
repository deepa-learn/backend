

const express = require('express');

let controllerfile=require('../Controller/products.js');

const router = express.Router();

router.get('/',controllerfile.getslash);

module.exports = router;
