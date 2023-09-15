
const express = require('express');

let controllerfile=require('../Controller/products.js');

const router = express.Router();



// /admin/add-product => GET
router.get('/add-product',controllerfile.getAddProduct );

// /admin/add-product => POST
router.post('/add-product', controllerfile.postAddProduct);

module.exports=router;

