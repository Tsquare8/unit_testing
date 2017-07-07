
  // let palindrome = "hannah";

  function reverse(word) {

     let palindrome = word.split("").reverse().join("");

    if (palindrome == word) {
      return true
    } else {
      return false
    }

  }

  module.exports = reverse;
