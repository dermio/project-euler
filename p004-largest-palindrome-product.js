/* Largest palindrome product, Problem 4

A palindromic number reads the same both ways. The largest palindrome made
from the product of two 2-digit numbers is 9009 = 91 × 99.

Find the largest palindrome made from the product of two 3-digit numbers. */


function isPalindrome(num) {
  let str1 = num.toString();
  let str2 = str1.split("").reverse().join("");

  return str1 === str2 ? true : false;
}

function largestPalindrome(digits) {
  /* Create an array of length `digits`, fill with "9" character.
  The + turns the string into a number. */
  let number = +Array(digits).fill("9").join("");
  let palinArr = []; // Contains number pairs whose product is a palindrome.
  let prod, num1, num2;

  for (let i = 1; i <= number; i++) {
    for (let j = 1; j <= number; j++) {
      if (isPalindrome(i * j)) {
        palinArr.push([i, j]); // Add the number pair as an array.
      }
    }
  }

  // Object keeps track of number pairs that create largest palindrome.
  let biggestPalin = {
    value: palinArr[0][0] * palinArr[0][1], // The product of first number pair.
    nums: palinArr[0] // The first number pair array.
  };

  for (let i = 1; i < palinArr.length; i++) {
    num1 = palinArr[i][0];
    num2 = palinArr[i][1];
    prod = num1 * num2;

    if (prod > biggestPalin.value) {
      biggestPalin.value = prod;
      biggestPalin.nums = [num1, num2];
    }
  }

  return biggestPalin.value;

  /*
  biggestPalin = {
    value: 906609,
    nums: [ 913, 993 ]
  } */
}

let it = largestPalindrome(3);
// Largest palindrome is 906609

