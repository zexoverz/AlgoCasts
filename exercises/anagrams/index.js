// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// The Great Solution

function anagrams(stringA, stringB){
    stringA = stringA.replace(/[^\w]/g, "").toLowerCase();
    stringB = stringB.replace(/[^\w]/g, "").toLowerCase();

    return stringA.split("").sort().join("") == stringB.split("").sort().join("");
}



// My Brute Force Solution

// function anagrams(stringA, stringB) {
//     let obj = buildCharMap(stringA)
//     let secondObj = buildCharMap(stringB)

//     if(Object.keys(obj).length !== Object.keys(secondObj).length){
//         return false;
//     }

//     for (let key in obj){
//         if(secondObj[key] !== obj[key]){
//             return false
//         }
//     }

//     return true;
// }

// function buildCharMap(string){
//     let filterString = string.replace(/[^\w]/g, "").toLowerCase();

//     let obj = {}

//     for (let str of filterString){
//         if(str in obj){
//             obj[str] += 1;
//         }else {
//             obj[str] = 1;
//         }
//     }

//     return obj;
// }

module.exports = anagrams;
