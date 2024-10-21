// Variables can store values that can be used and changed later in the program.

// Variables are declared using the let or var keyword.

// let is the modern way to declare variables in JavaScript.
// var is the old way to declare variables in JavaScript.

// let <variableName>; declares a variable.
let myVariable;
myVariable = 5; // Assigns the value 5 to the variable myVariable.

let myVariable1 = 5; // Declares a variable and assigns the value 5 to it.

myVariable1 = 10; // Changes the value of the variable myVariable1 to 10.

//constants must have a value assigned to them when they are declared and cannot be changed later in the program.

const myConstant = 5; // Declares a constant variable and assigns the value 5 to it.

const myObject = { name: "John", age: 25 }; // Declares a constant variable and assigns an object to it.

// This is allowed because the properties of the object can be changed.
myObject.name = "Jane"; // Changes the value of the name property 
myObject.age = 30; // Changes the value of the age property 

// Arithmetic Operators

4 + 9; // 13
4 - 9; // -5
4 * 9; // 36
4 / 9; // 0.4444444444444444
4 % 9; // 4

// Comparison Operators

4 > 9; // false
4 < 9; // true
4 >= 9; // false
4 <= 9; // true
4 == 9; // false
4 != 9; // true

// Logical Operators

true && false; // false
true || false; // true
!true; // false

// Strings

let myString = 'Hello, World!'; // Strings can be declared this way.
myString = "Hello, World!"; // Strings can be declared using single or double quotes.
myString = `Hello, World!`; // Template literals