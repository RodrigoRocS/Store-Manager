const conn = require('./connection');

const findById = async (id) => {
  const [sale] = await conn.execute(
    `SELECT S.date, SP.product_id as productId, SP.quantity 
    FROM sales AS S
    INNER JOIN sales_products AS SP ON S.id = SP.sale_id
    WHERE SP.sale_id = ?`,
    [id],
  );
  
  return sale;
};

const findAll = async () => {
const [sales] = await conn.execute(`SELECT SP.sale_id as saleId,
S.date, SP.product_id as productId, SP.quantity 
FROM sales as S
INNER JOIN sales_products AS SP WHERE S.id = SP.sale_id;`);
return sales; 
};

module.exports = {
  findById,
  findAll,
};