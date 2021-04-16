//                                                       //
//                                                       //
/////////////// Declarations VS Expressions ///////////////
//                                                       //
//                                                       //

// Function Declaration (no ;)

function walk(){
    console.log('walk')
    }
    walk();
    
    // Anonymous Function Expression (we have to use ;)
    let run = function() {
        console.log('run')
    };
    let move = run;
    move();
    run();
    
    
    // Named Function Expression (we have to use ;)
    let run2 = function named() {}
    
    
    // Just how we can set a variable to things, we can set it to functions
    // (Really just setting it to an object)
    
    // 2 ways to define a function in JS, function decleartion or expression
    // Syntax, which basically declars variable or const and setting to func
    
    
    
    //                                                       //
    //                                                       //
    //////////////////////// Hoisting /////////////////////////
    //                                                       //
    //                                                       //
    
    // The key diff between Function Decleration and Expresion is that we can
    // Call function that is functino decleration before it is even defined
    // This is the key diff here. Like using a var before it is defined.
    
    //   a = b;
    //   let a = 1 
    //   let b = 0
    
    // But why is that?
    // It is because JS engine executes this code, it moves all function
    // Declerations to the top, this is called HOISTING.
    // The process of moving functino declerations to the top of the file
    
    
    //                                                       //
    //                                                       //
    /////////////////////// Arguements ////////////////////////
    //                                                       //
    //                                                       //
    
    // Bc JS is dynamic, we can define a function and change or call it
    
    function sum(a,b){
        console.log(arguments);
        return a + b; // 1 + undefined is NaN
    } 
    
    console.log(sum(1));
    console.log(sum(1,2,3,4,5));
    
    // Arguements object looks like array, but it is an object
    // The keys are the indexes of the arguments passed to this function
    // length property is length and callee returns what is being called
    
    // To have a function with varying number of parameters we do 
    
    function sumArguments(){
        let total =0;
        for (let value of arguments)
        total += value;
        return total;
    } 
    
    console.log(sumArguments(1));
    console.log(sumArguments(1,2,3,4,5));
    
    // using loop to iterate over this arguements object
    // for of loops can be used on any object with an iterator
    
    // we can also remove parameters a and b because we are only working
    // With the arguements object.
    
    // will look at better way to impliment this func in Rest Operator
    
    
    
    //                                                       //
    //                                                       //
    ///////////////////// Rest Operator ///////////////////////
    //                                                       //
    //                                                       //
    
    // In modern JS, if you wanna have a function with varying number
    // of parameters, you can use the rest operator
    
    
    // Here we are going to add a declaration to the function and add
    // the rest operator (...)
    
    // NOT THE SPREAD OPERATOR EVEN IF IT LOOKS THE SAME
    // The spread operator spreads the array and takes in its individual
    // elements, but here it is referred to the rest operator.
    
    function sum2(... args){
      return args.reduce((a,b) => a + b);
    } 
    
    console.log(sum2(1, 2, 3, 4, 5, 10));
    
    // here, args is an array of 6 elements / this is a real array
    // Removing those 3 dots means that it is just a 
    // single arguement called args
    
    // So, when we apply rest operator to a paramenter to a function
    // We can pass a varying number of farguments and the rest operator
    // will take all of them and put them into an array
    
    // Here if we want to get the sum of all th enumbers in an array, 
    // we can simply use the reduce method
    
    // so instead of looping and creating total = 0 etc etc.
    // We use one line and make it much more elegant and professional
    
    // Now, we are going to create a function that calcs total numbers 
    // in shopping cart
    
    function sum3(discount, ... prices){
        const total = prices.reduce((a,b) => a+b);
        return total * (1 - discount);
      } 
      
      console.log(sum3(0.1, 20 ,30));
    
    // Rest parameter must be the LAST PARAMETER cannot do 
    // function sum3(discount, ... prices, someValue){}
    
    // This is why it is called rest, we can have 0 or more parameters before
    // this, and then the REST of the arguements 
    
    
    
    
    //                                                       //
    //                                                       //
    /////////////////// Default Parameters ////////////////////
    //                                                       //
    //                                                       //
    
    
    // There are times that we want to supply default values to the 
    // Parameters of a function
    
    // Ex: we are writing function for calculating total interest
    
    function interest(principle, rate, years){
        return principle * rate / 100 * years;
    }
    
    console.log(interest( 1000, 3.5, 5));
    
    // So what if we want to have default values for the interest rate
    // and tht number of years
    
    function interest2(principle, rate, years){
        rate = rate || 3.5;
        years = years || 5;
    
        return principle * rate / 100 * years;
    }
    
    console.log(interest2( 1000));
    
    // so if rate has a value, if it is truthy, we are going to use that
    // otherwise we are going to use 3.5, this is how we give a param
    // a default value if we eclude those numbers
    
    // However starting in CS6, we can do this in a cleaner way, without
    // using these logical expressions
    
    
    function interest3(principle, rate = 3.5, years = 5){
        return principle * rate / 100 * years;
    }
    
    console.log(interest3(1000));
    
    // Setting the default value is super easy, with one caviat
    // if we give a parameter a default value, we should also give all 
    // the following parameters a default value, otherwise we get NaN,
    // it is also super confusing for the JS Engine
    
    // There is a trick around thi if we do
    // console.log(interest3(1000, undefined, 5));
    
    // as best practice use default parameters at the end.
    
    
    //                                                       //
    //                                                       //
    ////////////////// Getters and Setters ////////////////////
    //                                                       //
    //                                                       //
    
    // Special kind of methods in objects
    
    // Lets say we have a person obj with 2 properties
    
    const person = {
        firstName: 'Amein',
        lastName: 'Almoughrabi'
    };
    
    // So if we want their full name we have to do 
    console.log(person.firstName + ' ' + person.lastName);
    console.log(`${person.firstName} ${person.lastName}`);
    
    // problem with this approach is that we may need to display it 
    // in multiple places, we can therefore make it much easier by
    // defining a method in this object and move the expression
    
    // This way we can call the method whenever we wanna call the name
    
    const person2 = {
        firstName: 'Amein',
        lastName: 'Almoughrabi',
        fullName() {
            return`${person2.firstName} ${person2.lastName}`
        }
    };
    
    console.log(person2.fullName());
    
    // instead of adding it as a key value pair we can add it as a function
    // Without the function keywords
    // To define function outside of an object we 
    // function fullName () {}
    // However when adding it inside of an object we drop the function keyword
    // Replacing normal - fullname: function () {},
    
    // The problem with this approach is that is read only, which means you
    // cannot set a persons full name from the outside
    // AKA CANNOT GO
    // person.fullName = 'John Smith'; is not possible
    
    // The other issue is that this is not like a method (need ()) 
    
    
    // SOOOO
    
    // Getters => access properties
    // Setters => change (mutate) them
    
    // In this situation the getter can read this persons full name
    // with setter we can set it from the outside
    
    
    const person3 = {
        firstName: 'Amein',
        lastName: 'Almoughrabi',
        get fullName() {
            return `${person3.firstName} ${person3.lastName}`
        },
        set fullName(value) {
            const parts = value.split(' ');
            this.firstName = parts[0];
            this.lastName = parts[1];
        }
    };
    
    // This method needs a parameter, call it value or whatever, 
    // and it would be whatever is on the right side of the 
    // assignment operator
    
    // expect to see values that have ... as the getter.
    
    person.fullName = 'John Smith';
    
    console.log(person3);
    
    //                                                       //
    //                                                       //
    ///////////////////// Try and Catch ///////////////////////
    //                                                       //
    //                                                       //
    
    