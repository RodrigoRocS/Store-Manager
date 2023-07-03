const route = require('express').Router();
const { productController } = require('../controllers');

route.delete('/:id', productController.deleteProductById);
route.get('/', productController.allProducts);
route.get('/:id', productController.productById);
route.post('/', productController.insertProduct);
route.put('/:id', productController.updateProduct);

module.exports = route;