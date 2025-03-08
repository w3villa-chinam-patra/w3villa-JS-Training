const userInfo = {
  firstName: "Chinam Dibyadyuti",
  lastName: "Patra",
  age: 22,
};

console.log(userInfo["firstName"]);
console.log(userInfo.firstName);
userInfo.qualification = "b.tech";
console.log(userInfo);
console.log(Object.keys(userInfo)); // gives the array of  keys of the object
console.log(Object.values(userInfo)); // gives the array of values of the object
console.log(Object.entries(userInfo)); // gives the array of array of key and values

delete userInfo.qualification; // removes the key value pair of the object
console.log(userInfo);

