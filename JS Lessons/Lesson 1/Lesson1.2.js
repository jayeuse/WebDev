// Fucntions is a block of code we can execute whenever we want.

// This is a function
function myFunction() {
    console.log("Hello World");
}

// This is how we call a function
myFunction();

// This is a function that takes a parameter
function myFunction1(name) {
    const message = "Hello " + name;
    console.log(message);
}

// This is how we call a function with a parameter
myFunction1('John');

// Assinging default values to parameters
function myFunction2(name, greetings = "Hello") {
    const message = greetings + " " + name;
    console.log(message);
}

// This is how we call a function with a parameter
myFunction2('John', 'Hi');
myFunction2('John');

// This is a function that returns a value
function myFunction3(name) {
    const message = "Hello " + name;
    return message;
}

// This is how we call a function that returns a value
const result = myFunction3('John');
console.log(result);

// Functions as parameters to other functions
function myFunction4(name, callback) {
    const message = "Hello " + name;
    callback(message);
}

// This is how we call a function with a parameter
myFunction4('John', function (message) {
    console.log(message);
});

// Arrow functions
const myFunction5 = (name) => {
    const message = "Hello " + name;
    console.log(message);
}

myFunction5('John');