// CTRL / comments out
// Ctrl ` is terminal
// Ctrl L clears console
// Alt Up or Alt Down moves the code
// Shift alt is easy way to duplicate

// Every Browser has JavaScript Engine, chrome is v8
/*
In order to write JS code, you need Script Element added
in head or body section, best practice is to put script 
element at the end of the body section (good user exp and
allows it to talk to other elements on the page)

Statement- 
Piece of code that expresses action to be carried out (ends in ';')
String - 
Sequence of Characters
*/

///////Seperation of Concerns////////////
// Differentiation of HTML and JS then combining
// Into a bundle to better serve your client
/* In HTML, <script src="name.js"> </script>
To run in node, CMD, go to folder created using DIR and cd
$node name.js can also execute in VsCode integrated terminal
*/


/*Variables
Constants
Primite Types - Values Assignable to variable
Dynamic Typing
Objects 
Arrays 
Functions
Types of Functions

ALL AVAILABLE IN NOTEBOOK
*/


console.log('Hello mf');

let name = 'hey';
console.log(name);


//functions

//Performing a Task
function greetings () { 
console.log('heyyoooo');
}
greetings();

function greet(name, lastName) {
    console.log('Yuh, hi there ' + name + ' ' + lastName);
}

greet('Amein', 'Almoughrabi');
//Can use template literals to clean up code

//Calculating a Value
function square(number) {
    return number * number
}

console.log(square(2));

let number = square(4);
console.log(number);

////////////////////////////////////////////////////////////////////
////////////////////////////OPERATORS//////////////////////////////
///////////////////////////////////////////////////////////////////

/* Arithmetic Operators
let x = 10;
let y = 3;
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log(x % y) remainder of division
console.log(x ** y) x to the power of y
console.log(x % y) 
Incrament (++)
console.log(++x) makes 11 bc it adds 1 to the value ahead of it
console.log(x++) remains 10 but adds 1 after it displays original value
Decrement (--)
console.log(--x); same thing makes it 9 
console.log(x--); displays 10 but then makes it 9
*/


/* Assignment Operators

let x = 10;
      ^ assignmet operator
x++;
 ^ incrament operator increases x by value of 1
To incrament more than 1:
x = x + 5 is the same as x += 5;
x = x * 3 is the same as x *= 3;
All that is in the arithmetic operators can be made into assignment operator.
*/


/* Comparision Operators 
The result of comparision operators is boolean
let x = 1;

Relational Operators:
console.log(x > 0); This wil return True 
console.log(x >=1 ); greater or equal to (true) 
console.log(x < 1); 
console.log(x <= 1); 

Equality Operators:
Console.log(x === 1); if x is equal to 1
Console.log(x !== 1); if x is not equal to 1
*/ 


/*Equality Operator:
*Strict Equality Operator*
(more accurate)
Console.log(1 === 1) is true 
Console.log('1' === 1) is false
(same type and value) 

*Loose Equality Operator*
Console.log(1 == 1);
Console.log('1' == 1); 
Console.log(true == 1); 
This auto converts the statements into strings or true
(doesn't care about types matching, it will convert right to match left,
then will check if the values are equal)
*/


/*Ternary Operators
//If customer has more than 100 points, they are gold
//Otherwise they are a silver customer

let points = 110;
let type = point > 100 ? 'gold' : 'silver'
^start with condition  ^ask ^true  ^false
console.log(type);
*/


/*Logical Operators
let highIncome = true;
let goodCredit = true;

Logical AND (&&)
let eligibleForLoan = highIncome && goodCreditScore; (true)

Loical OR (||)
let eligibleForLoan = highIncome || goodCreditScore; (true)

Logical NOT (!)
let applicationRefused = !eligibleForLoan
*/


/*Logical Operators with Non-booleans
The result of a logical expression is not necesarily true or false
That depends on the value of the operands we have

false || true; true
false || yea; yea
false || 1; 1

if the operand is not true or false it will try to interpret it as truthy of falsy
Falsy(false)
undefined
null
0
false
'' *empty string*
NaN (Not a Number) when dealing with calculation not producing valid number

Anything that is NOT Falsy is Truthy
as long as one of the operands is truthy, it is the answer 
in || if it is false || 1 || 2 || 4, it will be 1 
as it stops searching after the first truthy.

this is useful because it can be
let userColor = 'red'; (or undefined for blue)
let defaultColor = 'blue';
let currentColor = usercolor || defaultColor
will always pick user color since it is first as long as it is actually a color
*/


/* BitWise Operators
Not practical, just theory
1 = 00000001
2 = 00000010
R = 00000011 = 3
console.log(1 | 2); just one | is BitWise OR = 3
console.log(1 & 2); just one & is BitWise AND = 0

IRL example
access control system using read, write, execute
you can use 
00000100 Read
00000010 Write
00000001 Execute

const readPermission = 4;
const writePermission = 2;
const executePermission = 1;

let myPermission = 0;
myPermission = myPermission | writePermission

let message = 
    (myPermission & readPermission) ? 'yes': 'no';
console.log(message); (no)
*/