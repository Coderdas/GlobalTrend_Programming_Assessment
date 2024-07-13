/**
 * 7.	Write a function that generates the first n numbers of the Fibonacci sequence.

 * @param {number} n The desired length of the sequence.
 
 */

function generateFibonacci(n) {
    const fibonacciSequence = [0, 1]; 
  
    for (let i = 2; i < n; i++) {
      const nextNumber = fibonacciSequence[i - 1] + fibonacciSequence[i - 2];
      fibonacciSequence.push(nextNumber);
    }
  
    return fibonacciSequence;
  }
  
  n = 10; 
  console.log( generateFibonacci(n)); 
   