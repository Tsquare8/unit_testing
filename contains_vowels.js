function containsVowel(string) {

        if (string.match(/[aeiouAEIOU]/)) {
          return true;
        } else {
          return false;
        }
      }

      module.exports = containsVowel;
