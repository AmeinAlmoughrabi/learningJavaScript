//                                                       //
//                                                       //
/////////////////////// Basics ////////////////////////////
//                                                       //
//                                                       //

// Premade Objects have capital letter first

// OBJECT LITERAL SYNTAX //

// Collections of key value pairs
// if you have properties that are highly related, 
// you want to have them encapulated in an object
// you can have anything in a objcect, including obj etc etc

// purpose of an object is to group related variables
// Object-oriented Programming (OOP) 

const circle = {
    radius: 1,
    location: {
        x: 1,
        y: 1
    },
    isVisible: true,
    draw: function() {
        console.log('draw')}
};

circle.draw(); //this is the method

// Do circle. to see all the properties inside
// this is called dot notation

// we are adding this function as a key value pair into the object
// function draw() {}


//                                                       //
//                                                       //
///////////////// Factory Functions //////////////////////
//                                                       //
//                                                       //


// Beauty of this factory function is that we defined logic in one spot
// we can call this func with diff values or arguments where we defined
// the draw method in only one place which is great for decoding bugs

// If you wanna create two circle objects,  the problem 
// is we have duplicated the implementation of the draw method

function createCircle(radius){
    return {
        radius,

        draw() {
            console.log('draw')
        }
    };
}

const circle1 = createCircle(1)
console.log(circle1)
circle1.draw()

const circle2 = createCircle(2);
console.log(circle2)


// instead of radius: radius we can just have radius,
// instead of let blank = blank, then return blank we can just use return{}

// We do not want to repeat all the lines because if we have a
// bug we will have to fix it in many places
// Especially if we have dozens of methods
// We use factory Factory functions here 


//                                                       //
//                                                       //
/////////////// Constructor Functions ////////////////////
//                                                       //
//                                                       //


// Pattern of creating objects, to construct or create the object
// Instead of Camel Notation, we use Pascal Notation (EveryLetterCaps)
// (expected by other devs when they read your code)

function Circle(radius){
    this.radius = radius;
    this.draw = function(){
        console.log(draw);
    }
}

const circl = new Circle(1);
// const x = {};

// The new operator creates an empty javaScript object (line mumber 98)
// It also sets 'this' to point to this object, 
// It also returns the object from function above 
// return this; isnt necessary as it happens under the hood
// this is a reference to the object that is executing this piece of code

// In factory functions the difference in how we create object
// In factory functions we simply call a function and return a new objects
// With constructor functions we used the new operator 
// Instead of returning an object, we use the 'this' keyword (and Pascal case)

// BOTH PATTERNS ARE EQUALLY GOOD, NO DIFF BETWEEN THEM
// BUT THE CONSTRUCTOR IS FAMILAR TO PPL WITH OTHER LANG


//                                                       //
//                                                       //
////////// Dynamic Nature of Objects Functions ////////////
//                                                       //
//                                                       //


// Objects in JS are dynamic, meaning you can add new properties,
// methods, or even remove existing ones

console.log(circle)

circle.color = 'yellow'
circle.sago = function() {}
delete circle.draw

console.log(circle)

// We use the const keyworld to define a new constant,
// yet we modified it, meaning we cannot reassign the var
// or reset the variable either (circle), but we can always
// change the inside of it


//                                                       //
//                                                       //
///////////////// Constructor Property ////////////////////
//                                                       //
//                                                       //

// Every object in JS has a property called constructor
// That references the funtion that was used to construct or create that object

console.log(circle1.constructor)

// blue f means functions and the first letter is uppercase
// ^ a built in constructor function in JS.
// When we create an object using obbject lieral syntax, internally
// JS uses this constructor function. 

let whatever = {}
// JS will read this as 
// let x = new Object();
new String(); // '', "", ``
new Boolean(); // True, False
new Number; // 1, 2, 3

// Ever object has a constructor property, and that references
// a function that was used to create that object.


//                                                       //
//                                                       //
///////////////// Functions are Objects ///////////////////
//                                                       //
//                                                       //


// Functions are objects, the circle function is actually an object
// Purple icons are methods, like call, bind, and apply
// Blue icons are properties
// Circle.whatever

console.log(Circle.constructor)
// JS engine will use this function constructor to create thsi object.

 const Circle3 = new Function()
//'radius' , `
// this.radius = radius;
// this.draw = fucntion() {
//     console.log('draw');
// }
// `);

const Circle4 = new Circle3(1); // 1 cn be any value
console.log(Circle4)

// use `` in order to display on different lines

// Diff methods: whatever.etc
// Call method - call a function, look at arguements ({}) 
// then add arguements explicitely (,1,2,3)
// newoperator - internally create an empty object and pass 

// that as the first arguement to the call method.  
// This object will determine the context of 'this'
// This will reference this object, if we dont use the new op
// 'this' by defaul will point to the global object which is 'window'.

// Apply- exactly like call method, but istead of passing all arguements
// Explicitely, we pass them in n array
// Useful if you already have an array somewhere else in your app.
// Oass this array as the second arguements.



//                                                       //
//                                                       //
/////////////// Value vs Reference Types //////////////////
//                                                       //
//                                                       //

// Value Types: (also called primatives.)
// Number
// String
// Boolean
// Symbol
// Undefined
// Null

// Reference Types: (all secretely just objects)
// Object
// Function
// Array

// In a nutshell we can say we have primatives and objects

// Primatives:
let x = 10;
let y = x;

x = 20;

// Here, y will remain 10 because they are independant of each other

let a = {value: 10};
let b = a;

b.value = 20;

// Here, we see that they both have the value of 20
// When we use an object, that object is not stored in this variable, 
// It is stored somewhere in memory, 
// and address of that memory location is inside that memory variable
// when we copy x into y, it is the address location that is copy.

// Primative are copied by their value.
// Objects are copied by their refrence.

let number = 10
function increase(number){
    number++;
}

increase (number);
console.log(number);

// increase (number); should be inside the function 
// Or the value will end up out of the scope
// As it is, it is currently 2 seperate independant variables.
// This results in 10 in the console.log

let objectNumber = {value: 10}
function increase(objectNumber){
    objectNumber.value++;
}

increase (objectNumber);
console.log(objectNumber);

// We say 11, this is because when we call increase and pass this object,
// The object is passed by its reference. so this local parameter that we 
// have here will point to the same object defined here

// In a nutshell we are not dealing with 2 independant variables
// Rather 2 variables pointing to the same value



//                                                       //
//                                                       //
//                                                       //
////////// Enumerating Properties of an Object ////////////
//                                                       //
//                                                       //

const neezo = {
    gayness: 100,
    built() {
        console.log('different');
    }
    };

    for (let key in neezo)
    console.log(key, neezo[key]);

    for (let key of Object.keys(neezo)) { //returns keys as string array
    console.log(key)
    }

    for (let entry of Object.entries(neezo)) { //returns each key value pair as an array 
        console.log(entry)
        }
    // not interable, if you use let key of neezo,
    // Using these 2 new methods we can use the build in constructor function Object

    // so using dot notation on an object you can see the way it works is by already making every function an object that works 
    // you can also use the entry method

// you can get access to all the properties and methods in an objects

// to see if a given object has a given property or method use ---
if ('gayness' in neezo) console.log('yes');


//                                                       //
//                                                       //
//                                                       //
/////////////////// Cloning an Object /////////////////////
//                                                       //
//                                                       //

// using enumerating properties, this technique lets use 
// get all the properties of an object and copy into another

const another = {};

for (let key in neezo)
    another[key] = neezo[key]

//another['ya'] = neezo['ya']
console.log(another)
// another.gayness = 100 here

// This is a llttle bit old, IN MODERN JS WE CAN USE:


const anotherOne = Object.assign({}, neezo);
// This method takes all properties and moethods in source object
// Copies them into new object

// Target object doesnt have to be an empty object, can be empty and 
// can have 1 or more properties

const anotherTwo = Object.assign({
    haircut: 'Kinda fire'
}, neezo);

// can even use this, but can't really add shit
// ... is called the spread operator
const anotherThree = {...neezo}

console.log(anotherOne);
console.log(anotherTwo);
console.log(anotherThree);

//                                                       //
//                                                       //
//                                                       //
/////////////////// Garbage Collection ////////////////////
//                                                       //
//                                                       //

// In low level lang like C or C++ we have to allocate memory 
// when creating an object and deallocate the mem
// In JS we don't need to do that because memory is allocated auto.

// Therefore we use garbage collection to find var and const no longer
// used and deallocate the memory used in them before.
// You have no way of controlling it.

//                                                       //
//                                                       //
//                                                       //
///////////////////////// Math  ///////////////////////////
//                                                       //
//                                                       //

// Math Object built into JS, when using mathematical apps use:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

function getRandomMinMax (min, max){
    return Math.random() * (max-min) + min;
}

console.log(Math.round(getRandomMinMax(2,13)))

//                                                       //
//                                                       //
//                                                       //
/////////////////////// String  ///////////////////////////
//                                                       //
//                                                       //

// Another built in object

// STRING PRIMITIVE
const message = 'This is my first message';

// STRING OBJECT
const anotherBaby = new String('hi');

// typeof message is string
// typeof anotherBaby is object

// you can use dot notation on message.asdf here,
// bc JS works internally to make it a string object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log(message.length)
console.log(message[1])
console.log(message.includes('my'))
console.log(message.startsWith('This'))
console.log(message.indexOf('my'))
console.log(message.replace('first', 'second'))
console.log(message.split(' '))

//can also uppercase and lwoercase etc etc etc
// message.trim gets rid of random white space

//to use shit like ' in strings you can use the escapes 
// This is the \ character

//                                                       //
//                                                       //
//                                                       //
//////////////////// Template Literals ////////////////////
//                                                       //
//                                                       //

// \n does not allow us to easily see the output.
// To make this similar to what the output looks like we break
// the the string into two parts like this

const message2 = 
'This is my \n' +
'\'first\' message';

// OTHER TYPES OF LITERALS
// Object {}
// Boolean true, false
// String '', ""
// Templalte ``

const message3 = `This is my
first message`

// This allows us to formate oru string exactly how we type it
// This is also super nice for using things like mailing lists

// USE ${} TO ADD IN AN EXPRESION (VARIABLE, ETC)
// This makes it super easy in order to write emails or sm

//                                                       //
//                                                       //
//                                                       //
/////////////////////// Date Objects //////////////////////
//                                                       //
//                                                       //

// When you use Date(  without the closing ) you can use any kind of 
// versions of th contructor cycling with up and down

const now = new Date()
const date1 = new Date('May 11 2020 09:00')
const date2 = new Date(2020, 3, 21, 9)
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date

// now.getDate
// now.setFullYear(2020)

// this is super common used and can be used in strings etc.
