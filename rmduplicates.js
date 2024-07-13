/**
 * 5.	Write a function that takes an array and returns a new array with duplicates removed.
 * 
 * @param {Array.<number|string>} arr 
 */

function rmDuplicates(arr){
    const uniqueSet = new Set(arr);
    
    const uniqueArray = Array.from(uniqueSet);
    return uniqueArray;
}

const originalArray = [1, 2, 2, 3, 4, 4, 5];
console.log(rmDuplicates(originalArray)); 