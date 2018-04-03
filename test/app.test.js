const proxyquire = require('proxyquire').noPreserveCache();
const chai = require('chai');
const chaiAsPromised = require('chai-as-promised');
const fs = require('fs');

chai.use(chaiAsPromised);
const should = chai.should();

describe('idope', () => {
  const noPeersHtml = fs.readFileSync('./test/resources/nopeers.html');
  const html = fs.readFileSync('./test/resources/raw.html');
  const errorStub = {
    request: (options, callback) => {
      process.nextTick(() => callback(new Error('Some error'), null, null));
    }
  };
  const okStub = {
    request: (options, callback) => {
      process.nextTick(() => callback(null, null, html));
    }
  };
  const emptyStub = {
    request: (options, callback) => {
      process.nextTick(() => callback(null, null, noPeersHtml));
    }
  };

  it('should resolve with results', async () => {
    // Given
    const idope = proxyquire('../app', okStub);
    // When
    const results = await idope.search('Ubuntu');
    const first = results[0];
    // Then
    results.should.have.lengthOf(10);
    first.should.have.property('name');
    first.should.have.property('magnet');
    first.should.have.property('peers');
    first.should.have.property('seeds');
    first.should.have.property('size');
  });

  it('should exclude results with no peeers', async () => {
    // Given
    const idope = proxyquire('../app', emptyStub);
    // When
    const results = await idope.search('Ubuntu');
    // Then
    results.should.have.lengthOf(0);
  });

  it('should reject on request error', () => {
    // Given
    const idope = proxyquire('../app', errorStub);
    // When
    const promise = idope.search('Ubuntu');
    // Then
    promise.should.be.rejectedWith(Error);
  });
});
