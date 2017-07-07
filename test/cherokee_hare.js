var finalPop = require('../cherokee_hare');
var chai = require('chai');
var expect = chai.expect;

describe('finalPop()', function() {
    context('final poulation of cherokee hare', function() {
      it('returns final populaton is 363', function() {

        // var population = ;
        expect(finalPop(0.25, 12, 25)).to.equal(363);
      });
    });
  });
