//                                                       //
//                                                       //
//                                                       //
/////////////////////// Introduction //////////////////////
//                                                       //
//                                                       //

// Will learn 
// Adding New Elemenets
// Finding Elements
// Removing Elements
// Splitting Arrays
// Combining Arrays

//                                                       //
//                                                       //
//                                                       //
///////////////////// Adding Elements //////////////////////
//                                                       //
//                                                       //

//Start by declaring const with array

const numbers = [3, 4]
console.log(numbers)

// cannot do numbers = []; because it is const and cannot change value
// however we can modify the content of an arry

// going to look at 3 new methods

// End
numbers.push(5, 6)
console.log(numbers)

//Beginning - pushes arrays to the right and adds new elements to the beginning
numbers.unshift(1,2)
console.log(numbers)

// Middle
// Splice goes to given position and adds or removes elements
// splice = where, delete? add?
numbers.splice(2, 0, 'break')
console.log(numbers)

//                                                       //
//                                                       //
//                                                       //
////////////////////Finding Elemments /////////////////////
//                                                       //
//                                                       //

//THIS IS FOR PRIMATIVES

const numbrs = [3, 1, 2, 3, 4]
console.log(numbrs.indexOf(3));
console.log(numbrs.indexOf(3, 1));
console.log(numbrs.lastIndexOf(3));

// this returns where it is on the array, if not there it'll return -1
// String or not string matters.

// to see if it is even inside you can use this, 
// second method is easier tbh
console.log(numbrs.indexOf(1) !== -1);
console.log(numbrs.includes(1));

//                                                       //
//                                                       //
//                                                       //
////////////////////Finding Elemments /////////////////////
//                                                       //
//                                                       //

// THIS IS FOR REFERENCE TYPES

// This diff is bc here you cannot use courses.include({id:1, name 'a'})
// It is because the object we are passing to the includes are 2 diff 
// objects with 2 diff references. so checking objects with equality
// we check their reference types not their actual values

const courses = [
    { id: 1, name: 'a' },
    { id: 2, name: 'b' }
]


const course = courses.find(function(course) {
    return course.name === 'a';
})

const coursed = courses.find(function(course) {
    return course.name === 'c';
})

console.log(course)
console.log(coursed)

// you can also use instead of .find to .findIndex to do same thing

// Bc this is complex, use outside sources
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find


//                                                       //
//                                                       //
//                                                       //
///////////////////// Arrow Functions /////////////////////
//                                                       //
//                                                       //

// There is a shorter way to write previous code.
// Whenever you want to pass a function as a callback function
// or as an argument for a differene method
// you can use arrow func tion syntax
// if you dont have any paramaters you can use like courses.find()
// you can do a {return blah}, but this way is easier and cleaner

const course1 = courses.find(course => course.name === 'a')
console.log(course1)

//                                                       //
//                                                       //
//                                                       //
//////////////////// Removing Elements ////////////////////
//                                                       //
//                                                       //

// previously we learned about
// numbers.push()
// numbers.usunshift()
// numbers.splice(), but now we use 
 
const rando = [0, 1, 2, 3, 4, 5];
console.log(rando)

//beginning
const last = rando.pop() // removes last element in array and returns in
console.log(last)
console.log(rando)

//last
const first = rando.shift() //returns that was removed in the begining
console.log(first)
console.log(rando)

//middle (index of, how many you wanna delete)
const middle = rando.splice(1, 2)
console.log(middle)
console.log(rando)

//                                                       //
//                                                       //
//                                                       //
//////////////////// Emptying an Array ////////////////////
//                                                       //
//                                                       //

// we must change it to let to just reassign it to a new array

let pleaseHireMe = [1, 2, 3, 4]
let anotherOne = pleaseHireMe;

// Solution 1
// This is tricky bc due to garbage collection
// Old array is still in memory, this means if we have another var
// pointing to the same object, the original array will not be collected
// line 162

pleaseHireMe = [];

console.log(pleaseHireMe);
console.log(anotherOne);

// THIS SOLUTION WORKS WHEN AND IF YOU ARE NOT REFERENCING THE ORIGINAL
// BC ALTHOUGH IT CHANGES IT WILL NOT BE DELETING RESULTING IN ONLY A 
// PORTION BEING CHANGED BUT NO THE ORIGINAL AS SEEN IN LINE 173

// Solution 2

let hireMe = [1, 2, 3, 4]
let exampled = hireMe;


hireMe.length = 0;

console.log(hireMe);
console.log(exampled);

// Solution 3 uses splice method

let hire = [1, 2, 3, 4]
let me = hire;

hire.splice(0, hire.length)

console.log(hire);
console.log(me);

// Solution 4
let hi = [1, 2, 3, 4]
let m = hi;

while (hi.length > 0)
hi.pop()

console.log(hi);
console.log(m);

// use solution 1 if you are not referencing,
// Second solution if you using referenes

//                                                       //
//                                                       //
//                                                       //
////////////////// Combining & Slicing ////////////////////
//                                                       //
//                                                       //

// How to combine or slice array into 2 parts

const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

const combined = firstArray.concat(secondArray);
//This returns NEW array that is a combination of first and second array

console.log(combined)

const slice = combined.slice(2, 4) //starts at 2 and finishes at 4,
// you can use combined.slice(2) for 2 and on and
// combined.slice() will just return full thing
console.log(slice)

// If you have primitives it will be copied into target array
// if you have objects, the references are copied, that means
// elements in input and output point to same object
// Useful if you reference original many times

const firstArrayObject = [{ id: 1}];
firstArrayObject[0].id = 10
// now if you do 
// const combined = firstArray.concat(secondArray);
// the object will be copied by its reference type


//                                                       // 
//                                                       //
//                                                       //
////////////////// The Spread Operator ////////////////////
//                                                       //
//                                                       //

// This is similar to the concat operator, much cleaner and flexible


const firstArraySpread = [1, 2, 3];
const secondArraySpread =  [4, 5, 6];

// When spreading an array, all its elements are returned individually
//const combined = firstArray.concat(secondArray);

const combinedArray = [...firstArraySpread, ...secondArraySpread];
console.log(combinedArray)

// This also gives the felixbility to do things like add arrays or 
// Characters such as ...firstArraySpread, 'a', ...second, 'b'

//const slice = combinedArray.slice(2, 4)
const copy = [...combinedArray]
console.log(copy)

//                                                       // 
//                                                       //
//                                                       //
////////////////// Iterating an Array /////////////////////
//                                                       //
//                                                       //

// In control flow we learned about loops and stuff
// for arary we use for of loop

const digits = [1, 2, 3];

for (let digit of digits) {
    console.log(digit);
}

// can also use the foreach
digits.forEach(function(digit){
    console.log(digit)
})

// can use arrow function syntax here too

digits.forEach(digit => console.log(digit))
// digits.forEach(digit => {
// console.log(digit)
// })

// the call back function can optionally take a second parameter 
// and thats the index
digits.forEach((digit, index) => console.log(index, digit))

// we dont get the index with the for of loop, for that use the for in

//                                                       // 
//                                                       //
//                                                       //
///////////////////// Joining Arrays //////////////////////
//                                                       //
//                                                       //

// when you see a ? in the parameter, its optional
const numbas= [1, 2, 3]
const joined = numbas.join(', ')
console.log(joined)

// Another useful method that goes hand in hand with join 
// is the split method
// It is part of strings not arrays but anyway ->

const message = 'Why is Paris empty?';
console.log(message);
const parts = message.split(' ')
console.log(parts)

const recombining = parts.join('-')
console.log(recombining)
// This technique is super useful when making a url slug


//                                                       // 
//                                                       //
//                                                       //
///////////////////// Sorting Arrays //////////////////////
//                                                       //
//                                                       //

const unsorted = [2, 3, 1];
console.log(unsorted);
unsorted.sort();
//converts each element into a string and then sorts them in the array
console.log(unsorted);

// Similarly, we can use another method companied, called reverse.
unsorted.reverse();
console.log(unsorted);

// But when you have objects, it does not work by default
// we have to do some extra work
// ex:

const courses2 = [
    {id: 1, name: "Node.js"},
    {id: 2, name: "JavaScript"}
]

courses2.sort();
// This method gets 2 objects and compares them,
// if it is the right order, it skips to next 2 elements
console.log(courses2); // This does not work

// use:
courses2.sort(function(a, b){
// a < b => -1
// a > b => 1
// a === b => 0

    if (a.name < b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
})

console.log(courses2)
// If you use lowercase j instead of J, Node.js will go first
// This is due to the ascii table
// http://www.asciitable.com/

// TO SOLVE THIS, YOU CAN EXCLUDE CASE SENSITIVITY

// const nameA = a.name.toUpperCase(); //or lower
// const nameb = b.name.toUpperCase();
// also replace a.name with nameA

//                                                       // 
//                                                       //
//                                                       //
///////////// Testing Elements of an Array ////////////////
//                                                       //
//                                                       //

// 2 new methods in modern JS are called every and some

const everyOne = [1, -3, 2, 3];
// going to check if this is positive

const allPositive = everyOne.every(function(value){
    return value >= 0;
})
console.log(allPositive)
// ^ Immedieately terminates after one element doesn't match the criteria

// 3 values, number-index-array
// you only need to add the ones that you need

// checks to see if we have at least ONE 
// element that matches this criteria
const atLeastOnePositive = everyOne.some(function(value){
    return value >= 0;
})
console.log(atLeastOnePositive)

//RECAP
// every() checks to see if all elements match the criteria
// sum() checks to see if we have at least one element that matches

// These methods are mostly only for newer browser but you can bring them
// To older browsers using a workoaround mentioned later.


//                                                       // 
//                                                       //
//                                                       //
////////////////// Filtering an Array /////////////////////
//                                                       //
//                                                       //

const unfiltered = [1, -1, 2, 3, -5, 4];
//value index array in filter
const filtered = unfiltered.filter(value => value >= 0);

console.log(unfiltered)
console.log(filtered)

// Can also be rewritten as 
// const filtered = unfiltered.filter(function(value){
//     return value >= 0
// });

// In a real world application you would be using an array of objects
// Example: filtering restaurants that are open or closed for customers

//                                                       // 
//                                                       //
//                                                       //
//////////////////// Mapping an Array /////////////////////
//                                                       //
//                                                       //

// Map method is very useful new method in js 
// Can map each item in an array to something else

const unfiltered2 = [1, -1, 2, 3, -5, 4];
//value index array in filter
const filtered2 = unfiltered2.filter(value => value >= 0);

const items = filtered2.map(n => '<li>' + n + '</li>')
console.log(items)

// list item for HTML
// Now we use join to join them into a string
const html = '<ul>' + items.join(' ') + '</ul>' // we use ' ' bc by default it is ,

console.log(html)

// Here we mapped to strings, but we can also map to objects

const mappingObjects = filtered2.map(n => ({value: n}) )

console.log(mappingObjects)
// here we mapped each number to an object with a value property
// by default n => whatever represents a code block so {value: n}
// will not work, so we need to have ({value:n })
// Now it will not return as undefined


// Both the filter and map method return a new array
// They do not modify the original array

//These methdos are chainable (can be called 1 after another in a chain)

// We can straight up get rid of const filter and just do
const chainingItems = unfiltered
    .filter(value => value >= 0)
    .map(n => ({value: n}) )
    .filter(bject => bject.value > 1)
    .map(bject => bject.value)

// When chaining multiple methods, we put each method
// It is common coding ettiquite to code it like this if you do
// Chaining 
console.log(chainingItems)

//                                                       // 
//                                                       //
//                                                       //
/////////////////// Reducing an Array /////////////////////
//                                                       //
//                                                       //

const reducing = [1, -1, 2, 3];
// lets say we wanna calc the sum of all the numbers in this array.
// Each num here would represent item in shopping cart

let sum = 0;
for( let n of reducing)
    sum += n;

console.log(sum)

// We can also write this using
// reduce method reduces all elements in array into single value
// num string array - anything

const finalSum = reducing.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0)

console.log(finalSum)
//Here intitially accumulator is a=0, in the first round c=1
// a = 0, c = 1 => a = 1
// a = 1, c = -1 => a=0
// a = 0, c = 2 => a=2
// a = 2, c = 3 => a=5


// Here the accumulator parameter is like the sum, it is something
// we initialize and this currentValue callback function will be 
// executed multiple times. Each time the currentValue will be set
// to one value to the arrray

// Essentially with this reduce method,
// we start with accumulator, loop through Array,
// Convert all these elements into a single value (in this case accum)
// we can make the code shorter like this

const finalSumSimplified = reducing.reduce(
    (accumulator, currentValue) => accumulator + currentValue
);
console.log(finalSumSimplified)
// removing the 0 will have it start as 
// a = 1, c = -1 => a=0
// a = 0, c = 2 => a=2
// a = 2, c = 3 => a=5

// This way is much more modern and clean