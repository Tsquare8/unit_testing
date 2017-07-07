function hangman(word, letter) {

  let submitWord = word.split("");
  let submitLetter = letter;
  let count = 0;

  for (var i = 0; i < word.length; i++) {

    if (submitWord[i] == submitLetter) {
      count++;
      var foundLetter = submitLetter;
    }

  }

  if (foundLetter == submitLetter) {
    return count
  } else {
    return "Not found";
  }

}

module.exports = hangman
