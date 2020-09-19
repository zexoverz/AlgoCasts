// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3


// Iterative Solution O(n)


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

// Do Memoization for Increase Algorithm Performance

// slowFib >>> Memoization >>> fastFib

function memoize(fn){
    let cache = {}; // store fibonacci same number iteration

    return function(...args){
        if(cache[args]){
            return cache[args];
        }

        const result = fn.apply(this, args);
        cache[args] = result;

        return result;
    }
}

function slowFib(n){ // this is slow fib
    if(n < 2){
        return n
    }

    return fib(n - 1) + fib(n - 2);
}

const fib = memoize(slowFib);


module.exports = fib;
