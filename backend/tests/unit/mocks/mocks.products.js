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

const findSuccessful = { status: 'SUCCESSFUL', data: allProducts };
const findSuccessfulId = { status: 'SUCCESSFUL', data: productById };

module.exports = { findSuccessful, findSuccessfulId };