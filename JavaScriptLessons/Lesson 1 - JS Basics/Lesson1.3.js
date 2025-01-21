// Booleans are true or false values. They are used to determine if a condition is true or false.

let myBoolean1 = true; // Declares a boolean variable and assigns the value true to it.
let myBoolean2 = false; // Declares a boolean variable and assigns the value false to it.

// Comparison Operators

4 > 9; // false     // Greater than
4 < 9; // true      // Less than
4 >= 9; // false    // Greater than or equal to
4 <= 9; // true     // Less than or equal to
4 === 9; // false   // Equal to
4 !== 9; // true    // Not equal to

// If Else Statements

let currenyBalance = 100;
let price = 50;

if (currenyBalance >= price) {
    // This block of code will be executed if the condition is true
    console.log('You can buy the item');
} else {
    // Otherwise this block of code will be executed
    console.log('You cannot buy the item');
}

// Switch Statements

let expression = 2;

// Much like if else statements, switch statements are used to make decisions in code.
//(It checks if the expression is equal to the case statement)
switch (expression) { 
    case 1:
        console.log('One');
        break;
    case 2:
        console.log('Two');
        break;
    case 3:
        console.log('Three');
        break;
    default:
        console.log('Unknown');
}

// Logical Operators

true && false; // false (AND) // Both conditions must be true, for the result to be true
true || false; // true (OR) // Either condition must be true, for the result to be true
!true; // false (NOT) // Negates the value of the condition

// Ternary Operator

let balance = 100;
let itemPrice = 50;

// The ternary operator is a shorthand way of writing if else statements.
// let <variableName> = <condition> ? <value if true> : <value if false>;
let message = balance >= itemPrice ? 'You can buy the item' : 'You cannot buy the item';
