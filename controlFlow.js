// if else // Switch...Case // For // While // Do...While // Infinite Loops
// For...In // For...Of // Break and Continue


///////////////////////////////////////////////////////////
///////////// IF ELSE STATEMENT TEMPLATES/////////////////
//////////////////////////////////////////////////////////

// {} is only useful if there are multiple statements (referred to as block of code)
/* if (condition){
    statement
}

else if (anotherCondition){
    statement
}
else if(yetAnotherCondition)
    statement
else
    statement

*/ 

// If we want to get the hour and depending on its value, 
// We want to greet the user with a diff message
// If the hour is between 6am and 12pm: display Good Morning!
// Between 12pm and 6pm: display Good Afternoon!
// Otherwise: Good Evening!

var hour = new Date();
hour.getHours();

if (hour >= 6 && hour < 12)
    console.log('Good morning');
else if (hour >= 12 && hour < 18)
    console.log('Good Afternoon!');
else
    console.log('Good Evening!');

///////////////////////////////////////////////////////////
///////////// SWITCH CASE STATE TEMPLATES/////////////////
//////////////////////////////////////////////////////////

//not gonna ue the condition just var
//switch(variable){}
// switch (key) {
//     case value:   //used to compare value of variable with something
        
//         break;    //jump out of switch block so not everything is registered

//     default:      //if nothing is able to work
//         break;    //not neccessary after 
// }

// Determine if role of user is a guest or moderator or admin 
//using switch and case, rather than use if and else
//switch and else are kinda outdated and not my pref tbh

let role

role = 'guest';

switch (role) {
    case 'guest':
        console.log('Guest User');
        break;

    case 'moderator':
        console.log('Moderator User');
        break;

        case 'admin':
        console.log('Administrator User');
        break;

    default:
        console.log('Unknown User');
}

//can be implimented using if...else statements as well 
//(=== uses both value and type)

///////////////////////////////////////////////////////////
//////////////////////// FOR /////////////////////////////
//////////////////////////////////////////////////////////
//able to repeat actions a number amount of times

// will execute statement as long as the condition is true until
// the increment reaches condition

// for (initialExpression; condition; incrementExpression)
//    statement //use {} if you have multiple conditions

// for (let i = 0; i < 5; i++) {
//    const element = array[i];
//    }

// The original one provided by VsCode
// for (let index = 0; index < array.length; index++) {
    // const element = array[index];
// }

for (let i = 1; i < 5; i++) {
    if (i % 2 !== 0)
    console.log('Hello World ', i);
}
// Odd numbers from to less than 5

for (let i = 5; i >= 1; i--) {
    if (i % 2 !== 0)
    console.log('Hello World ', i);
}
// Odd numbers from 5 to 1

///////////////////////////////////////////////////////////
/////////////////////// While ////////////////////////////
//////////////////////////////////////////////////////////
// while (condition) {
    // statements
// }
// For loop has it in the loop itself
// This is called scope, where the var is only meaningful in the loop
// Key diff is that the while loop has to declare the var externally
//therefore you can have:

let i = 0;

while (i <= 5) {
    if (i % 2 !== 0) console.log('Hello World ', i);
    i++;
}

//This is a direct translation of the for loop above

///////////////////////////////////////////////////////////
//////////////////// Do While ////////////////////////////
//////////////////////////////////////////////////////////
// Very similar to while loops but slightly different
// Here, you cannot redeclare i by using:
// let i - 0; since it is already declared above in the while loop
// Will be using the i above anyway

do {
    if (i % 2 !== 0) console.log('Hello World ', i);
    i--; 
} while (i >= 1);

// KEY DIFF OF THE DO WHILE LOOP
// IT WILL ALWAYS BE EXECUTED AT LEAST ONCE 
// Practically speaking will prob be using the while and for tbh

///////////////////////////////////////////////////////////
//////////////////// For...In ////////////////////////////
//////////////////////////////////////////////////////////

//With these two next loops, use to iterate the properties of an 
// object or elements in an array. This one useful for objects
const person = {
    name: 'Mosh',
    age: 30
};

for (const key in person) {
        console.log(key, person[key]);
}

//array
const colors = ['red', 'green', 'blue'];

for (let index in colors)
    console.log(index, colors[index]);

///////////////////////////////////////////////////////////
//////////////////// For...Of ////////////////////////////
//////////////////////////////////////////////////////////

//Ideal to iterate over arrays

for (let color of colors)
    console.log(color);

    //you do not have to deal with index etc etc

///////////////////////////////////////////////////////////
///////////////// Break and Continue //////////////////////
//////////////////////////////////////////////////////////

// Can change how loops behave (using while loop for ex)


while (i <= 10) {
    //if (i === 5) break;
    if (i % 2 === 0){
        i++;
        continue;
    }

    console.log(i);
    i++;
}

//continue jumps to the beginning of the loop again