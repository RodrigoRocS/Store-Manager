const { addProductSchema, addSalesSchema } = require('./schemas');

const validateNewProduct = ({ name }) => {
  const { error } = addProductSchema.validate({ name });
  if (error) return { status: 'INVALID_VALUE', message: error.message };
};

const validateNewSale = (sale) => {
  const { error } = addSalesSchema.validate(sale);
  if (error) {
    if (error.details.some((detail) => detail.type === 'any.required')) {
      return { status: 'BAD_REQUEST', message: error.message };
    } if (error.details.some((detail) => detail.type === 'number.min')) {
      return { status: 'INVALID_VALUE', message: error.message };
    }
  }
};

module.exports = {
  validateNewProduct,
  validateNewSale,
};