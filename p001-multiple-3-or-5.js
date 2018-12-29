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
