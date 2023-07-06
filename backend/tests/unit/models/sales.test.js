const { expect } = require('chai');
const sinon = require('sinon');
const connection = require('../../../src/models/connection');
const { salesModel } = require('../../../src/models');
const { saleByIdFromDB, allSalesFromDB, saleIdFromDB, saleId, insertSale } = require('../mocks/mocks.sales');

describe('Sales models tests', function () {
  it('Should return a sale by id in db', async function () {
    sinon.stub(connection, 'execute').resolves([[saleByIdFromDB]]);

    const id = 2;
    const sales = await salesModel.findById(id);

    expect(sales).to.be.an('array');
    expect(sales).to.be.deep.equal([saleByIdFromDB]);
  });

  it('Should return all sales in db', async function () {
    sinon.stub(connection, 'execute').resolves([allSalesFromDB]);

    const sales = await salesModel.findAll();

    expect(sales).to.be.an('array');
    expect(sales).to.be.deep.equal(allSalesFromDB);
  });

  it('Should insert a sale in db', async function () {
    sinon.stub(connection, 'execute').resolves([saleIdFromDB]);

    const insertId = await salesModel.insert(insertSale);

    expect(insertId.id).to.be.an('number');
    expect(insertId.id).to.equal(saleId);
  });
  afterEach(function () {
    sinon.restore();
  });
});