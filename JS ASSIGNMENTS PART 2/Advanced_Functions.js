// 1. How JavaScript Handles Function Calls with Different Number of Arguments Than Parameters:
// JavaScript functions handle arguments as follows:
// Fewer Arguments: If fewer arguments are provided than the parameters defined in the function, the missing parameters are automatically assigned undefined.

//Example:

function test(a, b) {
  console.log(a, b);
}
test(1);  // Output: 1, undefined


// More Arguments: If more arguments are passed than the function parameters, 
// the extra arguments are simply ignored unless they are captured by a rest parameter (...rest).
// Example:

function test(a, b) {
  console.log(a, b);
}
test(1, 2, 3, 4);  // Output: 1, 2 (extra arguments are ignored)


// 2. Purpose and Syntax of the Rest Parameter:
// The rest parameter allows you to collect all remaining arguments passed to the function into a single array. It enables a function to accept an indefinite number of arguments, and it must be placed at the end of the parameter list.

// Syntax:

function functionName(...rest) {
  // 'rest' is an array that contains all the additional arguments
}

// Example:
function sum(a, b, ...rest) {
  console.log(a, b);  // First two arguments
  console.log(rest);   // Rest of the arguments as an array
}
sum(1, 2, 3, 4, 5);  // Output: 1 2 [3, 4, 5]


// 3. Write a Function sumAll Using the Rest Parameter:
// The function sumAll will take any number of arguments and return the sum of all the arguments passed to it.

function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}
// Test the function
console.log(sumAll(1, 2, 3)); // Output: 6
console.log(sumAll(10, 20, 30, 40)); // Output: 100

// Explanation:
// The sumAll function uses the rest parameter (...numbers) to collect all arguments passed to the function into an array.
// The reduce method is then used to calculate the sum of all the numbers in the array.

  
// 4. Challenge: Create a Function processArguments
// The processArguments function will take a primary function as its first argument, followed by any number of additional arguments. It will call the primary function with all the arguments provided.

function processArguments(fn, ...args) {
  return fn(...args);
}

// Example primary function: summing all the arguments
function sumAll(...numbers) {
  return numbers.reduce((sum, num) => sum + num, 0);
}

// Using processArguments to call sumAll
console.log(processArguments(sumAll, 1, 2, 3));  // Output: 6
console.log(processArguments(sumAll, 10, 20, 30, 40));  // Output: 100

// Explanation:
// processArguments receives the primary function fn as the first argument and all other arguments in the args array.
// fn(...args) is used to call the primary function with all the arguments passed.
