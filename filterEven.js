/**
 * 9.	Write a function that filters out even numbers from an array.
 */

function filterEven(arr){
    return arr.filter((val)=> val % 2 === 0);
}

arr = [1,2,3,4,5,6,7,8,9,10];

console.log(filterEven(arr));