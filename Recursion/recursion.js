function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const position = 7;
console.log(`Fibonacci at position ${position}:`, fibonacci(position));
// Output=> 13


function factorial(n) {
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

const result = factorial(5);
console.log("Factorial of 5:", result); 
// Output=> 120

function sumArray(arr) {
    if (arr.length === 0) {
      return 0;
    }
    return arr[0] + sumArray(arr.slice(1));
  }
  
const array = [1, 2, 3, 4, 5];
console.log("Sum of array:", sumArray(array)); 
// Output=> 15
  

