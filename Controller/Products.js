const products = [];
module.exports.getaddprod=(req, res, next) => {
    res.render('add-product', {
      pageTitle: 'Add Product',
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  };

  module.exports.postaddprod=(req, res, next) => {
    products.push({ title: req.body.title });
    res.redirect('/');
  };


  module.exports.getslash=(req, res, next) => {
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  };