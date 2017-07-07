var containsVowel = require('../contains_vowels');
var chai = require('chai');
var expect = chai.expect;

describe('containsVowel()', function() {
    context('zebra has vowels', function() {
      it('returns true', function() {

        expect(containsVowel("zebra")).to.equal(true);
      });
    });
  });

  describe('containsVowel()', function() {
      context('lpjhh Amanda has vowels', function() {
        it('returns true', function() {

          expect(containsVowel("lpjhh Amanda")).to.equal(true);
        });
      });
    });

    describe('containsVowel()', function() {
        context('hmpf does not have vowels', function() {
          it('returns false', function() {

            expect(containsVowel("hmpf")).to.equal(false);
          });
        });
      });
