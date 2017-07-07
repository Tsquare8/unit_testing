function longestWord(sentence) {

  var sentenceSplit = sentence.split(' ');
  var wordLength = 0;
  var findLongestWord = [];

  // Step 3. Create the FOR loop
  for(var i = 0; i < sentenceSplit.length; i++){
    if(sentenceSplit[i].length > wordLength){
	     wordLength = sentenceSplit[i].length;
       findLongestWord = sentenceSplit[i];
     }
  }

  return findLongestWord;
}

module.exports = longestWord;
