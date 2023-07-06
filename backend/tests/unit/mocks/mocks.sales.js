const allSalesFromDB = [
  {
    saleId: 1,
    date: '2023-07-05T22:45:26.000Z',
    productId: 1,
    quantity: 5,
  },
  {
    saleId: 1,
    date: '2023-07-05T22:45:26.000Z',
    productId: 2,
    quantity: 10,
  },
  {
    saleId: 2,
    date: '2023-07-05T22:45:26.000Z',
    productId: 3,
    quantity: 15,
  },
];

const saleByIdFromDB = {
    date: '2023-07-05T22:45:26.000Z',
    productId: 3,
    quantity: 15,
  };

const saleIdFromDB = { insertId: 5 };

const saleId = 5;

const insertSale = [
  {
    productId: 1,
    quantity: 1,
  },
  {
    productId: 2,
    quantity: 5,
  },
];

module.exports = { allSalesFromDB, saleByIdFromDB, saleIdFromDB, saleId, insertSale };