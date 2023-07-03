const { productsModel } = require('../models');
const { validateNewProduct } = require('./validations/validationInputValues');

const getAll = async () => {
  const allProducts = await productsModel.findAll();
  return { status: 'SUCCESSFUL', data: allProducts };
};

const getById = async (id) => {
  const productById = await productsModel.findById(id);
  if (!productById) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  return { status: 'SUCCESSFUL', data: productById };
};

const insert = async (productData) => {
  if (!productData.name) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  const error = validateNewProduct(productData);
  if (error) {
 return { status: 'INVALID_VALUE',
   data: { message: '"name" length must be at least 5 characters long' } }; 
}

  const newProduct = await productsModel.insert(productData.name);
  return { status: 'CREATED', data: { id: newProduct, name: productData.name } };
};

const update = async ({ id, productData }) => {
  const productById = await productsModel.findById(id);
  if (!productById) return { status: 'NOT_FOUND', data: { message: 'Product not found' } };
  if (!productData.name) return { status: 'BAD_REQUEST', data: { message: '"name" is required' } };
  const error = validateNewProduct(productData);
  if (error) {
 return { status: 'INVALID_VALUE',
   data: { message: '"name" length must be at least 5 characters long' } }; 
}

  const updateProduct = await productsModel.update({ id, productData });
  
  return { status: 'SUCCESSFUL', data: updateProduct };
};

module.exports = {
  getAll,
  getById,
  insert,
  update,
};