let product = require('../model/product.js');
module.exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true
  });
};

module.exports.postAddProduct = (req, res, next) => {
  let prod = new product(req.body.title);
  prod.save();
  // products.push({ title: req.body.title });
  res.redirect('/');
};

module.exports.getslash = (req, res, next) => {
  product.fetchAll((products) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};
