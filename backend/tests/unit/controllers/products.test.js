const chai = require('chai');
const sinon = require('sinon');
const sinonChai = require('sinon-chai');

const { expect } = chai;
chai.use(sinonChai);

const { productService } = require('../../../src/services');
const { productController } = require('../../../src/controllers');
const { findSuccessful, findSuccessfulId } = require('../mocks/mocks.products');

describe('Products controller tests', function () {
  it('Should show all products list', async function () {
    sinon.stub(productService, 'getAll').resolves(findSuccessful);
    const req = {};
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const { data } = findSuccessful;

    await productController.allProducts(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(data);
  });

  it('Should show a product by id', async function () {
    sinon.stub(productService, 'getById').resolves(findSuccessfulId);
    const req = {
      params: { id: 1 },
    };
    const res = {
      status: sinon.stub().returnsThis(),
      json: sinon.stub(),
    };

    const { data } = findSuccessfulId;

    await productController.productById(req, res);
    expect(res.status).to.have.been.calledWith(200);
    expect(res.json).to.have.been.calledWith(data);
  });

  afterEach(function () {
    sinon.restore();
  });
});