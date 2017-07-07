var highestMountain = require('../mountain');
var chai = require('chai');
var expect = chai.expect;

describe('highestMountain()', function() {
    context('mountain heights]', function() {
      it('returns 29029 as highest mountain', function() {

        var mountain = highestMountain([27940, 24659, 26864, 28169, 29029, 25659, 28251, 27833, 25095, 26795]);
        expect(mountain).to.equal(29029);
      });
    });
  });

  describe('highestMountain()', function() {
      context('mountain heights', function() {
        it('returns 29029 as highest mountain', function() {

          var mountain = highestMountain([28089, 30355, 26864, 25987, 29029, 30101, 28251, 27833, 25095, 26795]);
          expect(mountain).to.equal(30355);
        });
      });
    });
