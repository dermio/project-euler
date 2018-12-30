/* Multiples of 3 and 5, Problem 1
If we list all the natural numbers below 10 that are multiples of 3 or 5,
we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000. */

function multiples_of_3_or_5(num1, num2, target) {
  let sum = 0;

  for (let i = 1; i < target; i++) {
    if (i % num1 === 0 || i % num2 === 0) {
      sum += i
    }
  }
  return sum;
}

let it = multiples_of_3_or_5(3, 5, 1000);
console.log(it); // 233168
