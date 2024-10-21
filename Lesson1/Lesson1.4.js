// Arrays are a type of object that can store multiple values. They are created using square brackets [] and can store any type of value.

let myArray = [1, 2, 3, 4, 5]; // Declares an array and assigns values to it.

let iceCreamFlavors = ['Vanilla', 'Chocolate', 'Strawberry']; // Declares an array and assigns values to it.
iceCreamFlavors[0]; // We can access the first element of the array using the index 0.
iceCreamFlavors[1] = 'Mint'; // We can change the value of an element in the array using the index.
iceCreamFlavors[3] = 'Cookies and Cream'; // We can add a new element to the array using an index that is not already in use.

console.log(iceCreamFlavors); // Output: [ 'Vanilla', 'Mint', 'Strawberry', 'Cookies and Cream' ]

// Arrays can store any type of value, including other arrays.

let myArray1 = [1, 'Hello', true, [1, 2, 3]]; // Declares an array and assigns values to it.
console.log(myArray1); // Output: [ 1, 'Hello', true, [ 1, 2, 3 ] ]

// Arrays have a length property that tells us how many elements are in the array.
console.log(myArray1.length); // Output: 4

// We can access the last element of the array using the length property.
console.log(myArray1[myArray1.length - 1]); // Output: [ 1, 2, 3 ]

// We can add elements to the end of an array using the push method.
myArray1.push('World'); // Adds the value 'World' to the end of the array.
console.log(myArray1); // Output: [ 1, 'Hello', true, [ 1, 2, 3 ], 'World' ]

// We can remove elements from the end of an array using the pop method.
myArray1.pop(); // Removes the last element from the array.
console.log(myArray1); // Output: [ 1, 'Hello', true, [ 1, 2, 3 ] ]

// We can add elements to the beginning of an array using the unshift method.
myArray1.unshift('Welcome'); // Adds the value 'Welcome' to the beginning of the array.
console.log(myArray1); // Output: [ 'Welcome', 1, 'Hello', true, [ 1, 2, 3 ] ]

// We can remove elements from the beginning of an array using the shift method.
myArray1.shift(); // Removes the first element from the array.
console.log(myArray1); // Output: [ 1, 'Hello', true, [ 1, 2, 3 ] ]

// We can check if an element is in an array using the includes method.
console.log(myArray1.includes('Hello')); // Output: true
console.log(myArray1.includes('Goodbye')); // Output: false

// We can find the index of an element in an array using the indexOf method.
console.log(myArray1.indexOf('Hello')); // Output: 1
console.log(myArray1.indexOf('Goodbye')); // Output: -1

// We can remove elements from an array using the splice method.
myArray1.splice(1, 1); // Removes 1 element starting from index 1.
console.log(myArray1); // Output: [ 1, true, [ 1, 2, 3 ] ]
myArray1.splice(1, 0, 'Hello'); // Adds the value 'Hello' at index 1.
console.log(myArray1); // Output: [ 1, 'Hello', true, [ 1, 2, 3 ] ]

// We can copy an array using the slice method.
let myArray2 = myArray1.slice(); // Copies the array myArray1 to myArray2.
console.log(myArray2); // Output: [ 1, 'Hello', true, [ 1, 2, 3 ] ]

// We can also copy part of an array using the slice method.
let myArray3 = myArray1.slice(1, 3); // Copies elements from index 1 to index 3 (not inclusive).
console.log(myArray3); // Output: [ 'Hello', true ]

// Loops are used to repeat a block of code multiple times.

/*
for(<initialization>; <condition>; <iteration-expression>){
    Code to be executed multiple times
}
*/
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0 1 2 3 4
}

// While loops are used to repeat a block of code as long as a condition is true. Therefore it stops if the condition is false.

let i = 0;
while (i < 5) {
    console.log(i); // Output: 0 1 2 3 4
    i++;
}

// Do while loops are similar to while loops, but the condition is checked after the block of code is executed.

let j = 0;

do {
    console.log(j); // Output: 0
    j++;
}while (j < 0);

// Loops and Arrays

let iceCreamFlavors1 = ['Vanilla', 'Chocolate', 'Strawberry', 'Mint', 'Cookies and Cream'];

// We can use a for loop to iterate over the elements of an array.
for (let i = 0; i < iceCreamFlavors1.length; i++) {
    console.log(iceCreamFlavors1[i]); // Output: Vanilla Chocolate Strawberry Mint Cookies and Cream
}


