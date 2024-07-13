/**
 * 6.	Write a function that takes a string and capitalizes the first letter of each word in the string.
 * Question 6 and 10 are asking the same thing.
 * @param {string} str
 */

function capsFirstLetter(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Capitalize the first letter of each word
    const capitalizedWords = words.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
    });

    // Join the words back into a single string
    const result = capitalizedWords.join(' ');
    return result;
}

const inputString = "hello world, how are you?";
console.log(capsFirstLetter(inputString)); 
