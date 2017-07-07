
  function pigLatin(word) {
    let letters = word.split("");
    let first = letters.slice(0, 1);
    return letters.join("").slice(1) + first + "ay";
}

module.exports = pigLatin;
// console.log(pigLatin("good"))
