const { salesService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allSales = async (_req, res) => {
  const { status, data } = await salesService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const salesById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await salesService.getById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const insertSale = async (req, res) => {
  const salesData = req.body;
  const { status, data } = await salesService.insert(salesData);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allSales,
  salesById,
  insertSale,
};