const { salesModel } = require('../models');

const getAll = async () => {
  const allSales = await salesModel.findAll();
  return { status: 'SUCCESSFUL', data: allSales };
};

const getById = async (id) => {
  const salesById = await salesModel.findById(id);
  if (salesById.length < 1) return { status: 'NOT_FOUND', data: { message: 'Sale not found' } };
  return { status: 'SUCCESSFUL', data: salesById };
};

module.exports = {
  getAll,
  getById,
};