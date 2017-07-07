function changeMachine(amount) {

  // let amount = 149;
  let twenty = Math.trunc(amount / 20);
  let leftOver = amount % 20;
  let ten = Math.trunc(leftOver / 10);
  let leftOver2 = leftOver % 10;
  let five = Math.trunc(leftOver2 / 5);
  let leftOver3 = leftOver2 % 5;
  let one = Math.trunc(leftOver3 / 1)


  var change_machine = []

  if (ten < 1) {
    var t = 0;
  } else {
    var t = ten;
  }

  if (five < 1) {
    var v = 0;
  } else {
    var v = five;
  }

  if (one < 1) {
    var o = 0;
  } else {
    var o = one;
  }

  change_machine.push(parseInt(twenty), parseInt(t), parseInt(v), parseInt(o))
  return(change_machine);

}

module.exports = changeMachine;
