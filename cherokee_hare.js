
function finalPop(birthRate, numOfWeeks, starting_pop) {

return Math.trunc(Math.pow(1 + birthRate, numOfWeeks) * starting_pop)

}

  // let starting_pop = 25;
  // let birthRate = 0.25;
  // let numOfWeeks  = 12;
  //
  // console.log("There will be " + Math.trunc(finalPop) + " Cherokee Hares after " + numOfWeeks + " weeks");

module.exports = finalPop;
