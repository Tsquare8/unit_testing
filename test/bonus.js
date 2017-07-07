var bonus = require('../bonus');
var chai = require('chai');
var expect = chai.expect;

describe('bonus()', function() {
    context('when bill is 24.66 plus 20% tip', function() {
      it('returns number rounded up to 30', function() {

        expect(bonus(24.66, 0.20)).to.equal(30);

      });
    });
  });

  describe('bonus()', function() {
      context('when bill is 24.66 plus 20% tip', function() {
        it('returns number rounded up to 30', function() {

          expect(bonus(153.25, 0.20)).to.equal(184);

        });
      });
    });
