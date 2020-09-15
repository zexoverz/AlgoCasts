// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// function fib(n) {
//     let series = [0, 1];  // 0 1 
//     let pointer = 0;

//     for (let i = 2; i <= n; i++){
//         series.push(series[pointer] + series [i-1]);
//         pointer++
//     }

//     return series[n];
// }

// my recursive solution;

function fib(n){
    if(n < 2){
        return n
    }

    return fib(n - 1) + fib(n - 2);
}


module.exports = fib;
