const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { productsModel } = require('../../../src/models');
const { 
  productById, allProducts, productIdFromDB, insertProduct, idFromModel, updateModelReturn, 
} = require('../mocks/mocks.products');

describe('Products models tests', function () {
  it('Should return a product by id', async function () {
    sinon.stub(connection, 'execute').resolves([[productById]]);

    const id = 1;
    const product = await productsModel.findById(id);

    expect(product).to.be.an('object');
    expect(product).to.be.deep.equal(productById);
  });

  it('Should return all products', async function () {
    sinon.stub(connection, 'execute').resolves([allProducts]);

    const product = await productsModel.findAll();

    expect(product).to.be.an('array');
    expect(product).to.be.deep.equal(allProducts);
  });

  it('Should insert a product in db', async function () {
    sinon.stub(connection, 'execute').resolves([productIdFromDB]);

    const insertId = await productsModel.insert(insertProduct);

    expect(insertId).to.be.an('number');
    expect(insertId).to.equal(idFromModel);
  });

  it('Should update a product in db', async function () {
    sinon.stub(connection, 'execute').resolves(updateModelReturn);

    const result = await productsModel.update({ id: '1', productData: { name: 'Martelo do Batman' } });

    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('object');
    expect(result[0].affectedRows).to.be.equal(1);
    expect(result[0].changedRows).to.be.equal(1);
  });

  it('Should delete a product in db', async function () {
    sinon.stub(connection, 'execute').resolves(updateModelReturn);

    const id = 1;

    const result = await productsModel.deleteProduct(id);

    expect(result).to.be.an('array');
    expect(result[0]).to.be.an('object');
    expect(result[0].affectedRows).to.be.equal(1);
    expect(result[0].changedRows).to.be.equal(1);
  });

  afterEach(function () {
    sinon.restore();
  });
});