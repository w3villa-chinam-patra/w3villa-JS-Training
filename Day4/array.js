const arr = [`Apple`, `Mango`, `Orange`, `Banana`, `Kiwi`];
const anotherArr = [1, 5, 3, , 2, 6];

console.log(arr.length); // output-> 5
console.log(arr.pop()); //output-> Kiwi (it will pop the last element from the original array)
console.log(arr.push(`Grapes`)); // output-> 5 (it will push the given element into the original array and returns the new length of the array)
console.log(arr.shift()); // output-> Apple (it will remove the first element from the original array)
console.log(arr.unshift({})); // output-> 5 (it will add the given element into the original array)
console.log(arr.concat(`Hello`, `World`, anotherArr)); // it concat any number of elements as well as another array into the array
console.log(arr.indexOf(`Orange`)); // output-> 2
console.log(arr.includes(`Mango`)); // output-> true
console.log(arr.reverse()); //output-> [ 'Grapes', 'Banana', 'Orange', 'Mango', {} ] (it reverse the original array)
console.log(anotherArr.sort()); // output-> sorts the array
anotherArr[10] = `hello`; //output-> [ 1, 2, 3, 5, 6, <5 empty items>, 'hello' ]
console.log(anotherArr);
console.log(arr.slice(1, 2));
console.log(arr.splice(1, 6));
// THE MAIN KEY DIFFERENCE BETWEEN SLICE AND SPLICE IS THAT SLICE DO NOT CHANGE THE ORIGINAL ARRAY IT CREATES A NEW ARRAY BUT SPLICE CHANGES THE ORIGINAL ARRAY AS WELL CREATES A NEW ARRAY.

const dummyArr = [1, 6, 4, 3, 7];
// map
console.log(dummyArr.map((ele) => ele * 2));

// filter
console.log(dummyArr.filter((ele) => ele % 2));

// reduce
console.log(dummyArr.reduce((acc, curr) => acc + curr, 0));

