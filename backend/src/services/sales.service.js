const { salesModel, productsModel } = require('../models');
const { validateNewSale } = require('./validations/validationInputValues');

const getAll = async () => {
  const allSales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: allSales };
};

const getById = async (id) => {
  const salesById = await salesModel.findById(id);
  if (salesById.length < 1) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESSFUL', data: salesById };
};

const insert = async (salesData) => {
  const error = validateNewSale(salesData);
  if (error) {
 return { status: error.status,
   data: { message: error.message } }; 
}

const verifyIdPromises = salesData.map((e) => productsModel.findById(e.productId));
const verifyIds = await Promise.all(verifyIdPromises);
if (verifyIds.includes(undefined)) {
  return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
}

  const newProduct = await salesModel.insert(salesData);
  return { status: 'CREATED', data: newProduct };
};

module.exports = {
  getAll,
  getById,
  insert,
};