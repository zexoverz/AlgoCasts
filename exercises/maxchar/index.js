// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    let map = {}
    let maxChar = str[0]

    for (let char of str){
        map[char] = map[char] + 1 || 1
        if(map[char] > map[maxChar]){
            maxChar = char
        }
    }

    return maxChar;
}

module.exports = maxChar;
