// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0


// My Brute Force Solution O(n)

// function vowels(str) {
//     let temp = ['a', 'e', 'i', 'o', 'u'];

//     let total = 0;


//     for (let alphabet of str){
//         alphabet = alphabet.toLowerCase();
//         if(temp.includes(alphabet)){
//             total++
//         }
//     }

//     return total;
    
// }

// Regex Solution

function vowels(str) {
    const matches = str.match(/[aiueo]/gi);

    return matches ? matches.length : 0;
}

module.exports = vowels;
