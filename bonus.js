function bonus(bill, tip) {
  let total = Math.round(bill * (1 +tip));
  return total;
}

module.exports = bonus;
