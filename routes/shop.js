const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

let controllerfile=require('../Controller/Products.js');

router.get('/',controllerfile.getslash );

module.exports = router;
