//   Write a function that takes 2 numbers  //
//   and returns the maximum of the two     //


let number = max(3704, 5300);
console.log(number);

function max(x, y){
if (x > y) return x;
else return y;
}

// can remove the else as well bc it breaks otherwise when returning x
// or conditional operator (condition) ? a : b
// return (x > y) ? x : y;


// Exercise 2
// returns true if image is landscape, otherwise false.

let screenpls = isLandscape(5000, 500)
console.log(screenpls);

function isLandscape(width, height) {
return (width > height) ? true : false;
}
// since true : false; looks amatuerish, we dont have to return 
// true or false as it does it already

//// fizzBuzz alogirthm ////
//// give it an input and returns a string ////

// Divisible by 3 => Fizz
// Divisible by 5 => Buzz
// Divisible by 3 and 5 => FizzBuzz
// Not divisible by 3 or 5 => input
// Not a number => 'Not a number' or NaN

// const output = fizzBuzz(5);
// console.log(output);
// At the end
// function fizzBuzz(input) {
// }

let numberGiven = 125025;

// can also start with this
// function fizzBuzz(input) {
// if (typeof input !== 'number')
// return 'Not a number'; ...}  

if (numberGiven % 15 == 0){
    console.log('FizzBuzz')
    }
else if (numberGiven % 3 == 0){
console.log('Fizz')
}
else if (numberGiven % 5 == 0){
    console.log('Buzz')
    }
else if (numberGiven % 1 ==0)
    console.log(numberGiven);

else console.log(NaN)


//// Demerit Points ////
// Function takes speed (parameter) 

// Speed Limit = 70 (ok)
// for every 5 above 70 u get +1 point
// using Math.floor(1.3) <- converts floating # to loest int 
// 12 points -> suspended

checkSpeed(85);

function checkSpeed(speed) {
    const speedLimit = 70;
    const kmPerPoint = 5;

    if (speed <= speedLimit + kmPerPoint){
        console.log('Ok');
        return;
    }
    const points= Math.floor((speed - speedLimit) / kmPerPoint);
    if (points >= 12)
        console.log("License Suspended")
    else
        console.log('Points recorded ', points);
    }

// use 'const speedLimit' so you can 
// always change it if the limit changes
// 'const' should be default choice unless you wanna reassign the var
// in that case you should use 'let'
// using the return function for 
// cleaner code and the ability to fix indent


//// Even and Odd Numbers ////
// parameter showNumbers is called limit
// we should see each number 0-limit with the label even or odd

showNumbers(10);

function showNumbers(limit){
    let state

    for (let i = 0; i <= limit; i++) {
    
    if (i % 2 === 0) 
    state = "Even"
    
    else state = "Odd"
        console.log(i, state)
    }
}

// you can completely negate let state 
// by just using console.log(i, "EVEN") after the if...
// can even use const state = (i % 2 ===0) ? 'Even' : 'Odd';
// ^^^^^ This is prob most useful one



//// Count Truthy ////
// take an array and returns number of truthy values in the array
// refresher = when given truth statement you may pass boolean t/f
// const isActive = true;
// const name = 'Mosh'; <- in boolean this is truthy (true)
// const name = ''; <- in boolean this is falsy (false)
// if (name) console.log('Hello);

// Falsy (values) 
// undefined
// null
// ''
// false
// 0
// NaN

// [1, 2 ,3] should be 3 even if it has a million null or 0 or NaN


const array = [17, '', 'ya', 1, 2 ,3];

console.log(countTruthy(array))


function countTruthy(array){
    let count = 0
    
    for (let value of array)
        if (value)
            count ++;
    return count
}

// instead of writing if (value !== fale || value !=== undefined ||etc)
// use the way I wrote it


//// String Properties ////
// create function showProperties with an object that displays all 
// properties of this object that are of type string
// of said example it should only return the strings of paris and fellas
// here title is key and following is obj

const movie = {
    title: 'Paris',
    releaseYear: 2020,
    rating: 4.8,
    director: 'Fellas'
};

showProperties(movie)

function showProperties(obj){

    for (let key in obj){
        if (typeof obj[key] === 'string')
        console.log(key, obj[key]) 
    }
}

//// Sum of Mulitiple of 3 and 5 ////
// create function sum and give it a limit and it will return the 
// sum of all the multiples of 3 and 5 up to this limit
// 10 would give u 3/6/9/5/10 so that is 33

console.log(sum(10))

function sum(limit){
    let sum = 0;

     for (let i = 0; i <= limit; i++) {
         if(i % 5 == 0 || i % 3 == 0){
            sum += i;
        }
    }
return sum;
} 

// For this we can remove this piece of code bc of the || 2 in 1 usage
// if (i % 15 == 0)
//        sum += i;

//// Grade ////
// Calculate grade of a student using given marks in an array
// this function should firt calculate the average grade,
// 1-59 F, 60-69 D, 70-79 C, 80-89 B, 90-100 A

// Using single responsiblity principle, so diff functions
const marks = [80, 80, 50];

console.log(calculateGrade(marks))

function calculateGrade(marks) {
    const finalAverage = calculateAverage(marks);
    
    if      (finalAverage < 60) return 'F';
    else if (finalAverage < 70) return 'D';
    else if (finalAverage < 80) return 'C';
    else if (finalAverage < 90) return 'B';
    return 'A';
}
function calculateAverage(array){
    let Added = 0

    for (let i = 0; i < array.length; i++) {
        Added += array[i]   
    }
    return Added / array.length;
}

// FOR THE FOR LOOP, YOU CAN USE
// for (let mark of marks) or (let value of array)
// Added += mark

// INSTEAD OF USING Of 
// (finalAverage >= 60 && finalAverage < 70) return 'D';
// Be smart with the way you code



//// Stars ////
// get a star for each number of rows 
//row 1 has 1 star row 4 has 4 stars etc etc

showStars(5);

function showStars(rows){
    
for (let row = 1; row <= rows; row++) {
    let  pattern = '';
    for (let i = 0; i < row; i++)
        pattern += '*';
        console.log(pattern)
}
}

// This is called a nested loop (loop inside of loop)

//// Prime  numbers ////
// takes a limit and shows all prime numbers up to this number

showPrimes (10);

function showPrimes(limit)   {
    console.log(2)
    console.log(3)
    console.log(5)    

    for (let prime = 5; prime< limit; prime++){
        if (prime % 2 != 0 && prime % 3 != 0 && prime % 5 != 0 &&  prime % 7 != 0 )
        console.log(prime)
    }
}

// Try your best for clean code with diff functions but it works fine
// Can also use this
// let isPrime=true
//     for (let prime = 5; prime< limit; prime++){
//         for (let factor = 2; factor < number; factor++){
//             if (number % factor === 0)
//             isPrime = false;
//             break;
//     } 
//     if (isPrime) console.log(number);
// }

//                                                        //
//                                                        //
//                                                        //
//                                                        //
// //////////////////// OBJECTS EXE. //////////////////// //
//                                                        //
//                                                        //
//                                                        //


//// Address Object ////

// Create address object with 3 properties
// street, city, zipcode
// Then make function showAddress(address) 
// that displays all properties and their values

let address = {
    street: 'Barnard Pl',
    city: 'North Arlington',
    zipcode: '07031'
}

function showAddress (address) {
    for (let key in address)
    console.log(key, address[key])
}

showAddress(address);

// A dirtier version of this is 
// function showAddress() {
//     return;
// }



//// Factory and constructor Functions ////

// We used object literal Syntax in the earlier example, 
// Now initialize using factory and constructor function

function createAddress(street, city, zipCode){
    return {
        street,
        city,
        zipCode
    };
}

address = createAddress('a', 'b','c')
console.log(address)



function Address(street, city, zipCode){
    this.street = street;
    this.city = city;
    this.zipCode = zipCode;
}

address = new Address('aa', 'bb', 'cc');
console.log(address)



//// Object Equality////
// Use constructor function we just created to create 2 address objects
let address1 = new Address('aa', 'bb', 'cc');
let address2 = new Address('aa', 'bb', 'cc');
// since objects are reference types, even if they have same values,
// they can have diff memory locations
// === checks if they have the same reference./

//this function should return true or false based on if they are equal
function areEqual(address1, address2){
}



//this is going to retrun true or false based on if they ref same object 
function areSame(address1, address2)