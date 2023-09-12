
const express = require('express');

const router = express.Router();

let controllerfile=require('../Controller/Products.js');

router.get('/',controllerfile.getslash );

module.exports = router;
