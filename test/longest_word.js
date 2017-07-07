var longestWord = require('../longest_word');
var chai = require('chai');
var expect = chai.expect;

describe('longestWord()', function() {
    context('enter how do you love me? let me count the ways', function() {
      it('returns count', function() {

        expect(longestWord("how do you love me? let me count the ways")).to.equal("count");

      });
    });
  });

  describe('longestWord()', function() {
      context('enter fool me once, shame on me. fool me twice, shame on heathcliff', function() {
        it('returns heathcliff', function() {

          expect(longestWord("fool me once, shame on me. fool me twice, shame on heathcliff")).to.equal("heathcliff");

        });
      });
    });
