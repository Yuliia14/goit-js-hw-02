function findLongestWord(string = "") {
  // Write code under this line
  let theLongestWord = string.split(" ")[0];
  for (let i = 0; i < string.split(" ").length; i += 1) {
    if (string.split(" ")[i].length > theLongestWord.length) {
      theLongestWord = string.split(" ")[i];
    }
  }
  return theLongestWord;
}

console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// 'jumped'
console.log(findLongestWord("Google do a roll"));
// 'Google'

console.log(findLongestWord("May the force be with you"));
// 'force'
