// Exercise 1: Variables & Data Types
// Task: Declare and print different types of variables containing both primitive and non primitive data types.

if (true) {
  const a = 5;
}
// console.log(a); //error

console.log(b); //output-> undefined
if (true) {
  var b = 5;
}
console.log(b); //output-> 5

/** variables created with var are not block-scoped, but only local to the function (or global scope) that the block resides within. */

var x;
console.log(x); //output-> undefined
x = 6;

(() => {
  var x;
  console.log(x); //output-> undefined
  x = "Hello var x";
})();
console.log(x); //output-> 6

// DATATYPES IN JAVASCRIPT
/** there are 8 data types in javascript, among them 7 are primitive data types
 *
 * 1. Boolean -> true/false
 * 2. null
 * 3. undefined
 * 4. Number -> 42, 3.14159
 * 5. BitInt -> An integer with arbitrary precision. eg. 9007199254740992n
 * 6. String
 * 7. Symbol -> A data type whose instance are unique and immutable.
 *
 * 8. object -> non-primitive data type
 */

const bool = true;
console.log(bool); // output-> true

const n = null;
console.log(n); //output-> null

const u = undefined;
console.log(u); //output-> undefined

const num = 12;
console.log(num); //output-> 12

const bigInt = 123456789n;
console.log(bigInt); //output-> 123456789n

const str = "hello";
console.log(str); //output-> hello

const sym = Symbol("sym");
console.log(sym); //output-> Symbol(sym)

const obj = {
  name: "dibyadyuti",
  age: 22,
};
console.log(obj); //output-> { name: 'dibyadyuti', age: 22 }

// NUMBERS AND + OPERATOR

/** In expressions involving numeric and string values with the + operator, JavaScript converts numeric values to strings. For example, consider the following statements:js
 */
x = "The answer is " + 42; // "The answer is 42"
y = 42 + " is the answer"; // "42 is the answer"
z = "37" + 7; //"377"

console.log(x, y, z);
/**With all other operators, JavaScript does not convert numeric values to strings. For example: */

"37" - 7; //"30"
"37" * 7; //"259"

// NUMBERS CAN BE RETRIEVE FROM THE STRING USING UNARY + OPERATOR
console.log("1.1" + "1.1"); // output-> "1.11.1"
console.log(+"1.1" + +"1.1"); //output-> 2.2
