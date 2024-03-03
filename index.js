// EXAMPLE 1 - Check if a Parameter is provided to Function in JavaScript

function getParam(param) {
  if (param !== undefined) {
    console.log('The parameter was provided to the function');
    return param;
  }
}

console.log(getParam(5)); // 👉️ 5
console.log(getParam()); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 2 - Check if a Parameter is provided to Function using typeof

// function getParam(param) {
//   if (typeof param !== 'undefined') {
//     return param;
//   }
// }

// console.log(getParam(5)); // 👉️ 5
// console.log(getParam()); // 👉️ undefined

// ------------------------------------------------------------------

// // EXAMPLE 3 - Assigning default values for function parameters

// function getParam(param = 'hello') {
//   return param;
// }

// console.log(getParam()); // 👉️ hello

// console.log(getParam('world')); // 👉️ world
