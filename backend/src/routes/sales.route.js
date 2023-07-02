const route = require('express').Router();
const { salesController } = require('../controllers');

route.get('/', salesController.allSales);
route.get('/:id', salesController.salesById);
route.post('/', salesController.insertSale);

module.exports = route;