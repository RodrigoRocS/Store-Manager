const conn = require('./connection');

const findById = async (productId) => {
  const [[product]] = await conn.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return (product);
};

const findAll = async () => {
const [products] = await conn.execute('SELECT * FROM products');
return products; 
};

module.exports = {
  findById,
  findAll,
};