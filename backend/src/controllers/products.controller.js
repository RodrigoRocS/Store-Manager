const { productService } = require('../services');
const mapStatusHTTP = require('../utils/mapStatusHTTP');

const allProducts = async (_req, res) => {
  const { status, data } = await productService.getAll();
  return res.status(mapStatusHTTP(status)).json(data);
};

const productById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.getById(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

const insertProduct = async (req, res) => {
  const productData = req.body;
  const { status, data } = await productService.insert(productData);
  return res.status(mapStatusHTTP(status)).json(data);
};

const updateProduct = async (req, res) => {
  const { id } = req.params;
  const productData = req.body;
  const { status, data } = await productService.update({ id, productData });
  console.log({ id, productData });
  return res.status(mapStatusHTTP(status)).json(data);
};

const deleteProductById = async (req, res) => {
  const { id } = req.params;
  const { status, data } = await productService.deleteProduct(id);
  return res.status(mapStatusHTTP(status)).json(data);
};

module.exports = {
  allProducts,
  productById,
  insertProduct,
  updateProduct,
  deleteProductById,
};