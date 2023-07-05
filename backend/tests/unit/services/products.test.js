const { expect } = require('chai');
const sinon = require('sinon');
const { productsModel } = require('../../../src/models');
const { allProducts, productById, insertProduct, idFromModel, updateModelReturn, deleteModelReturn } = require('../mocks/mocks.products');
const { productService } = require('../../../src/services');

describe('Products service tests', function () {
  it('Should return all products from model', async function () {
    sinon.stub(productsModel, 'findAll').resolves(allProducts[0]);

    const result = await productService.getAll();

    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(allProducts[0]);
  });

  it('Should return a product by id from model', async function () {
    sinon.stub(productsModel, 'findById').resolves(productById);

    const id = 1;

    const result = await productService.getById(id);

    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal(productById);
  });

  it('Should return a status "NOT_FOUND" when there is no ID in db', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);

    const id = 99;

    const result = await productService.getById(id);

    expect(result.status).to.equal('NOT_FOUND');
    expect(result.data).to.deep.equal({ message: 'Product not found' });
  });

  it('Should insert a product in db', async function () {
    sinon.stub(productsModel, 'insert').resolves(idFromModel);

    const result = await productService.insert(insertProduct);

    expect(result.status).to.equal('CREATED');
    expect(result.data).to.deep.equal({ id: idFromModel, name: insertProduct.name });
  });

  it('Should return "BAD_REQUEST" when there is no "name" propertie to insert', async function () {
    sinon.stub(productsModel, 'insert').resolves(undefined);

    const result = await productService.insert({});

    expect(result.status).to.equal('BAD_REQUEST');
    expect(result.data).to.deep.equal({ message: '"name" is required' });
  });

  it('Should return "INVALID_VALUE" when "name" propertie has less than 5 characters', async function () {
    sinon.stub(productsModel, 'insert').resolves(undefined);

    const result = await productService.insert({ name: 'aaaa' });

    expect(result.status).to.equal('INVALID_VALUE');
    expect(result.data).to.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });

  it('Should update a product in db', async function () {
    sinon.stub(productsModel, 'findById').resolves(productById);
    sinon.stub(productsModel, 'update').resolves(updateModelReturn);

    const result = await productService.update({ id: '1', productData: { name: 'Martelo do Batman' } });

    expect(result.status).to.equal('SUCCESSFUL');
    expect(result.data).to.deep.equal({ id: 1, name: 'Martelo do Batman' });
  });

  it('Should return a status "NOT_FOUND" when there is no ID in db to update', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
    sinon.stub(productsModel, 'update').resolves(undefined);

    const result = await productService.update({ id: '99', productData: { name: 'Martelo do Batman' } });

    expect(result.status).to.equal('NOT_FOUND');
    expect(result.data).to.deep.equal({ message: 'Product not found' });
  });

  it('Should return a status "BAD_REQUEST" when there is no "name" propertie to update', async function () {
    sinon.stub(productsModel, 'findById').resolves(productById);
    sinon.stub(productsModel, 'update').resolves(undefined);

    const result = await productService.update({ id: '1', productData: { } });

    expect(result.status).to.equal('BAD_REQUEST');
    expect(result.data).to.deep.equal({ message: '"name" is required' });
  });

  it('Should return "INVALID_VALUE" when "name" propertie has less than 5 characters in update', async function () {
    sinon.stub(productsModel, 'findById').resolves(productById);
    sinon.stub(productsModel, 'update').resolves(undefined);

    const result = await productService.update({ id: '1', productData: { name: 'aaaa' } });

    expect(result.status).to.equal('INVALID_VALUE');
    expect(result.data).to.deep.equal({ message: '"name" length must be at least 5 characters long' });
  });

  it('Should delete a product in db', async function () {
    sinon.stub(productsModel, 'findById').resolves(productById);
    sinon.stub(productsModel, 'deleteProduct').resolves(deleteModelReturn);

    const id = 1;

    const result = await productService.deleteProduct(id);

    expect(result.status).to.equal('NO_CONTENT');
    expect(result.data).to.deep.equal({ });
  });

  it('Should return a status "NOT_FOUND" when there is no ID in db to delete', async function () {
    sinon.stub(productsModel, 'findById').resolves(undefined);
    sinon.stub(productsModel, 'deleteProduct').resolves(undefined);

    const id = 99;

    const result = await productService.deleteProduct(id);

    expect(result.status).to.equal('NOT_FOUND');
    expect(result.data).to.deep.equal({ message: 'Product not found' });
  });

  afterEach(function () {
    sinon.restore();
  });
});