const Joi = require('joi');

const addProductSchema = Joi.object({
  name: Joi.string().min(5).required(),
});

const addSaleSchema = Joi.object({
  name: Joi.string().min(5),
});

module.exports = { addProductSchema, addSaleSchema };