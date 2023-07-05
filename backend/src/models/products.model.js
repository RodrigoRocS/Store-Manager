const conn = require('./connection');

const findById = async (productId) => {
  const [[product]] = await conn.execute(
    'SELECT * FROM products WHERE id = ?',
    [productId],
  );
  return product;
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

const update = async ({ id, productData }) => conn.execute(
    'UPDATE products SET name = ? WHERE id = ?',
    [productData.name, id],
  );

const deleteProduct = async (id) => conn.execute(
    'DELETE FROM products WHERE id = ?',
    [id],
  );

module.exports = {
  findById,
  findAll,
  insert,
  update,
  deleteProduct,
};