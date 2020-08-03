// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'


// Great Soultion

function capitalize(str) {
    let result = str[0].toUpperCase();


    for (let i = 1; i < str.length; i++){
        if (str[i - 1] == " "){
            result += str[i].toUpperCase();
        }else {
            result += str[i]
        }
    }

    return result;
}


// My Brute Force

// function capitalize(str) {
//     let splitWord = str.split(" ");
//     let temp = []

//     for (let word of splitWord){
//         let strSplit = word.split("");
//         strSplit[0] = word[0].toUpperCase();
//         temp.push(strSplit.join(""));
//     }

//     return temp.join(" ");
// }

module.exports = capitalize;
