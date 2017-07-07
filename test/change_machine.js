var changeMachine = require('../change_machine');
var chai = require('chai');
var expect = chai.expect;

describe('changeMachine()', function() {
    context('when amount is 149', function() {
      it('returns [7, 0, 1, 4]', function() {

        //to compare not an array use .to.equal
        //to compare an array must use .to.deep.equal
        expect(changeMachine(149)).to.deep.equal([ 7, 0, 1, 4 ]);

      });
    });
  });
