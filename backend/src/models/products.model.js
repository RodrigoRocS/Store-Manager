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

const insert = async (productData) => {
  const [{ insertId }] = await conn.execute(
'INSERT INTO products (name) VALUE (?);',
  [productData],
);
  return insertId;
};

module.exports = {
  findById,
  findAll,
  insert,
};