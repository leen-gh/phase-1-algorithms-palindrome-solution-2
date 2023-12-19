function isPalindrome(word) {
  // Write your algorithm here
  word = word.toLowerCase()
  word = word.replace(/[^a-z0-9]/g, '')
  let i = word.length - 1
  let n = 0
  while (n < i) {
    if (word[n] !== word[i]) {
      return false;
    } 
    n++;
    i--;
  }
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  frist counting the length of the word statring from 0 
  using while loop checking if the equlity of the letter startin with the first with end ...etc 
  if it is not equl it will retun false else it will keeep checking until the midle of hte word
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
