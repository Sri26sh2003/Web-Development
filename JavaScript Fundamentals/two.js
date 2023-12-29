// Printing in js
console.log("Hello Worlld");
//Primitive data types
//values
//number:2 3 5.4 -3
//string:"Hello World"
//Boolean:true  false
//null: nothing(empty)
//undefined:let a; afterwards it is decleared

//non primitive data types
//array collection of data types
//let names = ["srisha" , 5 , flase , "a"]
//object: {}

//keywords
//let and const
//let for variable
//const for constant

//single line comment

//operators
// = assignment operator
// + addition
// - substraction
// * multiplication
// / division
// % modulus (gives the remainder)
// ** power
// , separation
// == comparison 
let a = 5;
let b = 3;
console.log(a==b);
// < greater then
// > lesser then
// == does not check the data types of the containers
// === comparison with data types
// != not equal to 
// >= greater then or equal to 
// <= lesser then or equal to
// && and operator
// || or operator

// Conditions 
// if else
let age = 15;
if(age>18){
    console.log("Eligible to vote");
}
else{
    console.log("Not Eligible to vote")
}
//if else ladder
let signal = "Green"
if(signal=="Green"){
    console.log("Go")
}
else if(signal == "Red"){
    console.log("Stop")
}
else if(signal == "Yellow"){
    console.log("Ready to go")
}
else{
    console.log("Invalid")
}

//Switch
let user = "Admin"
switch(user){
    case "Admin":
        console.log("User is admin")
        break;
    case "student":
        console.log("User is student")    
        break;
    case "mentor":
        console.log("User is mentor")    
        break;
    default:
        console.log("Invalid")            
}

//Loops
//for
for(let i = 0; i < 5 ; i++){
    console.log(i);
}
//while
let j = 0;
while(j<5){
    console.log(j);
    j++;
}
//do while
let k = 0;
do{
    console.log(k);
    k++;
}while(k<5);

// Ternary condition
let isLoggedIn = true;
isLoggedIn ? console.log("Display home page") : console.log("Display Login Page");
