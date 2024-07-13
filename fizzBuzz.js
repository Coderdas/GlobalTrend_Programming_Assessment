/**
 * 1.	Write a function that prints the numbers from 1 to 100. But for multiples of three, print "Fizz" instead of the startNum , and for the multiples of five, print "Buzz". For numbers that are multiples of both three and five, print "FizzBuzz".
 * 
 * @param {startNum } startNum  
 */

function fizzBuzz(start,end){

  let startNum = start;
  const endNum = end;

    function checkFizzBuzz(num){
      const num1 = 3 , num2 = 5, MultipleOfNum1And2 = (num1)*(num2);
      
      if ( (num % MultipleOfNum1And2) === 0 ) return "FizzBuzz" ;
      if ( (num % num1) === 0 ) return "Fizz" ;
      if ( (num % num2) === 0 ) return "Buzz" ;
      else return num;
      }
    
      for(;startNum < endNum ;startNum ++){
        console.log( checkFizzBuzz(startNum));
      }
      
    }
    fizzBuzz(1,100);