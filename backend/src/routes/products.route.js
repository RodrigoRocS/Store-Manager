const route = require('express').Router();
const { productController } = require('../controllers');

route.get('/', productController.allProducts);
route.get('/:id', productController.productById);
route.post('/', productController.insertProduct);
route.put('/:id', productController.updateProduct);

module.exports = route;