// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// My Brute Force Solution O(n^2)

// function pyramid(n) {
//     const midPoint = Math.floor((2 * n - 1) / 2)

//     for (let i = 0; i < n; i++){
//         let level = "";

//         for (let j = 0; j < 2 * n - 1; j++){
//             if(midPoint - i <= j && midPoint + i >= j){
//                 level += "#"
//             }else {
//                 level += " "
//             }
//         }

//         console.log(level);
//     }
// }

// Recursive Solution

function pyramid(n, row = 0, level = '') {
    if(row === n){
        return;
    }

    if(level.length === 2 * n - 1){
        console.log(level);
        return pyramid(n, row + 1)
    }

    const midPoint = Math.floor((2 * n - 1) / 2); // the key logic

    let add = '';

    if(midPoint - row <= level.length && midPoint + row >= level.length){
        add += "#"
    }else {
        add += " "
    }

    return pyramid(n, row, level + add);
}

module.exports = pyramid;
