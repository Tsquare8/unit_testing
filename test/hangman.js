var hangman = require('../hangman');
var chai = require('chai');
var expect = chai.expect;

describe('hangman()', function() {
    context('when word is mississippi and letter is s', function() {
      it('returns 4', function() {

        // var word = hangman("mississippi", "s");
        expect(hangman("mississippi", "s")).to.equal(4);

      });
    });
  });

  describe('hangman()', function() {
      context('when word is mississippi and letter is b', function() {
        it('returns Not found', function() {

          // var word = hangman("mississippi", "s");
          expect(hangman("mississippi", "b")).to.equal("Not found");

        });
      });
    });
