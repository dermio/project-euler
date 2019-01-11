/* Largest prime factor, Problem 3

The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143? */

function primeFactors(num) {
  let arr = [];
  let i = 2;

  if (num <= 1) { return "Enter a number greater than 1"; }

  while (i <= num) {
    if (num % i === 0) { // Num is divisible & no remainder
      arr.push(i); // Push i onto array
      // Num is divisible & no remainder, set num = num / i to reduce num value
      num /= i;
      i = 2; // Start i count at 2 again
    } else {
      i++;
    }
  }

  // return arr; // [ 71, 839, 1471, 6857 ]
  return arr[arr.length - 1];
}

let it = primeFactors(600851475143);
// [ 71, 839, 1471, 6857 ]
// Largest prime factor is 6857
