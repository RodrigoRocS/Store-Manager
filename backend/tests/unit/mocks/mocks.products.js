const allProducts = [
  {
    id: 1,
    name: 'Martelo de Thor',
  },
  {
    id: 2,
    name: 'Traje de encolhimento',
  },
  {
    id: 3,
    name: 'Escudo do CapitÃ£o AmÃ©rica',
  },
];

const productById = { id: 1, name: 'Martelo de Thor' };

const productIdFromDB = { insertId: 5 };

const insertProduct = {
  name: 'ProdutoX',
};

const idFromModel = 5;

const updateProduct = {
  name: 'Martelo do Batman',
};

const updateModelReturn = [{
  fieldCount: 0,
  affectedRows: 1,
  insertId: 0,
  info: 'Rows matched: 1  Changed: 1  Warnings: 0',
  serverStatus: 2,
  warningStatus: 0,
  changedRows: 1,
}];

const deleteModelReturn = [{
    fieldCount: 0,
    affectedRows: 1,
    insertId: 0,
    info: '',
    serverStatus: 2,
    warningStatus: 0,
  }];

const findSuccessful = { status: 'SUCCESSFUL', data: allProducts };
const findSuccessfulId = { status: 'SUCCESSFUL', data: productById };

module.exports = { findSuccessful,
   findSuccessfulId,
productById,
allProducts,
productIdFromDB,
insertProduct,
idFromModel,
updateProduct,
updateModelReturn,
deleteModelReturn,
 };