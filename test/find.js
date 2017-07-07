var find = require('../find');
var chai = require('chai');
var expect = chai.expect;

describe('find()', function() {
    context('enter [2, 16, 56, 24]', function() {
      it('returns 24', function() {


        expect(find([2, 16, 56, 24], 24)).to.deep.equal(3);
      });
    });
  });
