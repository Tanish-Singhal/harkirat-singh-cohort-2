/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  let cleanedStr = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  let leftChar = 0;
  let rightChar = cleanedStr.length - 1;

  while (leftChar < rightChar) {
    if (cleanedStr[leftChar] !== cleanedStr[rightChar]) {
      return false;
    }
    leftChar++;
    rightChar--;
  }
  return true;
}

module.exports = isPalindrome;
