const { productsModel } = require('../models');

const getAll = async () => {
  const allProducts = await productsModel.findAll();
  return { status: 'SUCCESSFUL', data: allProducts };
};

const getById = async (id) => {
  const productById = await productsModel.findById(id);
  if (!productById) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: productById };
};

module.exports = {
  getAll,
  getById,
};