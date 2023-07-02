const { salesModel } = require('../models');
// const { validateNewSale } = require('./validations/validationInputValues');

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
//   const error = validateNewSale(salesData);
//   if (error) {
//  return { status: 'INVALID_VALUE',
//    data: { message: '"name" length must be at least 5 characters long' } }; 
// }

  // if (!salesData.name) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };

  const newProduct = await salesModel.insert(salesData);
  return { status: 'CREATED', data: newProduct };
};

module.exports = {
  getAll,
  getById,
  insert,
};