/**
 * 3. Write a function that takes a nested array and returns a flattened array.
 
@param {Array.<(number|Array)>} arr 
@param {number} level define upto what subarray level you want to flatten.
*/

function flatArray(arr,level){
    return arr.flat(level);
}

arr = [1, [2, 3], [4, [5, 6]], [7,[8,9],[10]]];
level = 2;
console.log(flatArray(arr,level));