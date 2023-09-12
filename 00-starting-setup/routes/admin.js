

const express = require('express');
const router = express.Router();

let controllerfile=require('../Controller/Products.js');

// /admin/add-product => GET
router.get('/add-product', controllerfile.getaddprod );

// /admin/add-product => POST
router.post('/add-product', controllerfile.postaddprod);

module.exports=router;
