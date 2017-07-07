var reverse = require('../palindrome');
var chai = require('chai');
var expect = chai.expect;

describe('reverse()', function() {
    context('when palindrome is hannah', function() {
      it('returns true', function() {

        var word = reverse("hannah");
        expect(word).to.equal(true);

      });
    });
  });

  describe('reverse()', function() {
      context('when palindrome is frank', function() {
        it('returns false', function() {

          var word = reverse("frank");
          expect(word).to.equal(false);

        });
      });
    });
