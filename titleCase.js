/**
 * 10.	Write a function that converts a given string to title case (capitalizing the first letter of each word).
 * Question 6 and 10 are asking the same thing.
 * @param {string} str
 */


function toTitleCase(str) {
    // Split the string into an array of words
    const words = str.split(' ');

    // Capitalize the first letter of each word
    const titleCasedWords = words.map(word => {
        const firstLetter = word.charAt(0).toUpperCase();
        const restOfWord = word.slice(1).toLowerCase();
        return firstLetter + restOfWord;
    });

    // Join the words back into a single string
    const result = titleCasedWords.join(' ');
    return result;
}


const inputString = "oh man ! now you're killing me";

console.log(toTitleCase(inputString));
