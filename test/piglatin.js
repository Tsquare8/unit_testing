var pigLatin = require('../piglatin');
var chai = require('chai');
var expect = chai.expect;

describe('pigLatin()', function() {
    context('when word is good', function() {
      it('returns oodgay', function() {

        expect(pigLatin("good")).to.equal("oodgay");

      });
    });
  });

  describe('pigLatin()', function() {
      context('when word is liberty', function() {
        it('returns ibertylay', function() {

          expect(pigLatin("liberty")).to.equal("ibertylay");

        });
      });
    });
