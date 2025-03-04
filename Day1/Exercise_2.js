// ARITHMETIC OPERATORS
console.log(`exponentiation operator ${5 ** 2}`); //output-> 25
console.log(`multiplication operator ${5 * 2}`); //output-> 10
console.log(`division operator ${5 / 2}`); //output-> 2.5
console.log(`remainder operator ${5 % 2}`); //output-> 1
console.log(`plus operator ${5 + 2}`); //output-> 7
console.log(`subtraction operator ${5 - 2}`); //output-> 3

// RELATION OPERATORS
console.log(`less than operator ${5 < 2}`); //output-> false
console.log(`greater than operator ${5 > 2}`); //output-> true
console.log(`less than or equal operator ${5 <= 2}`); //output-> false
console.log(`greater than or equal operator ${5 >= 2}`); //output-> true
const obj = {};
console.log(obj instanceof Object); //output-> true
const obj2 = {
  name: "Dibyadyuti",
  age: 12,
};
console.log("age" in obj2); //output-> true

// EQUALITY OPERATOR
console.log(`equality operator ${5 == "5"}`); // output-> true
console.log(`inequality operator ${5 != 5}`); // output-> false
console.log(`strict equality operator ${5 === 5}`); //output-> true
console.log(`strict inequality operator ${5 !== 5}`); //output-> false

// LOGICAL OPERATORS
console.log(5 > 2 && 5 > 3); //output-> true
console.log(5 > 2 || 5 < 3); //output-> true
console.log(!(5 > 2)); //output-> false