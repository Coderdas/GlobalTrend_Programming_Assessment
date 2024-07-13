/**
 * 4.	Write a function that checks if two given strings are anagrams of each other.
 * @param {string} str1 
 * @param {string} str2 
 */



function areAnagrams(str1, str2) {

    // Remove spaces and convert to lowercase for fair comparison
    const cleanStr1 = str1.replace(/\s/g, '').toLowerCase();
    const cleanStr2 = str2.replace(/\s/g, '').toLowerCase();
  
    // Sort the characters and compare
    const sortedStr1 = cleanStr1.split('').sort().join('');
    const sortedStr2 = cleanStr2.split('').sort().join('');
  
    return sortedStr1 === sortedStr2;
  }
  

  const word1 = 'listen';
  const word2 = 'silent';
  console.log(areAnagrams(word1, word2));
  
  const phrase1 = 'Astronomer';
  const phrase2 = 'Moon starer';
  console.log(areAnagrams(phrase1, phrase2)); 
  