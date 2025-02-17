const prompt = require("prompt-sync")(); // Import prompt-sync for user input

function fib(first, second, n) {
    if (first > n) return; // Base case: Stop when the next number exceeds n

    console.log(first); // Print the current Fibonacci number

    // Recursive call with updated values
    fib(second, first + second, n);
}

// Taking user input
const n = parseInt(prompt("Enter the maximum value (n): "), 10);

console.log(`Fibonacci Series up to ${n}:`);
fib(0, 1, n);
